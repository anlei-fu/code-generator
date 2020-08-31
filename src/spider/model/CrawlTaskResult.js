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
                this.msg = "";

                /**
                 * Page results @type {PageResult}
                 */
                this.pageResults=[];

                /**
                 * The urls that has not been crawled when task be blocked, element @type {URL}
                 */
                this.unCrawledUrls = [];

                /**
                 * The avarage speed of all crawling
                 */
                this.averageSpeedOfAll = 0;

                /**
                 * The mean speed of success crawling
                 */
                this.medianSpeedOfSuccess = 0;

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
         * Set property count
         * 
         * @param {Number} count
         * @returns {CrawlTaskResultBuilder}
         */
        urlTotal(count){
                this._config.urlTotal=count;
                return this;
        }

        /**
         * Set property message
         * 
         * @param {String} message
         * @returns {CrawlTaskResultBuilder}
         */
        message(message) {
                this._config.msg = message;
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
         * Add page result
         * 
         * @param {PageResult} result 
         * @returns {CrawlTaskResultBuilder}
         */
        pageResult(result){
                       this._config.pageResults.push(result);
                       return this;
        }

        /**
         * Set property unCrawledUrls
         * 
         * @param {[URL]} unCrawledUrls
         * @returns {CrawlTaskResultBuilder}
         */
        unCrawledUrls(unCrawledUrls) {
                this._config.unCrawledUrls = unCrawledUrls;
                return this;
        }

        /**
         * Set property averageSpeedOfAll
         * 
         * @param {Number} value 
         * @returns {CrawlTaskResultBuilder}
         */
        averageSpeedOfAll(value) {
                this._config.averageSpeedOfAll = value;
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
        medianSpeedOfSuccess(value) {
                this._config.medianSpeedOfSuccess = value;
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
