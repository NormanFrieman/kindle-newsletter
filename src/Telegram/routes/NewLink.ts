import { Context } from 'telegraf';

import { Route } from '../protocols';

export class NewLink implements Route{
    async handle(ctx: Context){
        const url = ctx.message['text'].split(' ')[1];
        const validateSite = /www+\.\S+\.\S+/;

        if(!url){
            ctx.reply('URL is empty');
            return;
        }
        if(!validateSite.test(url)){
            ctx.reply('Invalid URL ❌');
            return;
        }
        
        ctx.reply(url);
        return;
    }
}