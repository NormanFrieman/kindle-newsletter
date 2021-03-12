import { Context } from 'telegraf';

import { Route } from '../protocols';

import { generatePdf } from '../../GeneratePDF';

import { sendMail } from '../../SendMail';
import { Status } from '../../protocols';

export class GenerateKindle implements Route{
    async handle(ctx: Context){
        const inputs = ctx.message['text'].split(' ');
        
        let name = '';
        inputs.map((input: string, id: number) => {
            if(id !== 0 && id !== inputs.length - 1){
                if(id === inputs.length - 2)
                    name += input;
                else
                    name += `${input} `;
            }
        });
        
        const url = inputs[inputs.length - 1];
        
        if(!name){
            ctx.reply('name is empty');
            return;
        }
        if(!url){
            ctx.reply('URL is empty');
            return;
        }

        ctx.reply('Starting conversion process and sending mail...');

        try{
            const res: Status = await generatePdf(name, url);

            ctx.reply(res.message);

            if(!res.status)
                return;

            try{
                const response: Status = await sendMail(name);

                ctx.reply(response.message);

                return;
            }catch(err){
                ctx.reply(err.message);
                return;
            }
        }catch(err){
            ctx.reply(err.message);
            return;
        }
    }
}