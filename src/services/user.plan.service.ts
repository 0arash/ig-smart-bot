import { prismaClient } from "../utils/prisma.client";

export const userPlanService = {
    getUsrPlansByUserId: async (id: number) => {
        return await prismaClient().userPlan.findMany({
            where: {
                user_id: id,
            },
        });
    },
    getUserPlanById: async (id: number) => {
        return await prismaClient().userPlan.findUnique({
            where: {
                id,
            },
        });
    },
    generateApiKeyId: async (id: number, user_id: number) => {
        return await prismaClient().userPlan.findUnique({
            where: {
                id,
                user_id,
            },
        });
    },
};
