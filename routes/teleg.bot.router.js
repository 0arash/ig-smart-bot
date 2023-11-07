const express = require("express");
const router = express.Router();
const TelegramBot = require("node-telegram-bot-api");


const constKeys = require("../util/constants")
const url = "https://3aa4-2605-6440-a000-8004-00-1e6a.ngrok.io";

const bot = new TelegramBot(constKeys.TELEGRAM_TOKEN);


bot.setWebHook(`${url}/bot${constKeys.TELEGRAM_TOKEN}`);


router.post(`/bot${constKeys.TELEGRAM_TOKEN}`, (req, res) => {
  try {
    bot.processUpdate(req.body);
    res.send(200);
  } catch (error) {
    res.send(500)
    console.log(error)
  }

});

bot.on("message", (update) => {
  try {
    const chatId = update.chat.id;
    const msg = update.text;
    const msgId = update.message_id;

    console.log("chat id->" + chatId);

    bot.sendMessage(chatId, msg, {
      reply_to_message_id: msgId,
    });
  } catch (error) {
    console.log(error)
  }

});

module.exports = router;
