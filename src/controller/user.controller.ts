import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { prismaExclude } from "../utils/prisma-exclude";

const prisma = new PrismaClient();

export const userController = {
    getUsers: async (req: Request, res: Response) => {
        try {
            const users = await prisma.user.findMany({
                select: {
                    password: false,
                },
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
            const users = await prisma.user.findMany({
                where: {
                    id: Number.parseInt(id),
                },
                select: prismaExclude("User", ["password"]),
            });
            if (users.length === 0) {
                return res.status(404).json({
                    data: "user not found",
                    code: 404,
                });
            }
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
    newUser: async (req: Request, res: Response) => {
        try {
            const { name, email, password, address, code_meli } = req.body;
            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    password,
                    address,
                    code_meli,
                },
            });
            res.status(201).json({
                data: user,
                code: 201,
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
            const user = await prisma.user.update({
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
            const user = await prisma.user.delete({
                where: {
                    id: Number.parseInt(id),
                },
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
