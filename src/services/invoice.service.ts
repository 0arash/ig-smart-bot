import { prismaClient } from "../utils/prisma.client";

export const invoiceService = {
    getInvoiceById: async (id: number, userPlanId: number) => {
        return await prismaClient().invoice.findUnique({
            where: {
                id,
            },
        });
    },
    getInvoicesByUserId: async (userId: number) => {
        return await prismaClient().invoice.findMany({
            where: {
                userId: userId,
            },
        });
    },
};
