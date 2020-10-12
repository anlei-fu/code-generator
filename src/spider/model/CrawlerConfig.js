class CrawlerConfig {
        constructor() {
                /**
                 * Unique id of crawler
                 */
                this.uniqueId = "";

                /**
                 * Crawler key ,security design
                 */
                this.key = "";

                /**
                 * Script folder
                 */
                this.scriptDir = "";

                /***
                 * Use debug mode
                 */
                this.debug = false;

                /**
                 * Log file directory
                 */
                this.logDir="";
        }
}

exports.CrawlerConfig = CrawlerConfig;

class CrawlerConfigBuilder {
        constructor() {
                this._config = new CrawlerConfig();
        }

        /**
         * Set property uniqueId
         * 
         * @param {String} id 
         * @returns {CrawlerConfigBuilder}
         */
        uniqueId(id) {
                this._config.uniqueId = id;
                return this;
        }

        /**
         * Set property key
         * 
         * @param {String} key 
         * @returns {CrawlerConfigBuilder}
         */
        key(key) {
                this._config.key = key;
                return this;
        }

        /**
         * Set property script dir
         * 
         * @param {String} dir 
         * @returns {CrawlerConfigBuilder}
         */
        scriptDir(dir) {
                this._config.scriptDir = dir;
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
