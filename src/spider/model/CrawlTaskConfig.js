const {UrlPair} =require("./UrlPair");

class CrawlTaskConfig {
        constructor () {
                this.taskId=0;
                this.rules = [];
                this.script = "";
                this.maxConcurrency = 20;
                this.needCookie = false;
                this.cookie = {};
                this.urls = [new UrlPair()];
                this.timeout = 0;
                this.isStatic = false;
                this.needProxy = false;
                this.proxy = {};
                this.aditionalParams = "";
                this.cookieId=1;
                this.proxyId=1;
                this.intervalMax=1000;
                this.intervalMin=100;
                this.browserMaxPaggeSize=100;
                this.encoding="";
                this.maxPage=10;
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
