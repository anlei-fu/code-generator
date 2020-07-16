class CrawlerConfig {
        constructor () {
                this.ip = "";
                this.maxConcurrency = "";
                this.uniqueId = "";
                this.description = "";
                this.scriptPath = "";
                this.masterIps=[];
        }
}

exports.CrawlerConfig = CrawlerConfig;

/**
 * Builder for CrawlerConfig
 */
class CrawlerConfigBuilder {
        constructor () {
                this._config = new CrawlerConfig();
        }

        /**
         * Set property ip
         * 
         * @param {String} ip
         * @returns {CrawlerConfigBuilder}
         */
        ip(ip) {
                this._config.ip = ip;
                return this;
        }

        /**
         * Set property maxConcurrency
         * 
         * @param {String} maxConcurrency
         * @returns {CrawlerConfigBuilder}
         */
        maxConcurrency(maxConcurrency) {
                this._config.maxConcurrency = maxConcurrency;
                return this;
        }

        /**
         * Set property uniqueId
         * 
         * @param {String} uniqueId
         * @returns {CrawlerConfigBuilder}
         */
        uniqueId(uniqueId) {
                this._config.uniqueId = uniqueId;
                return this;
        }

        /**
         * Set property description
         * 
         * @param {String} description
         * @returns {CrawlerConfigBuilder}
         */
        description(description) {
                this._config.description = description;
                return this;
        }

        /**
         * Build 
         * 
         * @returns {CrawlerConfig}
         */
        build() {
                return this._config;
        }
}

exports.CrawlerConfigBuilder = CrawlerConfigBuilder;
