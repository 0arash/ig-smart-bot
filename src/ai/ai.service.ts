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
    You have to write your responses in one of JSON formats shown below : 
    RESPONSE Option #1 : 
    "{
        type: "text",
        content: "RESPONSE HERE"
    }"
    RESPONSE Option #2 : 
    "{
        type: "catalog",
        content: {
            items: [
                {
                    title: "PRODUCT TITLE",
                    image: "PRODUCT IMAGE URL",
                    url: "PRODUCT URL"
                }
            ]
        }
    }"
    You have to choose one of the above and your response should only be the formatted Json object and nothing more.
    Either you choose to send a Json containing a catalog of products or a Json containing text response.
    Your response should ALWAYS ONLY contain ONE Json object following the formats given above.
    `
}

export const getMainPrompt1 = async (userPlanId: string) => {
    const widgetSettings = await settingsWidgetService.getSettings(
        Number(userPlanId)
    );

    return `You are a helpful customer support for a persian online shop called '${widgetSettings?.title}. This is an overview of the shop:
    ${widgetSettings?.description}'
    You should always speak fluent persian.همیشه فارسی جواب بده. Be respectful and use the functions and tools that are provided.
    Use ${userPlanId} as the user_plan_id for all your queries that need it.
    When you feel the need to query from the database, first try to minimize the amount of queries and the response sizes by asking the user to clarify any ambiguities you might have and try to minimize the criteria for your search based on the schemas you have available.
    Your queries to the database using the tools that are available should be exact and search with the exact criteria that the user asks for.
    You MUST NOT use these words or their translations in any language: ['artificial intelligence', 'language model', 'intelligent', 'هوشمند', 'ربات', 'اتوماتیک'].
    Whenever you're sending a list of products, minimize the amount of text you write by omitting not important data and just write the most helpful stuff. also put the products list in the format below and nothing else: 
    {
        type:"catalog",
        content: {
            items: [
                {
                    EACH PRODUCT INFO HERE
                }
            ]
        }
    }
    When using this format you shouldn't continue with any other text and just send the json containing the products. also remember to omit data that is specific to the backend and don't overshow information`;
};

async function databaseQuery({
    query,
}: {
    query: string;
}) {
    let response;
    // var correctQuery = eval("(" + query + ")");
    // console.log(JSON.stringify(correctQuery));
    // console.log(query);    

    response = await prismaClient().$queryRawUnsafe(query);
    // response = await prismaClient().product.findMany(correctQuery);

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
    price        String
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
                        // description: `The raw query string to be passed to the prismaClient.queryRawUnsafe function to be executed. this query should be constructed in such a way that fulfills all the filters the user asks for. You must ${user_plan_id} as the user_plan_id in your queries. ALWAYS LIMIT the number of items queried from the database to 4. Persian words have different ways of writing. consider that and know that for the user words like 'لپ تاپ' and 'لپتاپ' are basically the same. search for different variations of the words when querying.
                        // ${schemas}
                        // products are in the Product table and categories are saved in the Category table. ALWAYS filter products based on their categoriy according to the user request and use JOIN to include all the data that can be fetched from the database and minimize your query calls. when asked about products in a category you should remember to query from the products table. Use the ILIKE operator for string matching in queries and for category names try different forms of the word like with space or without and use pattern matching for all spaces in queries for example 'لپ تاپ' should be '%لپ%تاپ%' in query. When you have the name of a category first try to find its id and use that in your next query for the products. Use english language for names and values and translate the input query if needed. And REMEMBER to use this format for table names : public."TABLE_NAME"`,
                        description: `This is the raw query string that will be passed to the prismaClient.queryRawUnsafe function. Write your queries in a way that with minimum number of queries the most data that is needed will be fetched from the database.
                        Use JOIN to fetch relations and also use pattern matching and ILIKE operator to search for strings. use LIMIT 4 to limit the number of items fetched from the database and therefore minimize the response length. these are the schemas for the database :
                        ${schemas}`
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
        use_tools: boolean = true,
        loop: number = 1
    ): Promise<string> {
        const history = await getMessageHistoryForUser(
            chat_user_id,
            user_plan_id
        );

        const completion = await getOpenAI().chat.completions.create({
            messages: history,
            model: "gpt-3.5-turbo-1106", //"gpt-4-0613",
            tools: use_tools ? tools(Number(user_plan_id)) : undefined,
            max_tokens: 1200,
            temperature: 0.3,
            n: 1,
            frequency_penalty: 1.5,
            response_format: {
                type: "json_object"
            }
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
            loop >= 4 ? false : true,
            loop + 1
        );
    },
};
