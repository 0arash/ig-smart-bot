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
        category_title: string,
        user_plan_id: number
    ) => {
        let category = await prismaClient().category.findUnique({
            where: {
                title: category_title,
                user_plan_id,
            }
        });

        if(!category) {
            category = await prismaClient().category.create({
                data: {
                    title: category_title,
                    user_plan_id
                }
            });
        }

        return await prismaClient().product.create({
            data: {
                title,
                price,
                attributes: full_specs,
                description: specs,
                url,
                image,
                brand,
                category_id: category.id,
                user_plan_id,
            },
        });
    },
    getUserPlanDetails: async () => {
        return await prismaClient().userPlan.findMany();
    },
};
