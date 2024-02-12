import { Request } from "express";
import { prismaClient } from "../utils/prisma.client";

export const userPlanService = {
    getUsrPlansByUserId: async (id: number) => {
        return await prismaClient().userPlan.findMany({
            where: {
                user_id: id,
            },
        });
    },
    getUserPlanById: async (id: string) => {
        return await prismaClient().userPlan.findUnique({
            where: {
                id: Number(id),
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

    ownUserPlanId: async (req: Request, userPlanId: string) => {
        const userPlan = await prismaClient().userPlan.findUnique({
            where: {
                id: Number(userPlanId),
            },
        });
        //@ts-ignore
        return req.user.id === userPlan?.user_id;
    },
};
