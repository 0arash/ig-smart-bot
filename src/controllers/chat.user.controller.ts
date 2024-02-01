import { Request, Response } from "express";
import { chatUserService } from "../services/chat.user.service";

export const chatUserController = {
    getChatUsers: async (req: Request, res: Response) => {
        try {
            const { upid } = req.query;

            const chatUsers = await chatUserService.getChatUsers(String(upid));
            res.status(200).json({
                data: chatUsers,
            });
        } catch (error) {
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    getChatUserById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { upid } = req.query;

            const chatUser = await chatUserService.getChatUserById(
                id,
                String(upid)
            );
            res.status(200).json({
                data: chatUser,
            });
        } catch (error) {
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    newChatUser: async (req: Request, res: Response) => {
        try {
            const { user_plan_id, email, name } = req.body;
            const chatUser = await chatUserService.createChatUser(
                user_plan_id,
                name,
                email
            );
            res.status(200).json({
                data: chatUser,
            });
        } catch (error) {
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    updateChatUserById: async (req: Request, res: Response) => {
        try {
            const { id, userPlanId, name, email } = req.body;
            const chatUser = await chatUserService.updateChatUserById(
                id,
                userPlanId,
                name,
                email
            );
            res.status(200).json({
                data: chatUser,
            });
        } catch (error) {
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    deleteChatUserById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { upid } = req.query;
            const chatUser = await chatUserService.deleteChatUserById(
                id,
                String(upid)
            );
            res.status(200).json({
                data: chatUser,
            });
        } catch (error) {
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
};
