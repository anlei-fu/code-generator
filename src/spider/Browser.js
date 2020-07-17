const puppeteer = require('puppeteer');
const { BrowserPage } = require("./model/BrowserPage");
const { ThreadUtils } = require("./utils/thread-utils");
const { CrawlTaskConfig } = require("./model/CrawlTaskConfig");
const { LoggerSurpport } = require("./LoggerSurpport");

class Browser extends LoggerSurpport {
        /**
         * Constructor of browser
         * 
         * @constructor
         * @param {CrawlTaskConfig} config 
         */
        constructor (config) {
                super("Browser")
                this._config = config;
                this._config.browserMaxPaggeSize = this._config.browserMaxPaggeSize || 50;
                this._pages = [new BrowserPage()];
        }

        /**
         * Init browser
         * 
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
         * Get page
         * 
         * @returns {Promise<BrowserPage>}
         */
        async getPage() {
                while (true) {

                        // find from created pages
                        let pages = this._pages.filter(page => page.available);
                        if (pages.length > 0) {
                                let page = pages[0];
                                page.available = false;
                                return page;
                        }

                        // create new page if not over max page
                        if (this._pages.length < this._config.maxPage) {
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

                        // wait for page available
                        await ThreadUtils.sleep(this._config.waitForPageDelay || 50);
                }
        }

        /**
         * Close browser
         * 
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
