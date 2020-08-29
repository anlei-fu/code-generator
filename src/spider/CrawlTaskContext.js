const { Downloader } = require("./Downloader");
const { Browser } = require("./Browser");
const { BlockRuleChecker } = require("./BlockRuleChecker");
const { CrawlTaskConfig } = require("./model/CrawlTaskConfig");
const { UrlDecoder } = require("./UrlDecoder");
const { UrlEncoder } = require("./UrlEncoder");
const { UrlMatcher } = require("./UrlMatcher");
const { CrawlType } = require("./constant/CrawlType");

class CrawlTaskContext {
        /**
         * 
         * @param {CrawlTaskConfig} config 
         */
        constructor (config) {

                this.taskConfig = config;

                this.blockRuleChecker = new BlockRuleChecker(config.blockRules || []);

                this.urlMatcher = new UrlMatcher(JSON.parse(config.urlMatchPatterns || "[]"));

                /**
                 * @type {Downloader}
                 */
                this.downloader;

                /**
                 * @type {Browser}
                 */
                this.browser;

                /**
                 * @private
                 */
                this.urlDecoder = new UrlDecoder(JSON.parse(config.urlEncodes || "{}"));

                /**
                 * @private
                 */
                this.urlEncoder = new UrlEncoder(JSON.parse(config.urlEncodes || "{}"));
        }

        /**
         * Init context
         */
        async init() {
                // create downloader
                if (this.taskConfig.crawlType == CrawlType.STATIC) {
                        this.downloader = new Downloader(this);
                } else {
                        this.browser = new Browser(this.taskConfig);
                        await this.browser.init();
                }
        }

        /**
         * Close browser if created
         */
        async release(){
                if(this.browser)
                  await this.browser.close();
        }
}

exports.CrawlTaskContext = CrawlTaskContext;
