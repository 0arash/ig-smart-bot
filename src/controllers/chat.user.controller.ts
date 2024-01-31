import { Request, Response } from "express";
import { prismaClient } from "../utils/prisma.client";

export const chatUserController = {
    getChatUsers: async (req: Request, res: Response) => {
        try {
            const chatUsers = await prismaClient().chatUser.findMany();
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
            const { id } = req.body;
            const chatUser = await prismaClient().chatUser.findUnique({
                where: {
                    id,
                },
            });
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
            const chatUser = await prismaClient().chatUser.create({
                data: {
                    email: email,
                    name: name,
                    user_plan_id: user_plan_id,
                },
            });
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
            const { id, name, email } = req.params;
            const chatUser = await prismaClient().chatUser.update({
                data: {
                    name,
                    email,
                },
                where: {
                    id: Number(id),
                },
            });
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
            const chatUser = await prismaClient().chatUser.delete({
                where: {
                    id: Number(id),
                },
            });
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
