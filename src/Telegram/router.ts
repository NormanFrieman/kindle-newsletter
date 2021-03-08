require('dotenv/config');
import { Telegraf } from 'telegraf';

import { Help, NewLink, Start } from './routes';

export const route = new Telegraf(process.env.TELEGRAM_TOKEN);

const start = new Start();
route.start(start.handle);

const help = new Help();
route.command('help', help.handle);

const newLink = new NewLink();
route.command('newlink', newLink.handle);