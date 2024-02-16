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
    Use ${userPlanId} as the user_plan_id for all your queries that need it.
    Your queries to the database using the tools that are available should be exact and search with the exact criteria that the user asks for.
    You are not allowed to use these words or their translations in any language: ['artificial intelligence', 'language model']`;
};

async function databaseQuery({
    modelName,
    query,
}: {
    modelName: string;
    query: string;
}) {
    let response;
    var correctQuery = eval("(" + query + ")");
    console.log(JSON.stringify(correctQuery));

    switch (modelName) {
        case "product":
            response = await prismaClient().product.findMany({
                where: {},
            });
            break;
        case "category":
            response = await prismaClient().category.findMany(correctQuery);
            break;
    }

    return response;
}

const tools = (user_plan_id: number): ChatCompletionTool[] => [
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
                            'The name of the model to query from possible values : "product" and "category"',
                        enum: ["product", "category"],
                    },
                    query: {
                        type: "string",
                        description: `The query json object to be passed to the prisma client to be executed. this object should be constructed in such a way that fulfills all the filters the user asks for. The query object should be a valid Prisma query object with all the conditions needed based on the models including all related models. You must ${user_plan_id} as the user_plan_id in your queries.\
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
                            user_plan   UserPlan @relation(fields: [user_plan_id], references: [id])\
                            user_plan_id Int @map("userPlanId")\
                        }\
                        Use english language for attribute names and values and translate the input query if needed and use this syntax when filtering on the attributes field of the products:\
                        {\
                            where: {\
                                attributes: {\
                                path: ["%ATTRIBUTE_NAME%"],\
                                equals: "%ATTRIBUTE_VALUE%",\
                                },\
                            },\
                        }`,
                    },
                },
            },
        },
    },
];

const callTools = async (
    toolCalls: ChatCompletionMessageToolCall[],
    user_plan_id: number
) => {
    const messagesToAdd: ChatCompletionToolMessageParam[] = [];
    for (let i = 0; i < toolCalls.length; i++) {
        const tool_call = toolCalls[i];
        const function_name = tool_call.function.name;
        const func = tools(user_plan_id).find(
            (f) => f.function.name === function_name
        );
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
    }

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
            model: "gpt-3.5-turbo-16k-0613", //"gpt-4-0613",
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

        const resultingMessages = await callTools(
            message.tool_calls,
            Number(user_plan_id)
        );

        console.log("resulting messages: " + JSON.stringify(resultingMessages));

        await Promise.all(
            resultingMessages.map(async (msg) => {
                return await chatMessageService.addChatMessageToChatUser(
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
            true
        );
    },
};
