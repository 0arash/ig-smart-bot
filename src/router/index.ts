import { userRouter } from "./user.router";
import express from "express";

export const routes = express.Router();

routes.use("/user", userRouter);
