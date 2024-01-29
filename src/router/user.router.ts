import express from "express";
const router = express.Router();
import { userController } from "../controller/user.controller";
import { requireRole } from "../middleware/auth.middleware";
import { Role } from "@prisma/client";
import {
    userByIdValidator,
    userUpdateByIdValidator,
} from "../validator/user.validation";
import { handleErrorValidation } from "../validator/handleErrorValidation";

router.get("/", requireRole(Role.ADMIN), userController.getUsers);
router.get(
    "/:id",
    userByIdValidator,
    handleErrorValidation,
    requireRole(Role.ADMIN),
    userController.getUserById
);
router.delete(
    "/:id",
    userByIdValidator,
    handleErrorValidation,
    requireRole(Role.ADMIN),
    userController.deleteUserById
);
router.put(
    "/:id",
    userByIdValidator,
    // userUpdateByIdValidator,
    handleErrorValidation,
    requireRole(Role.ADMIN),
    userController.updateUserById
);

export const userRouter = router;
