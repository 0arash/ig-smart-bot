import express from "express";
import { chatMessageController } from "../controllers/chat.message.controller";
import { requireRole } from "../middlewares/auth.middleware";
import { paramIdValidator } from "../validators/router.validation";
import { handleErrorValidation } from "../validators/handleErrorValidation";
const router = express.Router();

router.get(
    "/:id",
    paramIdValidator,
    handleErrorValidation,
    requireRole("USER"),
    chatMessageController.getChatMessageById
);
router.get(
    "/user/:cuid",
    requireRole("USER"),
    chatMessageController.getChatMessagesByUserId
);

export const chatMessageRouter = router;
