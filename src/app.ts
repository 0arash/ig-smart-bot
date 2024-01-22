import express from "express";
import swaggerUi from "swagger-ui-express";
import fs from "fs";

import { routes } from "./router";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use(routes);

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
