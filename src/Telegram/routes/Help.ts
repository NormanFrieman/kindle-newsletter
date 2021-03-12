import { Context } from 'telegraf';

import { Route } from '../protocols';

export class Help implements Route{
    handle(ctx: Context){
        ctx.reply('Commands list:\n\n/create <url>: Generate .mobi file and send to kindle\n');
    }
}