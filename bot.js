process.env["NTBA_FIX_319"] = 1;
const telegramBot = require('node-telegram-bot-api');
const TOKEN = '550822881:AAGVcJYe-sNZUVrn_WGl7DhS8x4gKE9f04M'
const index = require('./index1')
const bot =  new telegramBot(TOKEN, {polling: true });
bot.sendMessage('536840432',"Por Favor digite a turma e o horário de aula a turma contendo dois algarismos e depois de um espaço o número da aula"+"\n"+"Por Exemplo 2a 1")
bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, index.analisarInput(msg.text));
});
