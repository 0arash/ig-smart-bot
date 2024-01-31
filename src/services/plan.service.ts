import { prismaClient } from "../utils/prisma.client";

export const planService = {
    getPlans: async () => {
        return await prismaClient().plan.findMany();
    },
    getPlanById: async (id: number) => {
        return await prismaClient().plan.findUnique({
            where: {
                id,
            },
        });
    },
    newPlan: async (title: string, price: number, days: number) => {
        return await prismaClient().plan.create({
            data: {
                title,
                price,
                days,
            },
        });
    },
    updatePlanById: async (
        id: number,
        title: string,
        price: number,
        days: number
    ) => {
        return await prismaClient().plan.update({
            where: {
                id,
            },
            data: {
                title,
                price,
                days,
            },
        });
    },
    deletePlanById: async (id: number) => {
        return await prismaClient().plan.delete({
            where: {
                id,
            },
        });
    },
};
