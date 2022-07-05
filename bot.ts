import { Bot,Context, session, SessionFlavor } from 'grammy';
import {Menu, MenuRange } from  "@grammyjs/menu";



const bot = new Bot("5276658261:AAGUoMUkO9m1zE174mIjHllUJFnDDo0YAr4");

bot.use
const mainText= "Just send me an artist and/or a song name and I will find music for you!"
const mainMenu = new Menu(mainText);

bot.command("start",(ctx)=>ctx.reply(mainText, {}));

bot.command("help",
    async (ctx)=> {
      const text=`🔥 Commands
      Just send me an artist and/or a song name and I will find music for you!`
      await ctx.reply(text,  )
    }
  )



bot.start()