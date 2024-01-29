import { Request, Response } from "express";
import { prismaClient } from "../utils/prisma.client";
import { Invoice } from "@prisma/client";

export const invoiceController = {
    getInvoiceById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const invoice = await prismaClient().invoice.findUnique({
                where: {
                    id: Number(id),
                },
            });
            res.status(200).json({
                data: invoice,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error,
            });
        }
    },
    getInvoicesByUser: async (req: Request, res: Response) => {
        try {
            // @ts-ignore
            const { email } = req.user;
            const userInvoices = await prismaClient().invoice.findMany({
                where: {
                    user: { email },
                },
            });
            res.status(200).json({
                data: userInvoices,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error,
            });
        }
    },
};
