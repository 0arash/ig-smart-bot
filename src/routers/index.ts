import { userRouter } from "./user.router";
import { authRouter } from "./auth.router";
import express from "express";
import { chatMessageRouter } from "./chat.message.router";
import { chatUserRouter } from "./chat.user.router";
import { invoiceRouter } from "./invoice.router";

export const routes = express.Router();

routes.use("/auth", authRouter);
routes.use("/user", userRouter);
routes.use("/invoice", invoiceRouter);
routes.use("/chat_messages", chatMessageRouter);
routes.use("/chat_user", chatUserRouter);
