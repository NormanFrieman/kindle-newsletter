require('dotenv/config');
import { Telegraf } from 'telegraf';

import { Help, Start, GenerateKindle } from './routes';

export class RouteTelegram{
    handle(){
        const route = new Telegraf(process.env.TELEGRAM_TOKEN);
        
        const start = new Start();
        route.start(start.handle);
        
        const help = new Help();
        route.command('help', help.handle);
        
        const generateKindle = new GenerateKindle();
        route.command('create', generateKindle.handle);

        return route;
    }
}