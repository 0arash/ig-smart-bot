import { NextFunction, Request, Response } from "express";
import { prismaClient } from "./prisma.client";
import { PrismaClient } from "@prisma/client";

export const chatLimit = {
    getUserPlanLimit: async (
        user_plan_id: number
    ) => {
        try {
            const userPlan = await prismaClient().userPlan.findUnique({
                where: {
                    id: user_plan_id,
                },
                include: {
                    plan: true,
                },
            });
            if (userPlan) {
                const { file_size_limit, operator_count, chat_count } =
                    userPlan.plan;
                return userPlan.plan
            } else {
                return "user plan not found.";
            }
        } catch (error) {
            console.log(error);
        }
    },
};
