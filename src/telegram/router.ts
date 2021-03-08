require('dotenv/config');
import { Telegraf } from 'telegraf';

export const route = new Telegraf(process.env.TELEGRAM_TOKEN);

route.start((ctx) => {
    console.log(ctx);
    ctx.reply('Hello World');
});

route.command('alo', async (ctx) => {
    ctx.reply('alo ai');
});