import { prismaClient } from "../utils/prisma.client";

export const scraperService = {
    getProducts: async (user_plan_id: number) => {
        try {
            return await prismaClient().product.findMany({
                where: {
                    user_plan_id: user_plan_id,
                },
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    newProduct: async (
        title: string,
        price: number,
        url: string,
        brand: string,
        image: string,
        description: string,
        attributes: string,
        user_plan_id: number
    ) => {
        try {
            return await prismaClient().product.create({
                data: {
                    title,
                    price,
                    url,
                    brand,
                    image,
                    description,
                    attributes,
                    user_plan_id,
                },
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    },
};
