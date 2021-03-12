import { Telegraf } from 'telegraf';
import { RouteTelegram } from './router';

export const telegram = (generatePdf: Function, sendMail: Function) => {
    require('dotenv/config');

    const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

    const routeTelegram = new RouteTelegram(generatePdf, sendMail);
    const route = routeTelegram.handle();

    bot.use(route);

    console.log('[TELEGRAM] Bot started');
    bot.launch();
}