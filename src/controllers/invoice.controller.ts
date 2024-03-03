import { Request, Response } from "express";
import { invoiceService } from "../services/invoice.service";
import { PaymentHelper } from "../utils/payment.helper";
import { userService } from "../services/user.service";
import { planDiscountService } from "../services/plan.discount.service";

export const invoiceController = {
    newInvoice: async (req: Request, res: Response) => {
        try {
            let { planId } = req.body;

            console.log(`plan : ${planId}`);

            // @ts-ignore
            const userId = req.user.id;
            console.log(`user : ${userId}`);

            const invoice = await invoiceService.newInvoiceId(userId, planId);

            res.status(201).json({
                data: invoice,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error,
            });
        }
    },
    getInvoiceById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const invoice = await invoiceService.getInvoiceById(Number(id));
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
    checkValidDiscountForUser: async (req: Request, res: Response) => {
        try {
            const { discountCode } = req.body;
            const validDiscount =
                await planDiscountService.checkValidDiscountForUser(
                    discountCode,
                    // @ts-ignore
                    req.user.id
                );

            if (validDiscount) {
                const discount = await planDiscountService.getDiscountByCode(
                    discountCode
                );

                res.status(200).json({
                    percent: discount?.discount,
                });
            } else {
                res.status(400).json({
                    error: "Discount code is not valid",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    payInvoiceById: async (req: Request, res: Response) => {
        try {
            const { id, discountCode } = req.body;

            const invoice = await invoiceService.getInvoiceById(Number(id));
            if (invoice?.status !== "PENDING") {
                return res.status(401).json({
                    message: "Can't pay this invoice.",
                });
            }

            const user = await userService.getUserById(invoice.userId, [
                "password",
            ]);

            if (user?.mobile) {
                if (
                    await planDiscountService.checkValidDiscountForUser(
                        discountCode,
                        // @ts-ignore
                        req.user.id
                    )
                ) {
                    const discount =
                        await planDiscountService.getDiscountByCode(
                            discountCode
                        );
                    console.log(discount);

                    let price = invoice.plan.price;
                    if (discount) {
                        price = price - price * (discount.discount / 100);
                    }

                    const paymentInfo = await PaymentHelper.requestPaymentInfo(
                        price,
                        "http://localhost:3000/api/payment/callback",
                        `inv-${invoice?.planId}.${invoice?.userId}.${invoice?.id}`,
                        user.mobile
                    );

                    const startPaymentUrl = PaymentHelper.startPayment(
                        paymentInfo.trackId
                    );

                    if (startPaymentUrl) {
                        res.status(200).json({
                            paymentUrl: startPaymentUrl,
                        });
                    } else {
                        res.status(500).json({
                            error: "Failed to start payment",
                        });
                    }
                } else {
                    res.status(400).json({
                        error: "Invalid discount code",
                    });
                }
            } else {
                res.status(500).json({
                    error: "User has no mobile",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: "Could not start payment",
            });
        }
    },
};
