export const generatePDF = async (name: string, url: string) => {
//(async () => {
    const puppeteer = require('puppeteer');

    const browser = await puppeteer.launch();
    const webPage = await browser.newPage();

//    const name = 'The Future is More Terrifying Than We Can Imagine';
//    const url = 'https://medium.com/predict/the-future-is-more-terrifying-than-we-can-imagine-ceb6403765b1';

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
//})();
};