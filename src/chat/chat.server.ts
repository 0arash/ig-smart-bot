import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";
import { prismaClient } from "../utils/prisma.client";
import { AIService } from "../ai/ai.service";
import sharedsession from "express-socket.io-session";
import { Application, Request, RequestHandler, Response } from "express";
import { SessionData } from "express-session";
import { ChatUser } from "@prisma/client";

export class ChatServer {
    app: Application;
    io: Server;

    constructor(
        httpServer: HttpServer,
        app: Application,
        sessionMiddleware: RequestHandler
    ) {
        this.app = app;

        this.app.post("/chat", async (req: Request, res: Response) => {
            const { api_key } = req.body;

            let chatUser: ChatUser | null;
            if (req.session && req.session.userId) {
                chatUser = await prismaClient().chatUser.findUnique({
                    where: {
                        id: req.session.userId,
                    },
                });

                if (chatUser) {
                    req.session.userId = chatUser.id;
                    req.session.userPlanId = chatUser.user_plan_id;
                    req.session.save();
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

                req.session.userId = chatUser.id;
                req.session.userPlanId = chatUser.user_plan_id;
                req.session.save();
            }

            res.json({
                success: true,
            });
        });

        this.io = new Server(httpServer, {
            cors: { origin: "http://localhost:3000", credentials: true },
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

        // add event listeners to the socket object after connection
        this.io.on("connection", (socket) => {
            //@ts-ignore
            const session: SessionData = socket.handshake.session;
            
            socket.emit("user_id", session.userId);

            // handle 'send_chat' event and send an acknoledgment
            socket.on("send_chat", async (data) => {
                socket.emit("receive_chat", data);
                // await this.sendResponse(
                //     socket,
                //     session.userId,
                //     session.userPlanId
                // );
                await new Promise((resolve) => {
                    setTimeout(resolve, 1000);
                })

                socket.emit("send_chat", {
                    message: `user ${session.userId}\n` + await this.sendResponse(socket, session.userId, session.userPlanId),
                })
            });
        });
    }

    async sendResponse(socket: Socket, userId: number, userPlanId: number) {
        return await AIService.generateResponse(userId, userPlanId);
    }
}
