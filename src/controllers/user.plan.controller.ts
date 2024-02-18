import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { userPlanService } from "../services/user.plan.service";

export const userPlanController = {
    getUserPlansById: async (req: Request, res: Response) => {
        try {
            const { uid } = req.query;
            const userPlans = await userPlanService.getUserPlansByUserId(
                Number(uid)
            );
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
            const userPlan = await userPlanService.getUserPlanById(id);
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

            const userPlan = await userPlanService.updateUserPlanById(
                Number(id),
                business_title,
                business_caption
            );

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
            const { user_id } = req.body;
            const userPlan = await userPlanService.getUserPlanById(id);

            if (
                userPlan &&
                (await userPlanService.ownUserPlanId(req, String(userPlan.id)))
            ) {
                const api_key = await bcrypt.hash(
                    // @ts-ignore
                    userPlan.id + "," + req.user.id,
                    10
                );

                await userPlanService.updateApiKeyById(userPlan.id, api_key);

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
