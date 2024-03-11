import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";
import { prismaClient } from "../utils/prisma.client";
import { AIService } from "../ai/ai.service";
import sharedsession from "express-socket.io-session";
import { Application, Request, RequestHandler, Response } from "express";
import { SessionData } from "express-session";
import { ChatUser, Role } from "@prisma/client";
import { chatMessageService } from "../services/chat.message.service";
import { chatLimit } from "../utils/chat.limit.util";
import { planService } from "../services/plan.service";
import { userPlanService } from "../services/user.plan.service";
import { requireRole } from "../middlewares/auth.middleware";
import { settingsWidgetService } from "../services/settings.service";

export class ChatServer {
    app: Application;
    io: Server;

    constructor(
        httpServer: HttpServer,
        app: Application,
        sessionMiddleware: RequestHandler
    ) {
        this.app = app;

        this.io = new Server(httpServer, {
            cors: { origin: "http://localhost:5173", credentials: true },
            transports: ["websocket", "polling"],
            connectionStateRecovery: {
                maxDisconnectionDuration: 2 * 60 * 1000,
                skipMiddlewares: true,
            },
            serveClient: true,
        });

        this.io.use(
            sharedsession(sessionMiddleware, {
                autoSave: true,
                saveUninitialized: true,
            })
        );

        this.app.post("/chat", async (req: Request, res: Response) => {
            try {
                const { api_key } = req.body;
                let userPlanId = -1;

                let chatUser: ChatUser | null;
                if (req.session && req.session.userId) {
                    chatUser = await prismaClient().chatUser.findUnique({
                        where: {
                            id: Number(req.session.userId),
                        },
                    });

                    if (chatUser) {
                        req.session.userId = String(chatUser.id);
                        req.session.userPlanId = String(chatUser.user_plan_id);
                        req.session.save();

                        userPlanId = chatUser.user_plan_id;
                    }
                }
                if (!req.session || !req.session.userId) {
                    chatUser = await prismaClient().chatUser.create({
                        data: {
                            name: "Guest",
                            user_plan: {
                                connect: {
                                    api_key,
                                },
                            },
                        },
                    });

                    await prismaClient().userPlan.update({
                        where: {
                            api_key,
                        },
                        data: {
                            chats_used: {
                                increment: 1,
                            },
                        },
                    });

                    req.session.userId = String(chatUser.id);
                    req.session.userPlanId = String(chatUser.user_plan_id);
                    req.session.save();

                    userPlanId = chatUser.user_plan_id;
                }

                const settings = await settingsWidgetService.getSettings(userPlanId);

                res.status(200).json({
                    success: true,
                    sid: req.sessionID,
                    settings: {
                        title: settings?.title,
                        caption: settings?.caption
                    }
                });
            } catch (error) {
                console.log(error);
                
                res.status(500).json({
                    error: error || "Internal error.",
                });
            }
        });

        this.app.post(
            "/operator/chat/",
            requireRole(Role.CHAT_OPERATOR),
            async (req: Request, res: Response) => {
                try {
                    // @ts-ignore
                    const user_plan_id = req.user.operator_user_plan_id;

                    req.session.userPlanId = user_plan_id;
                    req.session.isOperator = user_plan_id > 0;
                    req.session.targetUserId = -1;
                    req.session.save();

                    res.status(200).json({
                        success: true,
                        sid: req.sessionID,
                    });
                } catch (error) {
                    res.status(500).json({
                        error: error || "Internal error.",
                    });
                }
            }
        );

        // add event listeners to the socket object after connection
        this.io.on("connection", async (socket) => {
            // @ts-ignore
            socket.handshake.session.socketId = socket.id;
            // @ts-ignore
            socket.handshake.session.save();

            await prismaClient().chatUser.update({
                where: {
                    //@ts-ignore
                    id: Number(socket.handshake.session.userId),
                },
                data: {
                    sid: socket.id,
                },
            });

            // @ts-ignore
            console.log(JSON.stringify(socket.handshake.session));

            // @ts-ignore
            socket.emit("user_id", socket.handshake.session.userId);

            socket.on("set_target", async (data) => {
                const targetUser = await prismaClient().chatUser.findUnique({
                    where: {
                        id: data.userId,
                    },
                });

                const targetUserId = targetUser?.id;
                const query = `select sess ->> 'userId' uid, sess ->> 'socketId' sid from chatuser_sessions WHERE sess->>'userId'='${targetUserId}';`
                const targetSocketId = await prismaClient().$queryRawUnsafe(query);

                // @ts-ignore
                socket.handshake.session.targetUserId = targetSocketId;
                // @ts-ignore
                socket.handshake.session.save();
            });

            // handle 'send_chat' event and send an acknowledgment
            socket.on("send_chat", async (data) => {
                socket.emit("receive_chat", data);

                switch (data.message.type) {
                    case "text":
                        await chatMessageService.addChatMessageToChatUser(
                            // @ts-ignore
                            socket.handshake.session.isOperator
                                ? // @ts-ignore
                                  socket.handshake.session.targetUserId
                                : // @ts-ignore
                                  socket.handshake.session.userId,
                            // @ts-ignore
                            socket.handshake.session.userPlanId,
                            data.message.content,
                            // @ts-ignore
                            !socket.handshake.session.isOperator
                        );

                        // @ts-ignore
                        if (socket.handshake.session.isOperator) {
                            // this.io
                            //     // @ts-ignore
                            //     .to(socket.handshake.session.targetUserId)
                            //     .emit("send_message", {
                            //         message: {
                            //             type: "text",
                            //             content: "Salam Chetori?",
                            //         },
                            //     });
                        } else {
                            socket.emit("send_chat", {
                                message: {
                                    type: "text",
                                    content: await this.sendResponse(
                                        // @ts-ignore
                                        socket.handshake.session.userId,
                                        // @ts-ignore
                                        socket.handshake.session.userPlanId
                                    ),
                                },
                            });
                        }
                        break;

                    default:
                        break;
                }
            });
        });
    }

    async sendResponse(userId: string, userPlanId: string) {
        ///TODO: add limit for creating chats, sending response by ai and operator creation.
        // const limits = await planser
        // const planId = await userPlanService.getUserPlanById(userPlanId);
        // const planInfo = await planService.getPlanById(Number(planId?.plan_id));

        const response = await AIService.generateResponse(userId, userPlanId);
        console.log(response);
        return response;        
    }
}
