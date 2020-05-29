const puppeteer = require('puppeteer');
const { login } = require("./login");
const { toTargePage } = require("./goto-test-page");
const {LoggerFactory} =require("./../common/logging/logger-factory");

const LOG =LoggerFactory.getLogger("param checker");

async function test() {
        const browser = await puppeteer.launch({
                headless: false,
                args: ['--start-maximized'],
                defaultViewport: null,
        });

        const page = await browser.newPage();
        await page.goto('http://localhost:8080');
      await  page.evaluate(()=>{
               return window.error=(error)=>LOG.error("page",error);
        })

        page.on("error", (e) => {
                console.log(e);
        });
        page.on("pageerror",e=>{
                console.log(e);
        })
};

test();