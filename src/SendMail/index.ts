export const sendMail = async (name: string) => {
//(async () => {
    require('dotenv/config');

    console.log('[SEND MAIL] Start sending mail');
    console.log(`[SEND MAIL] Name: ${name}`);

    const nodemailer = require('nodemailer');

//    const name = 'webpage.pdf';

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
                filename: name,
                path: `${name}`
            }]
        });

        console.log('Message sent: ' + info.messageId);
        console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
    }catch(err){
        console.log(err);
    }
}
//})();