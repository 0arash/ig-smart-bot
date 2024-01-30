import express from "express";
const router = express.Router();
import { userController } from "../controllers/user.controller";
import { requireRole } from "../middlewares/auth.middleware";
import { Role } from "@prisma/client";
import {
    paramIdValidator,
    userUpdateByIdValidator,
} from "../validators/router.validation";
import { handleErrorValidation } from "../validators/handleErrorValidation";
import { verifyToken } from "../middlewares/token.middleware";

router.get("/", verifyToken, requireRole(Role.ADMIN), userController.getUsers);
router.get(
    "/:id",
    verifyToken,
    paramIdValidator,
    handleErrorValidation,
    requireRole(Role.ADMIN),
    userController.getUserById
);
router.delete(
    "/:id",
    verifyToken,
    paramIdValidator,
    handleErrorValidation,
    requireRole(Role.ADMIN),
    userController.deleteUserById
);
router.put(
    "/:id",
    verifyToken,
    paramIdValidator,
    userUpdateByIdValidator,
    handleErrorValidation,
    requireRole(Role.ADMIN),
    userController.updateUserById
);

export const userRouter = router;
