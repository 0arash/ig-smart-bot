import jwt from "jsonwebtoken";

export interface UserPayload {
    email: string;
}

export const generateToken = (user: UserPayload) => {
    return jwt.sign(user, process.env.JWT_SECRET || "secret", {
        expiresIn: "7d",
    });
};
