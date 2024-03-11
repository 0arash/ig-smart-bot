import { Router } from "express";
import { authController } from "../controllers/auth.controller";

export const resetPasswordRouter = Router();

resetPasswordRouter.post('/', authController.requestResetLink);
resetPasswordRouter.post('/reset', authController.requestResetLink);