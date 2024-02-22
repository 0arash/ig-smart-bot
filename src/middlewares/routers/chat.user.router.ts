import express from "express";
import { chatUserController } from "../controllers/chat.user.controller";
import { requireRole } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/", requireRole("USER"), chatUserController.getChatUsers);
router.get("/:id", requireRole("USER"), chatUserController.getChatUserById);
router.post("/", requireRole("USER"), chatUserController.newChatUser);
router.put("/:id", requireRole("USER"), chatUserController.updateChatUserById);
router.delete(
    "/:id",
    requireRole("USER"),
    chatUserController.deleteChatUserById
);

export const chatUserRouter = router;
