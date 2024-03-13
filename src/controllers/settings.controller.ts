import { Request, Response } from "express";
import { settingsWidgetService } from "../services/settings.service";
import { userPlanService } from "../services/user.plan.service";

export const settingsController = {
    getSettings: async (req: Request, res: Response) => {
        try {
            const { upid } = req.params;
            const settings = await settingsWidgetService.getSettings(
                Number(upid)
            );
            res.status(200).json({
                data: settings,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    updateSettings: async (req: Request, res: Response) => {
        try {
            const { color, title, caption, pos, icon, welcome, explain, user_plan_id } = req.body;

            const settings = await settingsWidgetService.updateSettings(
                color,
                title,
                icon,
                caption,
                pos,
                welcome,
                explain,
                user_plan_id
            );
            res.status(200).json({
                data: settings,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    newSettings: async (req: Request, res: Response) => {
        try {
            const { color, title, caption, pos, icon, welcome, explain, user_plan_id } = req.body;

            const settings = await settingsWidgetService.newSettings(
                color,
                title,
                icon,
                caption,
                pos,
                welcome,
                explain,
                user_plan_id
            );
            res.status(200).json({
                data: settings,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    getScript: async (req: Request, res: Response) => {
        try {
            const { upid } = req.params;

            const user_plan = await userPlanService.getUserPlanById(upid);

            if(user_plan && await userPlanService.ownUserPlanId(req, user_plan.id)) {
                const script = await settingsWidgetService.getScript(user_plan.api_key);
                res.status(200).json({
                    data: script,
                });
            } else {
                res.status(404).json( {
                    error: "User plan not found."
                })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
};
