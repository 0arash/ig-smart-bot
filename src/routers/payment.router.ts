import express, { Request, Response } from "express";
import { PaymentHelper } from "../utils/payment.helper";
import { invoiceService } from "../services/invoice.service";
import { userPlanService } from "../services/user.plan.service";

const router = express.Router();

router.get("/callback", async (req: Request, res: Response) => {
    const verified = await PaymentHelper.handleCallback(req);

    if (verified && verified.result == 100) {
        //TODO: Add logic to activate bought plan
        const { orderId } = req.query;
        console.log(orderId);
        if (orderId) {
            var invoiceId: string[] = orderId
                ?.toString()
                .replace("inv-", "")
                .split(".");
            var invId = invoiceId[2];
            var planId = invoiceId[0];
            var userId = invoiceId[1];

            await invoiceService.updateInvoiceById(Number(invId), "VERIFIED");
            await userPlanService.newUserPlan(Number(planId), Number(userId));
            return res.status(200).json({
                message: `Payment for ${req.query.trackId} sucessfull.`,
            });
        }
    } else {
        res.status(200).json({ message: "Payment failed" });
    }
});

export const paymentRouter = router;
