import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prismaClient } from "../utils/prisma.client";

export const userPlanController = {
    getUserPlans: async (req: Request, res: Response) => {
        try {
            const userPlans = await prismaClient().userPlan.findMany({
                where: {
                    // @ts-ignore
                    user_id: req.user.id
                }
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
                    user_id: req.user.id
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
    generateApiKey: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const userPlan = await prismaClient().userPlan.findUnique({
                where: {
                    id: Number(id),
                    // @ts-ignore
                    user_id: req.user.id
                }
            });

            if (userPlan) {
                // @ts-ignore
                const api_key = await bcrypt.hash(userPlan.id + "," + req.user.id, 10);

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
