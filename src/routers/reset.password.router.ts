import { Router } from "express";
import { authController } from "../controllers/auth.controller";

export const resetPasswordRouter = Router();

resetPasswordRouter.post('/check_code', authController.resetPassword);
resetPasswordRouter.post('/', authController.requestResetLink);