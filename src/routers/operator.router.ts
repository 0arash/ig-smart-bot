import { Router } from "express";
import { requireRole } from "../middlewares/auth.middleware";
import { Role } from "@prisma/client";
import { operatorController } from "../controllers/operator.controller";

export const operatorRouter = Router();

operatorRouter.get('/chats/:upid', requireRole(Role.CHAT_OPERATOR), operatorController.getChatList);
operatorRouter.get('/chat/:upid/:cuid', requireRole(Role.CHAT_OPERATOR), operatorController.getChatMessages);