import { prismaClient } from "../utils/prisma.client";

export const chatUserService = {
    getChatUsers: async (userPlanId: number) => {
        return await prismaClient().chatUser.findMany({
            where: {
                user_plan_id: userPlanId,
            },
        });
    },
    getChatUserById: async (id: string, userPlanId: number) => {
        return await prismaClient().chatUser.findUnique({
            where: {
                id: Number(id),
            },
        });
    },
};
