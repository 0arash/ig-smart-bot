import { prismaClient } from "../utils/prisma.client";

export const chatUserService = {
    getChatUsers: async (userPlanId: string) => {
        return await prismaClient().chatUser.findMany({
            where: {
                user_plan_id: Number(userPlanId),
            },
        });
    },
    getChatUserById: async (id: string, userPlanId: string) => {
        return await prismaClient().chatUser.findUnique({
            where: {
                id: Number(id),
                user_plan_id: Number(userPlanId),
            },
        });
    },
    createChatUser: async (
        userPlanId: string,
        name?: string,
        email?: string
    ) => {
        return await prismaClient().chatUser.create({
            data: {
                user_plan_id: Number(userPlanId),
                name,
                email,
            },
        });
    },
    updateChatUserById: async (
        id: string,
        userPlanId: string,
        name: string,
        email: string
    ) => {
        return await prismaClient().chatUser.update({
            where: {
                id: Number(id),
                user_plan_id: Number(userPlanId),
            },
            data: {
                name,
                email,
            },
        });
    },
    deleteChatUserById: async (id: string, userPlanId: string) => {
        return await prismaClient().chatUser.delete({
            where: {
                id: Number(id),
                user_plan_id: Number(userPlanId),
            },
        });
    },
};
