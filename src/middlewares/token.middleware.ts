import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.header("Authorization");
        if (authHeader) {
            if (!authHeader.startsWith("Bearer ")) {
                return res.status(401).json({
                    error: "Invalid auth header.",
                });
            } else {
                const result = await jwt.verify(
                    authHeader.split(" ")[1],
                    process.env.JWT_SECRET || "secret"
                );
                if (!result) {
                    return res.status(403).json({
                        error: "Token expired.",
                    });
                }
                next();
            }
        }
    } catch (error) {}
};
