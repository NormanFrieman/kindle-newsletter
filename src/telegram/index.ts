require('dotenv/config');
import { Telegraf } from 'telegraf';
import { route } from './router';

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

bot.use(route);

console.log('[TELEGRAM] Bot started');
bot.launch();