const puppeteer = require('puppeteer');
const { BrowserPage } = require("./model/BrowserPage");
const { ThreadUtils } = require("./utils/thread-utils");
const { CrawlTaskConfig } = require("./model/CrawlTaskConfig");
const { LoggerSurpport } = require("./LoggerSurpport");

class Browser extends LoggerSurpport {
        /**
         * 
         * @param {CrawlTaskConfig} config 
         */
        constructor (config) {
                this._config = config;
                this._config.maxPage = this._config.maxPage || 50;
                this._pages = [new Page()];
        }

        /**
         * @returns {Promise<void>}
         */
        async init() {
                this._pages = [];
                this._browser = await puppeteer.launch({
                        args: ['--start-maximized'],
                        defaultViewport: null,
                });
        }

        /**
         * @returns {Promise<BrowserPage>}
         */
        async getPage() {
                while (true) {
                        let pages = this._pages.filter(page => page.available);
                        if (pages.length > 0) {
                                let page = pages[0];
                                page.available = false;
                                return page;
                        }

                        if (this._pages.length < 30) {
                                let p = null;
                                try {
                                        p = await this._browser.newPage();
                                        if (this._config.cookie)
                                                await p.setCookie(this._config.cookie)
                                } catch (ex) {
                                        continue;
                                }
                                let page = new BrowserPage();
                                page.page = p;
                                page.available = false;
                                this._pages.push(page);

                                return page;
                        }

                        await ThreadUtils.sleep(100);
                }
        }

        /**
         * @returns {Promise<void>}
         */
        async close() {
                try {
                        await this._browser.close();
                } catch (ex) {

                }
        }
}

exports.Browser = Browser;
