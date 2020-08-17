const { CrawlTaskResultCode } = require("./../constant/CrawlTaskResultCode")
class CrawlTaskResult {
        constructor () {
                /**
                 * Task id from task config
                 */
                this.taskId = 1;

                /**
                 * The crawl task result code @see {CrawlTaskResultCode}
                 */
                this.taskResult = CrawlTaskResultCode.SUCCESS;

                /**
                 * Total url count
                 */
                this.urlTotal = 0;

                /**
                 * The crawl task result message not required
                 */
                this.message = "";

                /**
                 * The urls that crawl succeed
                 */
                this.successUrls = [];

                /**
                 * The urls that crawl failed
                 */
                this.failedUrls = [];

                /**
                 * The urls that invalid
                 */
                this.badUrls = [];

                /**
                 * The urls that newly deteted @type {UrlPair}
                 */
                this.newUrls = [];

                /**
                 * The urls that has not been crawled when task be blocked
                 */
                this.unCrawledUrls = [];

                /**
                 * The datas that crawled
                 */
                this.datas = [];

                /**
                 * The avarage speed of all crawling
                 */
                this.avarageSpeedOfAll = 0;

                /**
                 * The mean speed of success crawling
                 */
                this.meanSpeedOfSuccess = 0;

                /**
                 * The avarage speed of success crawling
                 */
                this.averageSpeedOfSuccess = 0;

                /**
                 * The max speed of success
                 */
                this.maxSpeedOfSuccess = 0;
        }
}

exports.CrawlTaskResult = CrawlTaskResult;

/**
 * Builder for CrawlTaskResult
 */
class CrawlTaskResultBuilder {
        constructor () {
                this._config = new CrawlTaskResult();
        }

        /**
         * Set property taskId
         * 
         * @param {String} taskId
         * @returns {CrawlTaskResultBuilder}
         */
        taskId(taskId) {
                this._config.taskId = taskId;
                return this;
        }

        /**
         * Set property successUrls
         * 
         * @param {String} successUrl
         * @returns {CrawlTaskResultBuilder}
         */
        successUrl(successUrl) {
                this._config.successUrls.concat(successUrl);
                return this;
        }

        /**
         * Set property failedUrls
         * 
         * @param {String} failedUrl
         * @returns {CrawlTaskResultBuilder}
         */
        failedUrl(failedUrl) {
                this._config.failedUrls.concat(failedUrl);
                return this;
        }

        /**
         * Set property badUrls
         * 
         * @param {String} badUrl
         * @returns {CrawlTaskResultBuilder}
         */
        badUrl(badUrl) {
                this._config.badUrls.concat(badUrl);
                return this;
        }

        /**
         * Set property newUrls
         * 
         * @param {[Url]} newUrls
         * @returns {CrawlTaskResultBuilder}
         */
        newUrls(newUrls) {
                this._config.newUrls.concat(newUrls);
                return this;
        }

        /**
         * Set property unCrawledUrls
         * 
         * @param {[Url]} unCrawledUrls
         * @returns {CrawlTaskResultBuilder}
         */
        unCrawledUrls(unCrawledUrls) {
                this._config.unCrawledUrls = unCrawledUrls;
                return this;
        }

        /**
         * Set property data
         * 
         * @param {Any} data
         * @returns {CrawlTaskResultBuilder}
         */
        data(data) {
                this._config.datas.push(data);
                return this;
        }

        /**
         * Set property taskResult
         * 
         * @returns {CrawlTaskResultBuilder}
         */
        success() {
                this._config.taskResult = CrawlTaskResultCode.SUCCESS;
                return this;
        }

        /**
         * Set property taskResult
         * 
         * @returns {CrawlTaskResultBuilder}
         */
        blocked() {
                this._config.taskResult = CrawlTaskResultCode.BLOCKED;
                return this;
        }

        /**
         * Set property taskResult TO FAILED
         * 
         *  @returns {CrawlTaskResultBuilder}
         */
        failed() {
                this._config.taskResult = CrawlTaskResultCode.FAILED;
                return this;
        }

        /**
         * Set property message
         * 
         * @param {String} message
         * @returns {CrawlTaskResultBuilder}
         */
        message(message) {
                this._config.message = message;
                return this;
        }


        /**
         * Set property averageSpeedOfAll
         * 
         * @param {Number} value 
         * @returns {CrawlTaskResultBuilder}
         */
        averageSpeedOfAll(value) {
                this._config.avarageSpeedOfAll = value;
                return this;
        }

        /**
         * Set property averageSpeedOfSuccess
         * 
         * @param {Number} value 
         * @returns {CrawlTaskResultBuilder}
         */
        averageSpeedOfSuccess(value) {
                this._config.averageSpeedOfSuccess = value;
                return this;
        }

        /**
         * Set property meanSpeedOfSuccess
         * 
         * @param {Number} value 
         * @returns {CrawlTaskResultBuilder}
         */
        meanSpeedOfSuccess(value) {
                this._config.meanSpeedOfSuccess = value;
                return this;
        }

        /**
         * Set property maxSpeedOfSuccess
         * 
         * @param {Number} value 
         * @returns {CrawlTaskResultBuilder}
         */
        maxSpeedOfSuccess(value) {
                this._config.maxSpeedOfSuccess = value;
                return this;
        }

        /**
         * Build 
         * 
         * @returns {CrawlTaskResult}
         */
        build() {
                return this._config;
        }
}

exports.CrawlTaskResultBuilder = CrawlTaskResultBuilder;
