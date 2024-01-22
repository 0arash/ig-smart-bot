import express from "express";
import swaggerUi from "swagger-ui-express";
import fs from "fs";

import { PrismaClient } from "@prisma/client";
const app = express();

const prisma = new PrismaClient();

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(
        JSON.parse(fs.readFileSync("./swagger_output.json").toString())
    )
);

app.listen(3000, () => {
    console.log("server running....");
});
