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

router.get("/", requireRole(Role.ADMIN), userController.getUsers);
router.get(
    "/:id",
    paramIdValidator,
    handleErrorValidation,
    requireRole(Role.ADMIN),
    userController.getUserById
);
router.post(
    "/",
    paramIdValidator,
    handleErrorValidation,
    requireRole(Role.ADMIN),
    userController.getUserByEmail
);
router.delete(
    "/:id",
    paramIdValidator,
    handleErrorValidation,
    requireRole(Role.ADMIN),
    userController.deleteUserById
);
router.put(
    "/",
    paramIdValidator,
    userUpdateByIdValidator,
    handleErrorValidation,
    requireRole(Role.USER),
    userController.updateUserById
);

export const userRouter = router;
