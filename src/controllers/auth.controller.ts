import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/token.generator";
import { userService } from "../services/user.service";

export const authController = {
    login: async (req: Request, res: Response) => {
        const { email, password } = req.body;
        const user = await userService.getUserByEmail(email, []);
        if (!user || bcrypt.compareSync(password, user.password) === false) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        user.token = generateToken({
            userId: user.id,
            email: user.email,
        });

        res.cookie("token", user.token, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
            secure: true,
        });
        res.status(200).json({ token: user.token });
    },
    register: async (req: Request, res: Response) => {
        const { email, password } = req.body;

        const user = await userService.getUserByEmail(email, ["password"]);
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await userService.createUser(email, hashedPassword, [
            "password",
        ]);
        if (newUser) {
            newUser.token = generateToken({
                userId: newUser.id,
                email: newUser.email,
            });
            return res.status(201).json({ token: newUser.token });
        } else {
            return res.status(500).json({
                error: "Internal error",
            });
        }
    },
    logout: async (req: Request, res: Response) => {
        res.clearCookie("token");
        res.status(200).json({ message: "Logged out successfully" });
    },
    getCurrentUser: async (req: Request, res: Response) => {
        // @ts-ignore
        const user = await userService.getUserByEmail(req.user.email, [
            "password",
        ]);
        res.status(200).json({ user });
    },
};