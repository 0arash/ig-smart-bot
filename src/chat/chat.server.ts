import { Server } from "socket.io";
import { Server as HttpServer } from "http";
import { RequestHandler } from "express";
import { prismaClient } from "../utils/prisma.client";
const { createAdapter } = require("@socket.io/postgres-adapter");
const { Pool } = require("pg");

export class ChatServer {
    io: Server;

    constructor(httpServer: HttpServer, sessionMiddleware: RequestHandler) {
        this.io = new Server(httpServer, {
            cors: {
                origin: "*",
                methods: ["GET", "POST"],
            },
            transports: ["websocket", "polling"],
            connectionStateRecovery: {
                maxDisconnectionDuration: 2 * 60 * 1000,
                skipMiddlewares: true,
            },
        });

        this.io.engine.use(sessionMiddleware);

        // add event listeners to the socket object after connection
        this.io.on("connection", (socket) => {
            const req = socket.request;

            // @ts-ignore
            const sessionId = socket.request.session.id;
            console.log(sessionId);

            socket.on("register_login", async (data) => {
                // @ts-ignore
                if (!req.session.userId) {
                    const chatUser = await prismaClient().chatUser.create({
                        data: {
                            name: "Guest",
                            user_plan: {
                                connect: {
                                    api_key: data.api_key
                                }
                            }
                        },
                    });

                    // @ts-ignore
                    req.session.userId = chatUser.id;
                    // @ts-ignore
                    req.session.save();
                }
            });

            socket.use((__, next) => {
                // @ts-ignore
                req.session.reload((err) => {
                    if (err) {
                        socket.disconnect();
                    } else {
                        next();
                    }
                });
            });

            // handle 'send_chat' event and send an acknoledgment
            socket.on("send_chat", (data) => socket.emit("receive_chat", data));
        });
    }
}
