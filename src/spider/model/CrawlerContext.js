const { CrawlerConfig } = require("./CrawlerConfig");
class CrawlerContext {
        constructor () {
                this.config = new CrawlerConfig();
                this.resultReporter = "";
                this.jsManager = "";

        }
}

exports.CrawlerContext = CrawlerContext;

/**
 * Builder for CrawlerContext
 */
class CrawlerContextBuilder {
        constructor () {
                this._config = new CrawlerContext();
        }

        /**
         * Set property config
         * 
         * @param {String} config
         * @returns {CrawlerContextBuilder}
         */
        config(config) {
                this._config.config = config;
                return this;
        }

        /**
         * Set property resultReporter
         * 
         * @param {String} resultReporter
         * @returns {CrawlerContextBuilder}
         */
        resultReporter(resultReporter) {
                this._config.resultReporter = resultReporter;
                return this;
        }

        /**
         * Set property jsManager
         * 
         * @param {String} jsManager
         * @returns {CrawlerContextBuilder}
         */
        jsManager(jsManager) {
                this._config.jsManager = jsManager;
                return this;
        }


        /**
         * Build 
         * 
         * @returns {CrawlerContext}
         */
        build() {
                return this._config;
        }
}

exports.CrawlerContextBuilder = CrawlerContextBuilder;
