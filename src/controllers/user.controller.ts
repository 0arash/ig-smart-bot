import { Request, Response } from "express";
import { userService } from "../services/user.service";
import { prismaClient } from "../utils/prisma.client";
import { PrismaClient } from "@prisma/client";

export const userController = {
    getUsers: async (req: Request, res: Response) => {
        try {
            const users = await userService.getUsers(["password"]);
            res.status(200).json({
                data: users,
                code: 200,
            });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({
                data: "Internal error.",
                code: 500,
            });
        }
    },
    getUserById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const user = await userService.getUserById(Number(id), [
                "password",
            ]);
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
    getUserByEmail: async (req: Request, res: Response) => {
        try {
            const { email } = req.body;
            const user = await userService.getUserByEmail(email, ["password"]);
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
            const { name, mobile, address, email, password, code_meli, birth } =
                req.body;

            //@ts-ignore
            const { id } = req.user;
            const user = await userService.updateUser(
                Number(id),
                { email, address, code_meli, mobile, name, password, birth },
                ["password"]
            );
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
            const user = await userService.deleteUserById(Number(id), [
                "password",
            ]);
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
