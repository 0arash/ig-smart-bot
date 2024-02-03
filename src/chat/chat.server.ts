import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";
import { prismaClient } from "../utils/prisma.client";
import { AIService } from "../ai/ai.service";
import sharedsession, {
    SocketIoSharedSessionMiddleware,
} from "express-socket.io-session";
import { RequestHandler } from "express";

export class ChatServer {
    io: Server;

    constructor(httpServer: HttpServer, sessionMiddleware: RequestHandler) {
        this.io = new Server(httpServer, {
            cors: { origin: "*", credentials: true },
            transports: ["websocket", "polling"],
            connectionStateRecovery: {
                maxDisconnectionDuration: 2 * 60 * 1000,
                skipMiddlewares: true,
            },
            serveClient: true,
            cookie: {
                path: "/",
                name: 'sio-cookie',
                httpOnly: true,
                secure: true,
            },
        });

        this.io.use(
            sharedsession(sessionMiddleware, {
                autoSave: true,
                saveUninitialized: true,
            })
        );

        // add event listeners to the socket object after connection
        this.io.on("connection", (socket) => {
            // @ts-ignore
            const session = socket.handshake.session;

            console.log(session);

            socket.on("register_login", async (data) => {
                // @ts-ignore
                if (!session.userId) {
                    const chatUser = await prismaClient().chatUser.create({
                        data: {
                            name: "Guest",
                            user_plan: {
                                connect: {
                                    api_key: data.api_key,
                                },
                            },
                        },
                    });

                    // @ts-ignore
                    session.userId = chatUser.id;
                    // @ts-ignore
                    session.userPlanid = chatUser.user_plan_id;
                    // @ts-ignore
                    session.save();

                    // @ts-ignore
                    socket.emit("user_id", session.userId);
                }
            });

            // handle 'send_chat' event and send an acknoledgment
            socket.on("send_chat", async (data) => {
                socket.emit("receive_chat", data);
                await this.sendResponse(
                    socket,
                    // @ts-ignore
                    req.handshake.session.userId,
                    // @ts-ignore
                    req.handshake.session.userPlanid
                );
            });
        });
    }

    async sendResponse(socket: Socket, userId: number, userPlanId: number) {
        AIService.generateResponse(userId, userPlanId);
    }
}
