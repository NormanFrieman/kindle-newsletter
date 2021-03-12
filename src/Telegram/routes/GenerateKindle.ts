import { Context } from 'telegraf';

import { Route } from '../protocols';

export class GenerateKindle implements Route{
    constructor(
        private generatePdf: Function,
        private sendMail: Function
    ){}

    handle(ctx: Context){
        ctx.reply('Starting conversion process and sending mail...');
    }
}