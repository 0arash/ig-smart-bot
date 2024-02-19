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
    checkCrawlerStatus: async (user_plan_id: number) => {
        return await prismaClient().userPlan.findUnique({
            where: {
                id: user_plan_id,
            },
        });
    },
    newProductFromJson: async (
        title: string,
        price: string,
        specs: object,
        full_specs: object,
        url:string
    ) => {
        return await prismaClient().product.create({
            data:{
                title,price,specs
            }
        })
    },
};
