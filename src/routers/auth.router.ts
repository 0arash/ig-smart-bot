import express from "express";
const router = express.Router();
import { authController } from "../controllers/auth.controller";
import {
  authLoginValidator,
  authRegisterValidator,
} from "../validators/auth.validator";
import { handleErrorValidation } from "../validators/handleErrorValidation";

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
router.post("/reset_password", authController.requestResetLink);

export const authRouter = router;
