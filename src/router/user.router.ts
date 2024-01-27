import express from "express";
const router = express.Router();
import { userController } from "../controller/user.controller";
import { requireRole } from "../middleware/auth.middleware";
import { Role } from "@prisma/client";

router.get("/", requireRole(Role.ADMIN), userController.getUsers);
router.get("/:id", requireRole(Role.ADMIN), userController.getUserById);
router.delete("/:id", requireRole(Role.ADMIN), userController.deleteUserById);
router.put("/:id", requireRole(Role.ADMIN), userController.updateUserById);

export const userRouter = router;
