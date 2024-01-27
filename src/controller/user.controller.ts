import { Request, Response } from "express";
import { prismaExclude } from "../utils/prisma-exclude";
import { prismaClient } from "../utils/prisma.client";


export const userController = {
    getUsers: async (req: Request, res: Response) => {
        try {
            const users = await prismaClient().user.findMany({
                select: prismaExclude("User" as never, ["password"]),
            });
            res.status(200).json({
                data: users,
                code: 200,
            });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({
                data: "Internal error",
                code: 500,
            });
        }
    },
    getUserById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const user = await prismaClient().user.findUnique({
                where: {
                    id: Number.parseInt(id),
                },
                select: prismaExclude("User" as never, ["password"]),
            });
            if (!user) {
                return res.status(404).json({
                    data: "User not found",
                    code: 404,
                });
            }
            res.status(200).json({
                data: { user },
                code: 200,
            });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({
                data: "Internal error",
                code: 500,
            });
        }
    },
    updateUserById: async (req: Request, res: Response) => {
        try {
            const { name, address, email, password, code_meli } = req.body;
            const { id } = req.params;
            const user = await prismaClient().user.update({
                data: {
                    name,
                    email,
                    password,
                    address,
                    code_meli,
                },
                where: {
                    id: Number.parseInt(id),
                },
                select: prismaExclude("User" as never, ["password"]),
            });
            res.status(200).json({
                data: user,
                code: 200,
            });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({
                data: "Internal error",
                code: 500,
            });
        }
    },
    deleteUserById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const user = await prismaClient().user.delete({
                where: {
                    id: Number.parseInt(id),
                },
                select: prismaExclude("User" as never, ["password"]),
            });
            res.status(200).json({
                data: user,
                code: 200,
            });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({
                data: "Internal error",
                code: 500,
            });
        }
    },
};
