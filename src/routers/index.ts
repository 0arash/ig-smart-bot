import { userRouter } from "./user.router";
import { authRouter } from "./auth.router";
import express from "express";
import { chatMessageRouter } from "./chat.message.router";
import { chatUserRouter } from "./chat.user.router";
import { invoiceRouter } from "./invoice.router";
import { paymentRouter } from "./payment.router";
import { productRouter } from "./product.router";
import { userPlanRouter } from "./user.plan.router";
import { planRouter } from "./plan.router";

export const routes = express.Router();

routes.use("/api/auth", authRouter);
routes.use("/api/user", userRouter);
routes.use("/api/plan", planRouter);
routes.use("/api/invoice", invoiceRouter);
routes.use("/api/payment", paymentRouter);
routes.use("/api/chat_messages", chatMessageRouter);
routes.use("/api/chat_user", chatUserRouter);
routes.use("/api/product", productRouter);
routes.use("/api/user_plan", userPlanRouter);
