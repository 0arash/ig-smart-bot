import { User } from "@prisma/client";
import { prismaClient } from "../utils/prisma.client";
import { Keys, prismaExclude } from "../utils/prisma.exclude";
import bcrypt from "bcrypt";

export const userService = {
    getUserById: async <K extends Keys<"User">>(id: number, exclude: K[]) => {
        return await prismaClient().user.findUnique({
            where: {
                id: Number(id),
            },
            select: prismaExclude("User", exclude),
        });
    },
    getUsers: async <K extends Keys<"User">>(exclude: K[]) => {
        return await prismaClient().user.findMany({
            select: prismaExclude("User", exclude),
        });
    },
    getUserByEmail: async <K extends Keys<"User">>(
        email: string,
        exclude: K[]
    ) => {
        return await prismaClient().user.findUnique({
            where: {
                email,
            },
            select: prismaExclude("User", exclude),
        });
    },
    deleteUserById: async <K extends Keys<"User">>(
        id: number,
        exclude: K[]
    ) => {
        return await prismaClient().user.delete({
            where: {
                id,
            },
            select: prismaExclude("User", exclude),
        });
    },
    createUser: async <K extends Keys<"User">>(
        email: string,
        password: string,
        name: string,
        mobile:string,
        exclude: K[]
    ) => {
        try {
            console.log("user created.");

            return await prismaClient().user.create({
                data: {
                    email,
                    password,
                    name,
                    mobile
                },
                select: prismaExclude("User", exclude),
            });
        } catch (error) {
            console.log(error);

            return null;
        }
    },
    updateUser: async <K extends Keys<"User">>(
        id: number,
        newUser: {
            email: string;
            address: string;
            code_meli: string;
            mobile: string;
            name: string;
            password: string;
        },
        exclude: K[]
    ): Promise<User | null> => {
        try {
            console.log("user updated.");
            const hashedPwd = await bcrypt.hash(newUser.password, 10);
            return await prismaClient().user.update({
                data: { ...newUser, password: hashedPwd },
                where: {
                    id,
                },
            });
        } catch (error) {
            console.log(error);
            return null;
        }
    },
};
