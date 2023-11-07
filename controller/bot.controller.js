const Bot = require("../models/Bot");

const botController = {
  newBot: async (req, res) => {
    try {
      const { username, password, cookie, pk } = req.body;
      const newBot = await Bot.create({
        username: username,
        password: password,
        cookie: "",
        pk: "",
        is_running: false,
      });
      res.status(201).json({
        message: newBot,
        code: 201,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
        code: 500,
      });
    }
  },
  startBot: async (req, res) => {
    try {
      res.status(200).json({
        message:"To be added.",
        code:200
      })
    } catch (error) {
      res.status(500).json({
        message:error,
        code:500
      })
    }
  },
};

module.exports = botController;
