import { Request, Response } from "express";
import { prismaClient } from "../utils/prisma.client";
import { Invoice } from "@prisma/client";
import { invoiceService } from "../services/invoice.service";

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
    getInvoicesByUserId: async (req: Request, res: Response) => {
        try {
            // @ts-ignore
            const { id } = req.user;
            const userInvoices = await invoiceService.getInvoicesByUserId(id);
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
