import { Request, Response } from "express";
import { settingsWidgetService } from "../services/settings.service";

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
            const {
                color,
                title,
                caption,
                pos,
                icon,
                user_plan_id,
            } = req.body;

            const settings = await settingsWidgetService.updateSettings(
                color,
                title,
                icon,
                caption,
                pos,
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
            const {
                color,
                title,
                caption,
                pos,
                icon,
                user_plan_id,
            } = req.body;

            const settings = await settingsWidgetService.newSettings(
                color,
                title,
                icon,
                caption,
                pos,
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
};
