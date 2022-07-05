import { Bot, Context, session, SessionFlavor } from 'grammy';
import { Menu, MenuRange } from '@grammyjs/menu';

const bot = new Bot('5276658261:AAGUoMUkO9m1zE174mIjHllUJFnDDo0YAr4');

bot.command('start', async (ctx) => {
  const text = `Just send me an artist and/or a song name and I will find music for you!
/song — search for a song title
/artist —  search for an artist name
/setlang —  change language
/settings —  change settings`;
  await ctx.reply(text);
});

bot.command('help', async (ctx) => {
  const text = `🔥 Commands\nJust send me an artist and/or a song name and I will find music for you!
/song — search for a song title
/artist —  search for an artist name
/my — list you playlist
/top — popular songs
/settings —  change settings\n
Contact Info: @expertuis_272`;
  await ctx.reply(text);
});

bot.command('song', async (ctx) => {
  await ctx.reply('What song are you looking for?');
});

bot.command('artist', async (ctx) => {
  await ctx.reply('What artist are you looking for?');
});

bot.command('settings', async (ctx) => {
  const text = 'What would you like to change?';
  await ctx.reply(text);
});

bot.command('my', async (ctx) => {
  await ctx.reply('What playlist would you like to see?');
});

bot.command("setlang", async (ctx)=>{
  const text = "What language would you like to use?";
  await ctx.reply(text);
})

bot.on('message', async (ctx) => {
   await ctx.reply('What would you like to do?');
})

bot.start();
