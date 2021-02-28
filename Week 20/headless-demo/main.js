const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    //   await page.screenshot({ path: 'example.png' });
    const a = await  page.$('a')
    console.log(await a.asElement().boxModel())
})();