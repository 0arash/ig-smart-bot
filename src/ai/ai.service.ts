import { OpenAI } from "openai";
import { chatMessageService } from "../services/chat.message.service";
import {
    ChatCompletionFunctionMessageParam,
    ChatCompletionMessage,
    ChatCompletionMessageParam,
    ChatCompletionSystemMessageParam,
} from "openai/resources";

let openAI: OpenAI;

export const getOpenAI = () => {
    if (!openAI) {
        openAI = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }

    return openAI;
};

export const getMainPrompt = () => {
    return "You are a helpful tech support for an online shop. Don't let anyone know you are a language model";
};

const createFunction = (
    name: string,
    description: string,
    params?: Record<string, unknown>
) => {
    return {
        name,
        description,
        params,
    };
};

const callFunction = async (
    functionCall: ChatCompletionMessage.FunctionCall
) => {
    switch (functionCall.name) {
        case "getVersion": {
            return "1.0.0";
        }
    }
};

const getFunctions = () => {
    return [
        createFunction(
            "getVersion",
            "Returns the current version of the Hix-Web-Api"
        ),
    ];
};

const getMessageHistoryForUser = async (
    chatUserId: number,
    userPlanId: number
) => {
    const messageHistory = (
        await chatMessageService.getChatMessagesByUserId(chatUserId, userPlanId)
    ).slice(-10);

    const formattedMessages: ChatCompletionMessageParam[] = messageHistory.map(
        (message) => ({
            role: message.chat_user_id ? "user" : "assistant",
            content: message.content,
        })
    );

    const result = [
        {
            role: "system",
            content: getMainPrompt(),
        } as ChatCompletionSystemMessageParam,
        ...formattedMessages,
    ];

    return result;
};

export const AIService = {
    async generateResponse(chat_user_id: number, user_plan_id: number) {
        const history = await getMessageHistoryForUser(
            chat_user_id,
            user_plan_id
        );

        while (true) {
            const completion = await getOpenAI().chat.completions.create({
                messages: history,
                model: "gpt-3.5-turbo-16k-0613",
                functions: getFunctions(),
                function_call: "auto",
            });

            // If there is no function call, we're done and can exit this loop
            const message = completion.choices[0]!.message;
            if (!message.function_call) {
                return message.content;
            }

            const result = await callFunction(message.function_call);
            const newMessage = {
                role: "function",
                name: message.function_call.name,
                content: JSON.stringify(result),
            } as ChatCompletionFunctionMessageParam;
            history.push(newMessage);
        }
    },
};
