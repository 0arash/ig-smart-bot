import { prismaClient } from "../utils/prisma.client";

export const productService = {
    getProducts: async (userPlanId: number) => {
        return await prismaClient().product.findMany({
            where: {
                user_plan_id: userPlanId,
            },
        });
    },
    getProductById: async (id: number) => {
        return await prismaClient().product.findUnique({
            where: {
                id: Number(id),
            },
        });
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
        status: boolean,
        attributes: object,
        weight: number
    ) => {
        return await prismaClient().product.update({
            where: {
                id,
            },
            data: {
                url,
                title,
                description,
                image,
                price,
                status,
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
