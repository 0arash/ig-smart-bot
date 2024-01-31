import { prismaClient } from "../utils/prisma.client";

export const chatUserService = {
    getChatUsers: async () => {
        return await prismaClient().chatUser.findMany();
    },
    getChatUserById: async (id: string) => {
        return await prismaClient().chatUser.findUnique({
            where: {
                id: Number(id),
            },
        });
    },
};
