process.env["NTBA_FIX_319"] = 1;
const telegramBot = require('node-telegram-bot-api');
const TOKEN = '550822881:AAGVcJYe-sNZUVrn_WGl7DhS8x4gKE9f04M'

const bot =  new telegramBot(TOKEN, {polling: true });

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, 'EAI');
});
