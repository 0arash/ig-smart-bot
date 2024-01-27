import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import fs from "fs";

import { routes } from "./router";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { generateSwagger } from "./swagger";
import { Server } from "socket.io";
import { createServer } from "http";
import { chatServer } from "./chat/chat-server";

async function main() {
    await generateSwagger();
    const app = express();
    const httpServer = createServer(app);

    const io = new Server(httpServer, {
        cookie: {
            name: "io",
            path: "/",
            httpOnly: true,
            sameSite: "lax",
        },
    });

    chatServer(io);

    const PORT = process.env.PORT || 3000;

    app.use(morgan("dev"));
    app.use(cookieParser(process.env.COOKIE_SECRET || "secret"));
    app.use(bodyParser.json());

    app.use(routes);

    app.use(
        "/docs",
        swaggerUi.serve,
        swaggerUi.setup(
            JSON.parse(fs.readFileSync("./src/swagger_output.json").toString())
        )
    );

    httpServer.listen(PORT, () => {
        console.log(`server running on port : ${PORT}....`);
    });
}

main();
