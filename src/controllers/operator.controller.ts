import { Request, Response } from "express";
import { prismaClient } from "../utils/prisma.client";

export const operatorController = {
    getChatList: async (req: Request, res: Response) => {
        try {
            const { upid } = req.params;

            const latestChats = await prismaClient().chatUser.findMany({
                take: 20,
                where: {
                    user_plan_id: Number(upid),
                },
                include: {
                    chat_messages: true,
                },
            });

            const formattedChats = latestChats.map((chat) => {
                return {
                    user_id: chat.id,
                    time: chat.chat_messages.at(-1)?.created_at,
                    name: chat.name,
                    content: chat.chat_messages.at(-1)?.content,
                    unread: !chat.chat_messages.at(-1)?.read,
                };
            });

            res.status(200).json({ data: { chats: formattedChats } });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal Error.",
            });
        }
    },
    getChatMessages: async (req: Request, res: Response) => {
        try {
            const { upid, cuid } = req.params;

            const chat = await prismaClient().chatUser.findUnique({
                where: {
                    user_plan_id: Number(upid),
                    id: Number(cuid),
                },
                include: {
                    chat_messages: true,
                },
            });

            const formattedMessages = chat?.chat_messages.map((m) => {
                return {
                    content: m.content,
                    is_user_message: m.is_user_message,
                };
            });

            console.log(formattedMessages);

            res.status(200).json({ data: { messages: formattedMessages } });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error || "Internal Error.",
            });
        }
    },
};
