import { prismaClient } from "../utils/prisma.client";

export const crawlerService = {
    updateCrawler: async (status: boolean, user_plan_id: number) => {
        return await prismaClient().userPlan.update({
            where: {
                id: user_plan_id,
            },
            data: {
                require_crawler: status,
            },
        });
    },
};
