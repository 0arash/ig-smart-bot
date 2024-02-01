import { Request, Response } from "express";
import { chatMessageService } from "../services/chat.message.service";

export const chatMessageController = {
    getChatMessages: async (req: Request, res: Response) => {
        try {
            const { upid } = req.query;

            const chatMessages = await chatMessageService.getChatMessages(
                Number(upid)
            );
            res.status(200).json({
                data: chatMessages,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    getChatMessageById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { upid } = req.query;
            const chatMessage = await chatMessageService.getChatMessageById(
                id,
                Number(upid)
            );
            res.status(200).json({
                data: chatMessage,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
};
