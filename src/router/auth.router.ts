import express from "express";
const router = express.Router();
import { authController } from "../controller/auth.controller";
import {
    authLoginValidator,
    authRegisterValidator,
} from "../validator/auth.validator";
import { handleErrorValidation } from "../validator/handleErrorValidation";

router.post(
    "/login",
    authLoginValidator,
    handleErrorValidation,
    authController.login
);
router.post(
    "/register",
    authRegisterValidator,
    handleErrorValidation,
    authController.register
);
router.post("/logout", authController.logout);

export const authRouter = router;
