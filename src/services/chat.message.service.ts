import { prismaClient } from "../utils/prisma.client";
import { chatUserService } from "./chat.user.service";

export const chatMessageService = {
    getChatMessagesByUserId: async (chatUserId: string, userPlanId: string) => {
        const chatUser = await chatUserService.getChatUserById(
            chatUserId,
            userPlanId
        );
        if (chatUser) {
            return await prismaClient().chatMessage.findMany({
                where: {
                    chat_user_id: Number(chatUserId),
                },
            });
        } else {
            console.log("ChatUser not found");
            return null;
        }
    },
    getChatMessageById: async (id: string, userPlanId: number) => {
        return await prismaClient().chatMessage.findUnique({
            where: {
                id: Number(id),
            },
        });
    },
    addChatMessageToChatUser: async (
        chatUserId: string,
        userPlanId: string,
        chatMessageContent: string,
        isUserMessage: boolean
    ) => {
        const chatUser = await chatUserService.getChatUserById(
            chatUserId,
            userPlanId
        );

        if (chatUser) {
            return await prismaClient().chatMessage.create({
                data: {
                    chat_user_id: Number(chatUserId),
                    content: chatMessageContent,
                    is_user_message: isUserMessage,
                },
            });
        } else {
            console.log("ChatUser not found");
            return null;
        }
    },
};
