const { CrawlerConfig } = require("./CrawlerConfig");
const { JsManager } = require("./../JsManager");
const { ResultReporter } = require("./../ResultReporter");
const { UrlResolver } = require("./../UrlResolver");
class CrawlerContext {
        /**
         * 
         * @param {CrawlerConfig} config 
         */
        constructor (config) {
                /**
                 * crawler config 
                 */
                this.config = config;

                /**
                 * result reporter
                 */
                this.resultReporter = new ResultReporter();

                /**
                 * use to manage script
                 */
                this.jsManager = new JsManager(config.scriptDir);

                /**
                 * use to resolve and merge url
                 */
                this.urlResolver = new UrlResolver();
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
