import { prismaClient } from "../utils/prisma.client";

export const leechedProductService = {
    getAllByUserPlan: async (id:number,user_plan_id: Number) => {},
    getByUserPlan: async (user_plan_id: Number) => {},
    newProduct: async (
        url: string,
        title: string,
        price: number,
        category: string,
        user_plan_id: Number
    ) => {
        return await prismaClient().leechedProducts.create({
            data:{
                url,
                price,
                category,
                title,
            }
        })
    },
    updateByUserPlan: async (
        id:number,
        url: string,
        title: string,
        price: number,
        category: string,
        user_plan_id: number
    ) => {
        return await prismaClient().leechedProducts.update({
            data: {
                url,
                title,
                price: Number(price),
                category,
            },
            where: {
                id: Number(id),
                user_plan_id: Number(user_plan_id),
            },
        });
    },
    deleteByUserPlan: async (id: number, user_plan_id: number) => {
        return await prismaClient().leechedProducts.delete({
            where: {
                id: Number(id),
                user_plan_id: Number(user_plan_id),
            },
        });
    },
};
