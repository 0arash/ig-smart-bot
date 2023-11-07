const express = require("express");
const router = express.Router();
const botController = require("../controller/bot.controller");
const { newBotValidation } = require("../validation/bot.validation");
const {
  handleValidationErrors,
} = require("../validation/handle.validation.errors");

router.post(
  "/new",
  newBotValidation,
  handleValidationErrors,
  botController.newBot
);
router.post("/start", botController.startBot);

module.exports = router;
