import { InvoiceStatus } from "@prisma/client";
import { prismaClient } from "../utils/prisma.client";

export const invoiceService = {
    getInvoiceById: async (id: number) => {
        return await prismaClient().invoice.findUnique({
            where: {
                id,
            },
            include: {
                plan: true,
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
    updateInvoiceById: async (invoiceId: number, status: InvoiceStatus) => {
        return await prismaClient().invoice.update({
            where: {
                id: invoiceId,
            },
            data: {
                status,
            },
        });
    },
    newInvoiceId: async (userId: number, planId: number) => {
        return await prismaClient().invoice.create({
            data: {
                planId,
                userId,
            },
        });
    },
};
