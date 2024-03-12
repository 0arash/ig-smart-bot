import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/token.generator";
import { userService } from "../services/user.service";
import { resetPasswordService } from "../services/reset.password.service";

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

        res.cookie("hix_login_token", user.token, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
            secure: true,
        })
            .status(200)
            .json({ token: user.token, user_id: user.id });
    },
    register: async (req: Request, res: Response) => {
        const { email, password, name, mobile } = req.body;
        console.log(req.body);
        const user = await userService.getUserByEmail(email, ["password"]);
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await userService.createUser(
            email,
            hashedPassword,
            name,
            mobile,
            ["password"]
        );
        if (newUser) {
            newUser.token = generateToken({
                userId: newUser.id,
                email: newUser.email,
            });
            return res
                .status(201)
                .cookie("hix_login_token", newUser.token, {
                    maxAge: 1000 * 60 * 60 * 24 * 7,
                    httpOnly: true,
                    secure: true,
                })
                .json({ token: newUser.token, user_id: newUser.id });
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
    requestResetLink: async (req: Request, res: Response) => {
        try {
            const { email } = req.body;
            await resetPasswordService.sendResetUrl(email);
            res.status(200).json({
                data: "email has been sent.",
            });
        } catch (error: any) {
            console.log(error);
            if (error.code == "P2025") {
                return res.status(404).json({
                    error: "Email not found.",
                });
            }
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
    resetPassword: async (req: Request, res: Response) => {
        try {
            const { verify_code, email, password } = req.body;
            const result = await resetPasswordService.resetPassword(
                Number(verify_code),
                email,
                password
            );
            res.status(200).json({
                data: result,
            });
        } catch (error: any) {
            console.log(error);
            if (error.code === "P2025") {
                return res.status(404).json({
                    error: "Invalid verify code.",
                });
            }
            res.status(500).json({
                error: error || "Internal error.",
            });
        }
    },
};
