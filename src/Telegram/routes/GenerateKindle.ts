import { Context } from 'telegraf';

import { Route } from '../protocols';

export class GenerateKindle implements Route{
    constructor(
        private generatePdf: Function,
        private sendMail: Function
    ){}

    handle(ctx: Context){
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

        ctx.reply('Starting conversion process and sending mail...');

        return;
    }
}