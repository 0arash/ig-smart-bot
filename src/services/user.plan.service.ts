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
    updateUserPlanById: async (
        id: number,
        business_title: string,
        business_caption: string
    ) => {
        return await prismaClient().userPlan.update({
            data: {
                business_caption,
                business_title,
            },
            where: {
                id,
            },
        });
    },
    updateApiKeyById: async (id: number, api_key: string) => {
        return await prismaClient().userPlan.update({
            data: {
                api_key,
            },
            where: {
                id,
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
