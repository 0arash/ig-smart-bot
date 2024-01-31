import { prismaClient } from "../utils/prisma.client";

export const userPlanService = {
    getUsrPlansById: async (id: number) => {
        return await prismaClient().userPlan.findMany({
            where: {
                id,
            },
        });
    },
    getUsrPlanById: async (id: number, user_id: number) => {
        return await prismaClient().userPlan.findMany({
            where: {
                id,
                user_id,
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
