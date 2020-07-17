const { UrlPair } = require("./UrlPair");

class CrawlTaskConfig {
        constructor () {
                /**
                 * id of task
                 */
                this.taskId = 0;

                /**
                 * block rules
                 */
                this.rules = [];

                /**
                 * script to crawl
                 */
                this.script = "";

                /**
                 * crawl max concurrency
                 */
                this.maxConcurrency = 20;

                /**
                 * need cookie
                 */
                this.needCookie = false;

                /**
                 * cookie id
                 */
                this.cookieId = 1;

                /**
                 * cookie
                 */
                this.cookie = {};

                /**
                 * urls to crawl
                 */
                this.urls = [new UrlPair()];

                /**
                 * page dowload timeout
                 */
                this.timeout = 0;

                /**
                 * is static crawl
                 */
                this.isStatic = false;

                /**
                 * crawl need proxy
                 */
                this.needProxy = false;

                /**
                 * proxy id
                 */
                this.proxyId = 1;

                /**
                 * proxy
                 */
                this.proxy = {};

                /**
                 * additional params
                 */
                this.aditionalParams = "";

                /**
                 * 
                 */
                this.pollMaxRate = 1000;

                /**
                 * 
                 */
                this.polllMinRate = 100;

                /**
                 * 
                 */
                this.browserMaxPaggeSize = 100;

                /**
                 * page default encoding
                 */
                this.encoding = "";

                /**
                 * 
                 */
                this.autoDownloadPage = false;

                /**
                 * 
                 */
                this.waitForPageDelay = 100;


                this.maxFail = 100;

                this.maxFailContinuously = 30;
        }
}

exports.CrawlTaskConfig = CrawlTaskConfig;

/**
 * Builder for CrawlTaskConfig
 */
class CrawlTaskConfigBuilder {
        constructor () {
                this._config = new CrawlTaskConfig();
        }

        /**
         * Set property siteId
         * 
         * @param {String} siteId
         * @returns {CrawlTaskConfigBuilder}
         */
        siteId(siteId) {
                this._config.siteId = siteId;
                return this;
        }

        /**
         * Set property rules
         * 
         * @param {String} rules
         * @returns {CrawlTaskConfigBuilder}
         */
        rules(rules) {
                this._config.rules = rules;
                return this;
        }

        /**
         * Set property script
         * 
         * @param {String} script
         * @returns {CrawlTaskConfigBuilder}
         */
        script(script) {
                this._config.script = script;
                return this;
        }

        /**
         * Set property speed
         * 
         * @param {String} speed
         * @returns {CrawlTaskConfigBuilder}
         */
        speed(speed) {
                this._config.speed = speed;
                return this;
        }

        /**
         * Set property needCookie
         * 
         * @param {String} needCookie
         * @returns {CrawlTaskConfigBuilder}
         */
        needCookie(needCookie) {
                this._config.needCookie = needCookie;
                return this;
        }

        /**
         * Set property fetchTotal
         * 
         * @param {String} fetchTotal
         * @returns {CrawlTaskConfigBuilder}
         */
        fetchTotal(fetchTotal) {
                this._config.fetchTotal = fetchTotal;
                return this;
        }

        /**
         * Build 
         * 
         * @returns {CrawlTaskConfig}
         */
        build() {
                return this._config;
        }
}

exports.CrawlTaskConfigBuilder = CrawlTaskConfigBuilder;
