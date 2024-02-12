import { Request } from "express";
import { getPaymentDriver } from "monopay";

const driver = getPaymentDriver("zibal")({
    merchantId: "your-merchant-id",
    sandbox: true,
});

export const PaymentHelper = {
    requestPaymentInfo: async (amount: number, callbackUrl: string, invoiceId: string, mobile: string) => {
        try {
            console.log(amount);
            const paymentInfo = await driver.request({
                amount: amount,
                callbackUrl: process.env.APP_URL || 'http://localhost:3000' + callbackUrl,
                orderId: invoiceId,
                mobile: mobile,
            });
            

            return paymentInfo;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    handleCallback: async (req: Request, amount: number, paymentID: number) => {
        try {
            const receipt = await driver.verify(
                {
                    amount: amount
                },
                { ...req.query, ...req.body }
            ); // support both GET and POST

            return receipt;
        } catch (error) {
            console.log("Failed callback handling.");
            return null;
        }
    },
};
