import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { prismaClient } from "../utils/prisma.client";



export const planController = {
    getPlans: async (req: Request, res: Response) => {
        try {
            const plans = await prismaClient().plan.findMany();
            console.log(`${plans.length} plans fetched.`);
            res.status(200).json({
                data: plans,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    getPlanById: async (req: Request, res: Response) => {
        try {
            const { id } = req.body;
            const plan = await prismaClient().plan.findUnique({
                where: {
                    id,
                },
            });
            console.log(`plan ${plan?.title} fetched.`);
            res.status(200).json({
                data: plan,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    newPlan: async (req: Request, res: Response) => {
        try {
            const { title, price, days } = req.body;
            const plan = await prismaClient().plan.create({
                data: {
                    title,
                    price,
                    days,
                },
            });
            console.log(`plan ${plan.title} added.`);
            res.status(201).json({
                data: plan,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    updatePlanById: async (req: Request, res: Response) => {
        try {
            var { id, title, price, days } = req.body;
            const plan = await prismaClient().plan.update({
                data: {
                    title,
                    price,
                    days,
                },
                where: {
                    id,
                },
            });
            console.log(`plan ${plan.id} updated.`);
            res.status(200).json({
                data: plan,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    deletePlanById: async (req: Request, res: Response) => {
        try {
            const { id } = req.body;
            const plan = await prismaClient().plan.delete({
                where: {
                    id,
                },
            });
            console.log(`plan ${plan.title} deleted.`);
            res.status(200).json({
                data: plan,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
};
