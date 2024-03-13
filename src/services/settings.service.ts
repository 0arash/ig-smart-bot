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
        pos: string,
        welcome: string,
        explain: string,
        user_plan_id: number
    ) => {
        return await prismaClient().widgetSettings.create({
            data: {
                color,
                title,
                caption,
                icon,
                pos: Number(pos),
                welcome,
                description: explain,
                user_plan_id,
            },
        });
    },
    updateSettings: async (
        color: string,
        title: string,
        icon: string,
        caption: string,
        pos: string,
        welcome: string,
        explain: string,
        user_plan_id: number
    ) => {
        return await prismaClient().widgetSettings.update({
            data: {
                color,
                title,
                caption,
                icon,
                pos: Number(pos),
                welcome,
                description: explain
            },
            where: {
                user_plan_id,
            },
        });
    },
    getScript: (api_key: string) => {
        return `<script>const A = '${api_key}';document.addEventListener('DOMContentLoaded', () => {let hixScript = document.createElement("script");hixScript.setAttribute("src", "widget.js");document.body.appendChild(hixScript);hixScript.addEventListener('load', () => {HIX_INIT(A);})})</script>`
    }
};
