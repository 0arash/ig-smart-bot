import { userRouter } from "./user.router";
import { authRouter } from "./auth.router";
import express from "express";

export const routes = express.Router();

routes.use("/auth", authRouter);
routes.use("/user", userRouter);
