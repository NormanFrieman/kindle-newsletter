import { Status } from '../protocols';

export const sendMail = async (name: string): Promise<Status> => {
    const fs = require('fs');
    require('dotenv/config');

    console.log('[SEND MAIL] Start sending mail');
    console.log(`[SEND MAIL] Name: ${name}`);

    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.AUTH_USER_MAIL,
            pass: process.env.AUTH_PASS_MAIL
        }
    });

    try{
        const info = await transporter.sendMail({
            from: process.env.AUTH_USER_MAIL,
            to: process.env.MAIL_OFFICIAL,
            subject: 'convert',
            text: ' ',
            attachments: [{
                filename: `${name}.pdf`,
                path: `./${name}.pdf`
            }]
        });

        console.log('Message sent: ' + info.messageId);
        console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));

        fs.unlinkSync(`./${name}.pdf`);

        console.log('[SEND MAIL] Mail successfully sent');
        return { status: true, message: 'Mail successfully sent' };
    }catch(err){
        console.log(`[SEND MAIL] ${err.message}`);
        return { status: false, message: err.message };
    }
}