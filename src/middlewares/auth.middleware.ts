import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserPayload } from "../utils/token.generator";
import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

export const requireRole = (role: Role) => {
    const roles: Role[] = [];
    switch(role) {
        case Role.CHAT_OPERATOR:
            roles.push(Role.CHAT_OPERATOR);
        case Role.USER:
            roles.push(Role.USER);
        case Role.ADMIN:
            roles.push(Role.ADMIN);
    }    

    return async (req: Request, res: Response, next: NextFunction) => {
        let payload: UserPayload;
        let token: string;

        const cookies = req.cookies;
        const jwtSecret = process.env.JWT_SECRET || "secret";
        console.log(req.header("Authorization"));
        
        if (req.header("Authorization")) {
            const authHeader = req.header("Authorization")!;
            
            if (!authHeader.startsWith("Bearer "))
                return res
                    .status(401)
                    .json({ error: "Invalid token in header" });
            token = authHeader.split(" ")[1];
        } else if (cookies && cookies.token) {
            token = cookies.token;
        } else {
            return res.status(401).json({ error: "Empty token" });
        }

        try {
            payload = jwt.verify(token, jwtSecret) as UserPayload;
        } catch (error) {
            return res.status(401).json({ error: "Invalid token" });
        }

        const user = await prisma.user.findUnique({
            where: {
                email: payload.email,
            },
        });
        if (user) {
            if (roles.includes(user.role)) {
                // @ts-ignore
                req.user = user;
                next();
            } else {
                return res
                    .status(403)
                    .json({ error: "Insufficient permissions" });
            }
        } else {
            return res.status(401).json({ error: "Invalid token" });
        }
    };
};
