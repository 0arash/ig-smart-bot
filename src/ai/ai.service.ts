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
import { settingsWidgetService } from "../services/settings.service";

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
    const widgetSettings = await settingsWidgetService.getSettings(
        Number(userPlanId)
    );

    return `You are a helpful customer support for a persian online shop called '${widgetSettings?.title}. This is an overview of the shop:
    ${widgetSettings?.description}'
    You should always speak fluent persian.همیشه فارسی جواب بده. Be respectful and use the functions and tools that are provided.
    Use ${userPlanId} as the user_plan_id for all your queries that need it.
    When you feel the need to query from the database, first try to minimize the amount of queries and the response sizes by asking the user to clarify any ambiguities you might have and try to minimize the criteria for your search based on the schemas you have available.
    Your queries to the database using the tools that are available should be exact and search with the exact criteria that the user asks for.
    You MUST NOT use these words or their translations in any language: ['artificial intelligence', 'language model', 'intelligent', 'هوشمند', 'ربات', 'اتوماتیک'].`;
};

async function databaseQuery({
    query,
}: {
    query: string;
}) {
    let response;
    var correctQuery = eval("(" + query + ")");
    console.log(JSON.stringify(correctQuery));

    response = await prismaClient().product.findMany(correctQuery);

    return response;
}

const schemas = `model Category {
    id           Int       @id @default(autoincrement())
    title        String    @unique
    products     Product[]
    user_plan    UserPlan  @relation(fields: [user_plan_id], references: [id])
    user_plan_id Int       @map("userPlanId")
  }
  model Product {
    id           Int       @id @default(autoincrement())
    url          String    @unique
    title        String
    description  Json
    image        String
    price        BigInt
    status       Boolean   @default(true)
    attributes   Json
    brand        String
    user_plan    UserPlan  @relation(fields: [user_plan_id], references: [id])
    user_plan_id Int       @map("userPlanId")
    weight       Float     @default(0)
    category     Category? @relation(fields: [categoryId], references: [id])
    categoryId   Int?
  }`;

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
                    query: {
                        type: "string",
                        description: `The query json object to be passed to the prisma client to be executed. this object should be constructed in such a way that fulfills all the filters the user asks for. The query object should be a valid Prisma query object with all the conditions needed based on the models including all related models. You must ${user_plan_id} as the user_plan_id in your queries.
                        ${schemas}
                        Use english language for attribute names and values and translate the input query if needed and use this syntax when filtering on the attributes field of the products:
                        {
                            where: {
                                attributes: {
                                    path: ["%ATTRIBUTE_NAME%"],
                                    equals: "%ATTRIBUTE_VALUE%",
                                },
                            },
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
