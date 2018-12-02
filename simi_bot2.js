const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

const token = '753427897:AAFVb621eSjLZB3tHir0nPmLxF9zgwK71hE';
const simsimiKey = 'f80d3779-255a-43ff-92d4-6c4130035fce';
const url = `http://sandbox.api.simsimi.com/request.p?key=${simsimiKey}&lc=id&ft=1.0&text=`;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    request(url + msg.text.toString(), (err, response, body) => {
        bot.sendMessage(chatId, JSON.parse(body).response);
    });
});