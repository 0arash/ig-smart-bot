import express from "express";
import { chatMessageController } from "../controllers/chat.message.controller";
import { requireRole } from "../middlewares/auth.middleware";
import { paramIdValidator } from "../validators/router.validation";
import { handleErrorValidation } from "../validators/handleErrorValidation";
import { verifyToken } from "../middlewares/token.middleware";
const router = express.Router();

router.get(
    "/",
    verifyToken,
    requireRole("USER"),
    chatMessageController.getChatMessages
);
router.get(
    "/:id",
    verifyToken,
    paramIdValidator,
    handleErrorValidation,
    requireRole("USER"),
    chatMessageController.getChatMessageById
);

export const chatMessageRouter = router;
