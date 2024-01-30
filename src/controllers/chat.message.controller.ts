import { Request, Response } from "express";
import { prismaClient } from "../utils/prisma.client";

export const chatMessageController = {
    getChatMessages: async (req: Request, res: Response) => {
        try {
            const chatMessages = await prismaClient().chatMessage.findMany();
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
            const chatMessage = await prismaClient().chatMessage.findUnique({
                where: {
                    id: Number(id),
                },
            });
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
