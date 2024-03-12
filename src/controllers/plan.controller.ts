import { Request, Response } from "express";
import { planService } from "../services/plan.service";

export const planController = {
    getPlans: async (req: Request, res: Response) => {
        try {
            const plans = await planService.getPlans();
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
            const { id } = req.params;
            const plan = await planService.getPlanById(Number(id));
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
            const plan = await planService.newPlan(title, price, days);
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
            const plan = await planService.updatePlanById(
                id,
                title,
                price,
                days
            );
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
            const plan = await planService.deletePlanById(id);
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
