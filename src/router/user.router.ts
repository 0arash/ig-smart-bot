import express from "express";
const router = express.Router();
import { userController } from "../controller/user.controller";

router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.newUser);
router.delete("/:id", userController.deleteUserById);
router.put("/:id", userController.updateUserById);

export const userRouter = router;
