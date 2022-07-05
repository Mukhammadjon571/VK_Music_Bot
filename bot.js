"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const bot = new grammy_1.Bot('5276658261:AAGUoMUkO9m1zE174mIjHllUJFnDDo0YAr4');
bot.command('start', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const text = `Just send me an artist and/or a song name and I will find music for you!
/song — search for a song title
/artist —  search for an artist name
/setlang —  change language
/settings —  change settings`;
    yield ctx.reply(text);
}));
bot.command('help', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const text = `🔥 Commands\nJust send me an artist and/or a song name and I will find music for you!
/song — search for a song title
/artist —  search for an artist name
/my — list you playlist
/top — popular songs
/settings —  change settings\n
Contact Info: @expertuis_272`;
    yield ctx.reply(text);
}));
bot.command('song', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply('What song are you looking for?');
}));
bot.command('artist', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply('What artist are you looking for?');
}));
bot.command('settings', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const text = 'What would you like to change?';
    yield ctx.reply(text);
}));
bot.command('my', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply('What playlist would you like to see?');
}));
bot.command("setlang", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const text = "What language would you like to use?";
    yield ctx.reply(text);
}));
bot.on('message', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply('What would you like to do?');
}));
bot.start();
