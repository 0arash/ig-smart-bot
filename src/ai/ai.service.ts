import { OpenAI } from "openai";
import { chatMessageService } from "../services/chat.message.service";
import {
    ChatCompletionFunctionMessageParam,
    ChatCompletionMessage,
    ChatCompletionMessageParam,
    ChatCompletionSystemMessageParam,
} from "openai/resources";
import { userPlanService } from "../services/user.plan.service";

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

    return `You are a helpful tech support for an online shop called '${userPlan?.business_title}. This is an overview of the shop:\
    ${userPlan?.business_caption}' `;
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
        case "": {
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
    async generateResponse(chat_user_id: string, user_plan_id: string) {
        const history = await getMessageHistoryForUser(
            chat_user_id,
            user_plan_id
        );

        console.log(JSON.stringify(history));
        

        while (true) {
            const completion = await getOpenAI().chat.completions.create({
                messages: history,
                model: "gpt-3.5-turbo-16k-0613",
                functions: getFunctions(),
                function_call: "auto",
                max_tokens: 250,
                temperature: 0.5,
            });

            // If there is no function call, we're done and can exit this loop
            const message = completion.choices[0]!.message;
            if (!message.function_call) {
                await chatMessageService.addChatMessageToChatUser(chat_user_id, user_plan_id, message.content!.trim(), false)
                return message.content!.trim();
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
