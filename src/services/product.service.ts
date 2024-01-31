import { prismaClient } from "../utils/prisma.client";

export const productService = {
    getProducts: async () => {
        return await prismaClient().product.findMany();
    },
    getProductById: async (id: number) => {
        return await prismaClient().product.findMany();
    },
    newProduct: async (
        url: string,
        title: string,
        description: string,
        image: string,
        price: number,
        attributes: object,
        weight: number,
        user_plan_id: number
    ) => {
        return await prismaClient().product.create({
            data: {
                url,
                title,
                description,
                image,
                price,
                attributes,
                weight,
                user_plan_id,
            },
        });
    },
    updateProductById: async (
        id: number,
        url: string,
        title: string,
        description: string,
        image: string,
        price: number,
        attributes: object,
        weight: number,
        user_plan_id: number
    ) => {
        return await prismaClient().product.update({
            where: {
                id,
                user_plan_id,
            },
            data: {
                url,
                title,
                description,
                image,
                price,
                attributes,
                weight,
            },
        });
    },
    deleteProductById: async (id: number) => {
        return await prismaClient().product.delete({
            where: {
                id,
            },
        });
    },
};
