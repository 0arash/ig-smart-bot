import express, { Request, Response } from "express";
import { PaymentHelper } from "../utils/payment.helper";

const router = express.Router();

router.all("/callback", async(req: Request, res: Response) => {
    // PaymentHelper.handleCallback()
    console.log(JSON.stringify(req.query));
    console.log(JSON.stringify(req.body));
    
    res.sendStatus(403);
});

export const paymentRouter = router;
