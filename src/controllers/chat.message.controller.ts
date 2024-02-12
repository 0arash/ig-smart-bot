import { Request, Response } from "express";
import { chatMessageService } from "../services/chat.message.service";

export const chatMessageController = {
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
    getChatMessagesByUserId: async (req: Request, res: Response) => {
        try {
            const { cuid } = req.params;
            const { upid } = req.query;

            const chatMessages =
                await chatMessageService.getChatMessagesByUserId(
                    cuid,
                    String(upid)
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
};
