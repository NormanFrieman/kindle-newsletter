import { Context } from 'telegraf';

import { Route } from '../protocols';

export class Start implements Route{
    handle(ctx: Context){
        ctx.reply('Hello World');
    }
}