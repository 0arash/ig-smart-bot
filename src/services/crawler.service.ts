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
        user_plan_id: string
    ) => {
        return await prismaClient().product.create({
            data: {
                title,
                price,
                attributes: full_specs,
                description: specs,
                url,
                image,
                brand,
                Category: {
                    connectOrCreate: {
                        where: {
                            title: category_title,
                        },
                        create: {
                            title: category_title,
                            user_plan_id: Number(user_plan_id),
                        },
                    },
                },
                user_plan_id: Number(user_plan_id),
            },
            include: {
                Category: true
            }
        });
    },
    getUserPlanDetails: async () => {
        return await prismaClient().userPlan.findMany();
    },
};
