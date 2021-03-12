import { Status } from '../protocols';

export const generatePdf = async (name: string, url: string): Promise<Status> =>{
    console.log('[GENERATE PDF] Start PDF generation');
    console.log(`[GENERATE PDF] Name: ${name} / URL: ${url}`);
    const puppeteer = require('puppeteer');

    try{
        const browser = await puppeteer.launch();
        const webPage = await browser.newPage();

    //    const name = 'The Future is More Terrifying Than We Can Imagine';
    //    const url = 'https://medium.com/predictthe-future-is-more-terrifying-than-we-can-imagine-ceb6403765b1';

        await webPage.goto(url, {
            waitUntil: 'networkidle0'
        });

        await webPage.pdf({
            printBackground: true,
            path: name + '.pdf',
            format: 'letter',
            margin: {
                top: '20px',
                bottom: '40px',
                left: '40px',
                right: '40px'
            }
        });

        await browser.close();

        console.log(`[GENERATE PDF] PDF successfully generated`);
        return { status: true, message: 'PDF successfully generated' };
    }catch(err){
        console.log(`[GENERATE PDF] ${err.message}`);
        return { status: false, message: err.message };
    }
};