const puppeteer = require('puppeteer');
const { login } = require("./login");
const { toTargePage } = require("./goto-test-page");

async function test() {
        const browser = await puppeteer.launch({
                headless: false,
                args: ['--start-maximized'],
                defaultViewport: null,
        });

        const page = await browser.newPage();
        await page.goto('http://localhost:3650/system/index');

        page.on("console", (e) => {
                console.log(e.text());
        });

        try {
                let result = await login(page);
                if(!result){
                        console.log("login failed!");
                        return;
                }
                
                if (result) {
                       await toTargePage(page, "订单管理/订单管理/短信校验")
                }
        } catch(ex){
              console.log(ex);
        }
};

test();