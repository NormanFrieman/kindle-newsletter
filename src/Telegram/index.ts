import { Telegraf } from 'telegraf';
import { RouteTelegram } from './router';

export const telegram = () => {
    require('dotenv/config');

    const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

    const routeTelegram = new RouteTelegram();
    const route = routeTelegram.handle();

    bot.use(route);

    console.log('[TELEGRAM] Bot started');
    bot.launch();
}