const { URL } = require("./URL");

class CrawlTaskConfig {
        constructor () {
                /**
                 * Id of task 
                 * @NotNull
                 */
                this.taskId = 0;

                /**
                * Crawl type 
                * @NotNull
                */
                this.crawlType = 1;

                /**
                 * Script to crawl 
                 * @NotNull
                 */
                this.scriptPath = "";

                /**
                 * Ip minute max concurrency 
                 * @NotNull
                 */
                this.ipMinuteSpeedLimit = 20;

                /**
                 *  Max task count that can co-exists 
                 * @NotNull
                 */
                this.urlMaxConcurrency = 20;

                /**
                 * urls to crawl 
                 * @NotNull
                 */
                this.urls = [new URL()];


                /**
                 * block rules 
                 */
                this.blockRules = [];

                /**
                 * If true will auto download page and check download result
                 */
                this.autoDownloadPage = true;

                /**
                 * cookie
                 */
                this.cookie = "";

                /**
                 * Proxy
                 */
                this.proxy = {};

                /**
                 * Additional params
                 */
                this.aditionalParams = "";

                /**
                 * Special headers
                 */
                this.headers = "";

                /**
                 * User agent type
                 */
                this.userAgentType = 1;

                /**
                 * Page default encoding
                 */
                this.encoding = "";

                /**
                 * URL encodes
                 */
                this.urlEncodes = "";

                /**
                 * Max timeout to download page @default 10000
                 */
                this.downloadTimeout = 10000;

                /**
                 * URL Match patterns
                 */
                this.urlMatchPatterns = "";

                /**
                 * The max failed count that task allow
                 */
                this.maxFail = 100;

                /**
                 * The max continuously failed count that task allow
                 */
                this.maxContinuouslyFail = 5;
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
