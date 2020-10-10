const puppeteer = require('puppeteer');
const {LoggerFactory} =require("./../../common/logging/logger-factory");
const Apify = require('apify');

const LOG =LoggerFactory.getLogger("param checker");

async function test() {
        const browser = await Apify.launchPuppeteer({ stealth: true });

        const page = await browser.newPage();
  
        await page.goto('https://nanzhuang.tmall.com/?spm=875.7931836/B.category2016011.1.73ed4265cH60ic&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_14561677576501_708026');

        await page.click("#root > div > main > div > div > div > div.SignContainer-content > div > form > div.SignFlow-tabs > div:nth-child(2)");

        await page.type("#root > div > main > div > div > div > div.SignContainer-content > div > form > div.SignFlow-account > div > label > input","18208342263");

        await page.type("#root > div > main > div > div > div > div.SignContainer-content > div > form > div.SignFlow-password > div > label > input","2011801243");
         
        await page.click("#root > div > main > div > div > div > div.SignContainer-content > div > form > button");

        page.on("error", (e) => {
                console.log(e);
        });
        page.on("pageerror",e=>{
                console.log(e);
        })
};



test();