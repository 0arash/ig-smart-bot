import express from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

import { routes } from "./router";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { generateSwagger } from "./swagger";

async function main() {
    await generateSwagger();
    const app = express();
    const PORT = process.env.PORT || 3000;

    app.use(morgan("dev"));
    app.use(cookieParser(process.env.COOKIE_SECRET || "secret"));
    app.use(bodyParser.json());
    app.get("/test", (req, res) => {
        res.status(200).json({
            msg: "ok",
        });
    });

    app.use(routes);

    app.use(
        "/docs",
        swaggerUi.serve,
        swaggerUi.setup(
            JSON.parse(fs.readFileSync("./src/swagger_output.json").toString())
        )
    );

    app.listen(PORT, () => {
        console.log("server running....");
    });
}

main();
