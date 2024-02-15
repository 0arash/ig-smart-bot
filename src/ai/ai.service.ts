import { OpenAI } from "openai";
import { chatMessageService } from "../services/chat.message.service";
import {
    ChatCompletionMessageParam,
    ChatCompletionMessageToolCall,
    ChatCompletionSystemMessageParam,
    ChatCompletionTool,
    ChatCompletionToolMessageParam,
} from "openai/resources";
import { userPlanService } from "../services/user.plan.service";
import { prismaClient } from "../utils/prisma.client";

let openAI: OpenAI;

export const getOpenAI = () => {
    if (!openAI) {
        openAI = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }

    return openAI;
};

export const getMainPrompt = async (userPlanId: string) => {
    const userPlan = await userPlanService.getUserPlanById(userPlanId);

    return `You are a helpful support for a persian online shop called '${userPlan?.business_title}. This is an overview of the shop:\
    ${userPlan?.business_caption}'\
    You should always speak fluent persian and you must never let anyone know that you are a language model or a chat bot.
    Be respectful and use the functions and tools that are provided.
    Use ${userPlanId} as the user_plan_id for all your queries that need it.`;
};

async function databaseQuery({
    modelName,
    query,
}: {
    modelName: string;
    query: string;
}) {
    var correctQuery = eval("(" + query + ")");
    
    switch (modelName) {
        case "product":
            return await prismaClient().product.findMany(correctQuery);
        case "category":
            return await prismaClient().category.findMany(correctQuery);
    }
}

const tools = (user_plan_id: number) : ChatCompletionTool[] => [
    {
        type: "function",
        function: {
            name: "databaseQuery",
            description:
                "Query from the database to retrive data and return the result.",
            parameters: {
                type: "object",
                properties: {
                    modelName: {
                        type: "string",
                        description:
                            'The name of the model to query from. possible values : "product" and "category", \
                                model Product {\
                                    id           Int        @id @default(autoincrement())\
                                    url          String\
                                    title        String\
                                    description  String\
                                    image        String\
                                    price        Int\
                                    status       Boolean    @default(true)\
                                    attributes   Json\
                                    user_plan    UserPlan   @relation(fields: [user_plan_id], references: [id])\
                                    user_plan_id Int        @map("userPlanId")\
                                    weight       Float      @default(0)\
                                    categories   Category[]\
                                }\
                                model Category {\
                                    id       Int       @id @default(autoincrement())\
                                    title    String\
                                    products Product[]\
                                }',
                        enum: ["product", "category"],
                    },
                    query: {
                        type: "string",
                        description:
                            `The query json object to be passed to the prisma client to be executed. The query object should be a valid Prisma query object with all the conditions needed based on the models including all related models. You must ${user_plan_id} as the user_plan_id in your queries.`,
                    },
                },
            },
        },
    },
];

const callTools = async (toolCalls: ChatCompletionMessageToolCall[], user_plan_id: number) => {
    const messagesToAdd: ChatCompletionToolMessageParam[] = [];
    toolCalls.forEach(async (tool_call) => {
        const function_name = tool_call.function.name;
        const func = tools(user_plan_id).find((f) => f.function.name === function_name);
        if (func) {
            const function_args = JSON.parse(tool_call.function.arguments);

            try {
                let response;
                switch (function_name) {
                    case "databaseQuery":
                        response = await databaseQuery({ ...function_args });
                        break;
                }

                messagesToAdd.push({
                    tool_call_id: tool_call.id,
                    role: "tool",
                    // name: function_name,
                    content: JSON.stringify(response),
                });
            } catch (error) {
                console.log(error);
            }
        }
    });

    return messagesToAdd;
};

const getMessageHistoryForUser = async (
    chatUserId: string,
    userPlanId: string
) => {
    const messageHistory = (await chatMessageService.getChatMessagesByUserId(
        chatUserId,
        userPlanId
    ))!.slice(-10);

    const formattedMessages: ChatCompletionMessageParam[] = messageHistory.map(
        (message) => ({
            role: message.chat_user_id ? "user" : "assistant",
            content: message.content,
        })
    );

    const result = [
        {
            role: "system",
            content: await getMainPrompt(userPlanId),
        } as ChatCompletionSystemMessageParam,
        ...formattedMessages,
    ];

    return result;
};

export const AIService = {
    async generateResponse(
        chat_user_id: string,
        user_plan_id: string,
        use_tools: boolean = true
    ): Promise<string> {
        const history = await getMessageHistoryForUser(
            chat_user_id,
            user_plan_id
        );

        const completion = await getOpenAI().chat.completions.create({
            messages: history,
            model: "gpt-4-0613",
            tools: use_tools ? tools(Number(user_plan_id)) : undefined,
            max_tokens: 350,
            temperature: 0.5,
            n: 1,
        });

        // If there is no function call, we're done and can exit this loop
        const message = completion.choices[0]!.message;

        if (!message.tool_calls) {
            await chatMessageService.addChatMessageToChatUser(
                chat_user_id,
                user_plan_id,
                message.content!.trim(),
                false
            );
            return message.content!.trim();
        }

        const resultingMessages = await callTools(message.tool_calls, Number(user_plan_id));

        await Promise.all(
            resultingMessages.map(async (msg) => {
                console.log(JSON.stringify(msg));

                await chatMessageService.addChatMessageToChatUser(
                    chat_user_id,
                    user_plan_id,
                    JSON.stringify(msg),
                    false
                );
            })
        );

        return await AIService.generateResponse(
            chat_user_id,
            user_plan_id,
            false
        );
    },
};
