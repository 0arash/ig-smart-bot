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
        price: number,
        specs: object,
        brand: string,
        full_specs: object,
        url: string,
        image: string,
        user_plan_id: number
    ) => {
        return await prismaClient().product.create({
            data: {
                title,
                price,
                attributes: specs,
                description: full_specs,
                brand,
                url,
                image,
                user_plan_id,
            },
        });
    },
    getUserPlanDetails:async()=>{
        return await prismaClient().userPlan.findMany()
    }
};
