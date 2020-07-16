const { Downloader } = require("../Downloader");
const { Browser } = require("../Browser");
const { BlockRuleChecker } = require("../BlockRuleChecker");
const { CrawlTaskConfig } = require("./CrawlTaskConfig");
const { UrlResolver } = require("../UrlResolver");

const cheerio = require('cheerio');

class CrawlTaskContext {
        /**
         * 
         * @param {CrawlTaskConfig} config 
         */
        constructor (config) {
                this.cheerIo = cheerio;
                this.ruleChecker = new BlockRuleChecker(config.rules);
                this.downloader = new Downloader(config);
                this.browser = new Browser(config);
                this.urlResolver = new UrlResolver();
                this.config = config;
        }
}

exports.CrawlTaskContext = CrawlTaskContext;

/**
 * Builder for CrawlContext
 */
class CrawlContextBuilder {
        constructor () {
                this._config = new CrawlTaskContext();
        }

        /**
         * Set property cheerIo
         * 
         * @param {String} cheerIo
         * @returns {CrawlContextBuilder}
         */
        cheerIo(cheerIo) {
                this._config.cheerIo = cheerIo;
                return this;
        }

        /**
         * Set property page
         * 
         * @param {String} page
         * @returns {CrawlContextBuilder}
         */
        page(page) {
                this._config.page = page;
                return this;
        }

        /**
         * Set property apiVisiter
         * 
         * @param {String} apiVisiter
         * @returns {CrawlContextBuilder}
         */
        apiVisiter(apiVisiter) {
                this._config.apiVisiter = apiVisiter;
                return this;
        }

        /**
         * Set property ruleChecker
         * 
         * @param {String} ruleChecker
         * @returns {CrawlContextBuilder}
         */
        ruleChecker(ruleChecker) {
                this._config.ruleChecker = ruleChecker;
                return this;
        }


        /**
         * Build 
         * 
         * @returns {CrawlTaskContext}
         */
        build() {
                return this._config;
        }
}

exports.CrawlTaskContextBuilder = CrawlContextBuilder;
