import express, { Request, Response } from "express";
import { PaymentHelper } from "../utils/payment.helper";

const router = express.Router();

router.get("/callback", async (req: Request, res: Response) => {
    const verified = await PaymentHelper.handleCallback(req);

    if (verified && verified.result == 100) {
        //TODO: Add logic to activate bought plan

        res.status(200).json({
            message: `Payment for ${req.query.trackId} sucessfull.`,
        });
    } else {
        res.status(200).json({ message: "Payment failed" });
    }
});

export const paymentRouter = router;
