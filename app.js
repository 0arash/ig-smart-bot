const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const verifyToken = require("./controller/token.controller");

// routers
const userRouter = require("./routes/user.router");
const telegramBotRouter = require("./routes/teleg.bot.router");
const botRouter = require("./routes/bot.router");
const planRouter = require("./routes/plan.router");
const { initializeDatabase } = require("./database/initiate.db");
const path = require("path");

// sync sequelize database
initializeDatabase();

app.use(bodyParser.json());
app.use(express.static("view"))
app.use("/api/user", userRouter);
app.use("/api/bot", verifyToken.verifyToken, botRouter);
app.use("/", telegramBotRouter);
// app.use("/", verifyToken.verifyToken, planRouter);

app.get("/home", (req, res) => {
  res.status(200).sendFile(path.join(__dirname + "/view/pages/login.html"));
});

app.listen(3000, () => {
  console.clear();
  console.log("server is running....");
});
