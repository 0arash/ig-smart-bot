import axios from "axios";
import { Request } from "express";


export const PaymentHelper = {
    requestPaymentInfo: async (
        amount: number,
        callbackUrl: string,
        invoiceId: string,
        mobile: string
    ) => {
        try {
            const paymentResponse = await axios.post(
                "https://gateway.zibal.ir/v1/request",
                {
                    merchant: process.env.ZIBAL_MERCHANT || "zibal",
                    amount,
                    callbackUrl: callbackUrl,
                    orderId: invoiceId,
                    mobile,
                }
            );

            return paymentResponse.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    startPayment: (trackId: string) => {
        try {
            return `https://gateway.zibal.ir/start/${trackId}`;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    handleCallback: async (req: Request) => {
        try {
            const paymentData = { ...req.query, ...req.body };
            const verifyResponse = await axios.post(
                "https://gateway.zibal.ir/verify",
                {
                    merchant: process.env.ZIBAL_MERCHANT || "zibal",
                    trackId: paymentData.trackId,
                }
            );

            return verifyResponse.data;
        } catch (error) {
            console.log("Failed callback handling.");
            return false;
        }
    },
};
