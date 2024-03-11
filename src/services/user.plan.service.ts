import { Request } from "express";
import { prismaClient } from "../utils/prisma.client";

export const userPlanService = {
    getUserPlansByUserId: async (id: number) => {
        return await prismaClient().userPlan.findMany({
            where: {
                user_id: id,
            },
        });
    },
    getCurrentUserPlanByUserId: async (id: number) => {
        return await prismaClient().userPlan.findFirst({
            where: {
                user_id: id,
            },
            select: {
                user: true,
                plan: true,
                id: true,
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

    ownUserPlanId: async (req: Request, userPlanId: number) => {
        console.log(userPlanId);

        const userPlan = await prismaClient().userPlan.findUnique({
            where: {
                id: userPlanId,
            },
        });
        //@ts-ignore
        return req.user.id === userPlan?.user_id;
    },
    newUserPlan: async (
        planId: number,
        userId: number,
        planDiscountId?: number
    ) => {
        const user_plan = await prismaClient().userPlan.create({
            data: {
                plan_id: planId,
                user_id: userId,
                planDiscountId,
            },
        });

        const settings = await prismaClient().widgetSettings.create({
            data: {
                user_plan_id: user_plan.id,
                icon: "192.168.1.21:3000/widget/icon-widget.svg",
            },
        });
    },
    getUserPlansByDiscountId: async (discountId: number) => {
        return await prismaClient().userPlan.findMany({
            where: {
                planDiscountId: discountId,
            },
        });
    },
};
