const { URL } = require("./URL");
const {BlockRule} =require("./BlockRule");

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
                this.blockRules = [new BlockRule()];

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
         * @param {number} taskId
         * @returns {CrawlTaskConfigBuilder}
         */
        taskId(taskId) {
                this._config.taskId = taskId;
                return this;
        }

        /**
         * Set property rules
         * 
         * @param {[BlockRule]} rules
         * @returns {CrawlTaskConfigBuilder}
         */
        rules(rules) {
                this._config.rules = rules;
                return this;
        }

        /**
         * Set property crawl type
         * 
         * @param {Nunber} type 
         */
        crawlType(type){
                this._config.crawlType=type;
                return this;
        }

        /**
         * Set property script
         * 
         * @param {String} scriptPath
         * @returns {CrawlTaskConfigBuilder}
         */
        script(scriptPath) {
                this._config.scriptPath = scriptPath;
                return this;
        }

        /**
         * Set property encoding
         * 
         * @param {String} encoding 
         * @returns {CrawlTaskConfigBuilder}
         */
        encoding(encoding){
            this._config.encoding=encoding;
            return this;
        }

        /**
         * Set property download timeout
         * 
         * @param {Number} value 
         * @returns {CrawlTaskConfigBuilder}
         */
        downloadTimeout(value){
            this._config.downloadTimeout=value;
            return this;
        }

        /**
         * Set property needCookie
         * 
         * @param {String} needCookie
         * @returns {CrawlTaskConfigBuilder}
         */
        cookie(cookie) {
                this._config.cookie = cookie;
                return this;
        }

        /**
         * Set property proxy
         * 
         * @param {Proxy} proxy 
         * @returns {CrawlTaskConfigBuilder}
         */
        proxy(proxy){
                this._config.proxy=proxy;
                return this;
        }

        /**
         * Set property urlMatchPatterns
         * 
         * @param {String} patterns 
         * @returns {CrawlTaskConfigBuilder}
         */
        urlMatchPatterns(patterns){
                this._config.urlMatchPatterns=patterns;
                return this;
        }

        /**
         * Set property encodes
         * 
         * @param {String} encodes 
         * @returns {CrawlTaskConfigBuilder}
         */
        urlEncodes(encodes){
              this._config.urlEncodes=encodes;
              return this;
        }

        /**
         * Set property autoDownloadPage
         * 
         * @param {Boolean} value 
         * @returns {CrawlTaskConfigBuilder}
         */
        autoDownloadPage(value){
                this._config.autoDownloadPage=value;
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
