import express from "express";
import swaggerUi from "swagger-ui-express";
import fs from "fs";

import { routes } from "./router";
import bodyParser from "body-parser";
import { generateSwagger } from "./swagger";

async function main() {
  await generateSwagger();
  const app = express();

  app.use(bodyParser.json());

  app.use(routes);

  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(
      JSON.parse(fs.readFileSync("./src/swagger_output.json").toString())
    )
  );

  app.listen(3000, () => {
    console.log("server running....");
  });
}

main();
