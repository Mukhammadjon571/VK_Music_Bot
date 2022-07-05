"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const bot = new grammy_1.Bot("5276658261:AAGUoMUkO9m1zE174mIjHllUJFnDDo0YAr4");
bot.command("start", (ctx) => ctx.reply("Привет! Я бот для подсчета количества слов в тексте. Напишите мне текст, и я посчитаю количество слов в нем."));
bot.start();
