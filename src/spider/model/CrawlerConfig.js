class CrawlerConfig {
        constructor () {
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
        }
}

exports.CrawlerConfig = CrawlerConfig;
