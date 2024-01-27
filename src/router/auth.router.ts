import express from "express";
const router = express.Router();
import { authController } from "../controller/auth.controller";

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/logout", authController.logout);

export const authRouter = router;
