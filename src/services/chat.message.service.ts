import { prismaClient } from "../utils/prisma.client";

export const chatMessageService = {
    getChatMessages: async (userPlanId: number) => {
        return await prismaClient().chatMessage.findMany({
            where: {
                user_plan_id: userPlanId,
            },
        });
    },
    getChatMessagesByUserId: async (chatUserId: number, userPlanId: number) => {
        return await prismaClient().chatMessage.findMany({
            where: {
                chat_user_id: chatUserId,
                user_plan_id: userPlanId,
            },
        });
    },
    getChatMessageById: async (id: string, userPlanId: number) => {
        return await prismaClient().chatMessage.findUnique({
            where: {
                id: Number(id),
                user_plan_id: userPlanId,
            },
        });
    },
};
