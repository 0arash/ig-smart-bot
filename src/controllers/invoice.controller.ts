import { Request, Response } from "express";
import { invoiceService } from "../services/invoice.service";
import { prismaClient } from "../utils/prisma.client";
import { Invoice } from "@prisma/client";
import { PaymentHelper } from "../utils/payment.helper";

export const invoiceController = {
    getInvoiceById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            
            const invoice = await invoiceService.getInvoiceById(
                Number(id)
            );
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
    payInvoiceById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const invoice = await invoiceService.getInvoiceById(Number(id));

            await PaymentHelper.requestPaymentInfo(100000, "/payment/callback", 'test', '09172223333');
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: "Could not start payment"
            });
        }
    },
};
