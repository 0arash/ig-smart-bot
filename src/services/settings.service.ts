import { prismaClient } from "../utils/prisma.client";

export const settingsWidgetService = {
    getSettings: async (user_plan_id: number) => {
        return await prismaClient().widgetSettings.findFirst({
            where: {
                user_plan_id,
            },
        });
    },
    newSettings: async (
        color: string,
        title: string,
        icon: string,
        caption: string,
        pos_right: string,
        pos_left: string,
        user_plan_id: number
    ) => {
        return await prismaClient().widgetSettings.create({
            data: {
                color,
                title,
                caption,
                icon,
                pos_left,
                pos_right,
                user_plan_id,
            },
        });
    },
    updateSettings: async (
        color: string,
        title: string,
        icon: string,
        caption: string,
        pos_right: string,
        pos_left: string,
        user_plan_id: number
    ) => {
        return await prismaClient().widgetSettings.update({
            data: {
                color,
                title,
                caption,
                icon,
                pos_left,
                pos_right,
            },
            where: {
                user_plan_id,
            },
        });
    },
};
