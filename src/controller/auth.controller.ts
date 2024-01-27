import { Request, Response } from "express";
import { prismaExclude } from "../utils/prisma-exclude";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/token-generator";

const prisma = new PrismaClient();

export const authController = {
    login: async (req: Request, res: Response) => {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user || bcrypt.compareSync(password, user.password) === false) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        user.token = generateToken({
            email: user.email,
        });

        res.cookie("token", user.token, { maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true, secure: true });
        res.status(200).json({ token: user.token });
    },
    register: async (req: Request, res: Response) => {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });
        newUser.token = generateToken({ email: newUser.email });

        await prisma.user.update({
            data: newUser,
            where: {
                email: newUser.email,
            },
        });

        res.status(201).json({ token: newUser.token });
    },
    logout: async (req: Request, res: Response) => {
        res.clearCookie("token");
        res.status(200).json({ message: "Logged out successfully" });
    },
    getUser: async (req: Request, res: Response) => {
        const user = await prisma.user.findUnique({
            where: {
                //@ts-ignore
                email: req.user.email,
            },
            select: prismaExclude("User", ["password"]),
        });
        res.status(200).json({ user });
    },
};
