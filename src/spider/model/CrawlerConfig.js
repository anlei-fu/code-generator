class CrawlerConfig {
        constructor () {
                /**
                 * Ip of crawler
                 */
                this.ip = "";

                /**
                 * Unique id of crawler
                 */
                this.uniqueId = "";

                /**
                 * Script folder
                 */
                this.scriptDir = "";

                /**
                 * Crawler key ,security design
                 */
                this.key = "";
        }
}

exports.CrawlerConfig = CrawlerConfig;
