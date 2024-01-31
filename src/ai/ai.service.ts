import { OpenAI } from "openai";

let openAI: OpenAI;

export const getOpenAI = () => {
    if (!openAI) {
        openAI = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }

    return openAI;
};

export const AIService = {
    
};
