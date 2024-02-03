import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prismaClient } from "../utils/prisma.client";
import { UserPlan } from "@prisma/client";

export const userPlanController = {
    getUserPlansById: async (req: Request, res: Response) => {
        try {
            const userPlans = await prismaClient().userPlan.findMany({
                where: {
                    // @ts-ignore
                    user_id: req.user.id,
                },
            });
            res.status(200).json({
                data: userPlans,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    getUserPlanById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const userPlan = await prismaClient().userPlan.findUnique({
                where: {
                    id: Number(id),
                    // @ts-ignore
                    user_id: req.user.id,
                },
            });
            res.status(200).json({
                data: userPlan,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    updateUserPlanById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { business_caption, business_title } = req.body;

            const userPlan = await prismaClient().userPlan.update({
                where: {
                    id: Number(id),
                },
                data: {
                    business_title,
                    business_caption,
                },
            });

            res.status(200).json({
                data: userPlan,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    generateApiKeyById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const userPlan = await prismaClient().userPlan.findUnique({
                where: {
                    id: Number(id),
                    // @ts-ignore
                    user_id: req.user.id,
                },
            });

            if (userPlan) {
                const api_key = await bcrypt.hash(
                    // @ts-ignore
                    userPlan.id + "," + req.user.id,
                    10
                );

                await prismaClient().userPlan.update({
                    data: {
                        api_key: api_key,
                    },
                    where: {
                        id: userPlan.id,
                    },
                });

                res.status(200).json({
                    data: {
                        api_key,
                    },
                });
            } else {
                res.status(404).json({
                    error: "Plan not found.",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
};
