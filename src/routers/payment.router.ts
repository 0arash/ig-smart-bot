import express, { Request, Response } from "express";
import { PaymentHelper } from "../utils/payment.helper";
import { invoiceService } from "../services/invoice.service";
import { userPlanService } from "../services/user.plan.service";

const router = express.Router();

router.get("/callback", async (req: Request, res: Response) => {
    const verified = await PaymentHelper.handleCallback(req);

    const { orderId } = req.query;

    var invoiceId: string[] = orderId!
        .toString()
        .replace("inv-", "")
        .split(".");
    var planId = invoiceId[0];
    var userId = invoiceId[1];
    var invId = invoiceId[2];
    
    if (verified && verified.result == 100) {
        await invoiceService.updateInvoiceById(Number(invId), "VERIFIED");

        if (invoiceId.length == 4) {
            var discountId = invoiceId[3];
            await userPlanService.newUserPlan(
                Number(planId),
                Number(userId),
                Number(discountId)
            );
        } else {
            await userPlanService.newUserPlan(Number(planId), Number(userId));
        }

        return res.status(200).redirect("https://portal.hixdm.com/dashboard/index.html");
    } else {
        await invoiceService.updateInvoiceById(Number(invId), "CANCELLED");

        res.status(200).redirect("https://portal.hixdm.com/dashboard/priceplan.html");
    }
});

router.post("/free",)

export const paymentRouter = router;
