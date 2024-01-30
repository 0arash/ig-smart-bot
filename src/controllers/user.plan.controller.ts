import { Request, Response } from "express";
import { prismaClient } from "../utils/prisma.client";

export const userPlan = {
    getUserPlans: async (req: Request, res: Response) => {
        try {
            const userPlans = await prismaClient().userPlan.findMany();
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
};
