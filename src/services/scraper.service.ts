import { ScrapedProduct } from "@prisma/client";
import { prismaClient } from "../utils/prisma.client";

export const scraperService = {
    getProducts: async () => {
        try {
        } catch (error) {}
    },
    newProduct: async (
        title: string,
        price: number,
        url: string,
        category: string
    ) => {
        try {
            return await prismaClient().scrapedProduct.create({
                data: {
                    title,
                    price,
                    url,
                    category,
                },
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    },
};
