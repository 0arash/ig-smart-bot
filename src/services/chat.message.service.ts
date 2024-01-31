import { prismaClient } from "../utils/prisma.client";

export const chatMessageService = {
    getChatMessages: async () => {
        return await prismaClient().chatMessage.findMany();
    },
    getChatMessageById: async (id: string) => {
        return await prismaClient().chatMessage.findUnique({
            where: {
                id: Number(id),
            },
        });
    },
};
