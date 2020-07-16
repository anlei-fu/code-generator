const { CrawlTaskResultCode } = require("./../constant/CrawlTaskResultCode")
class CrawlTaskResult {
        constructor () {
                this.crawlerIp = "";
                this.crawlerId = "";
                this.taskId = 1;
                this.startTime = new Date();
                this.finishTime = new Date();
                this.successUrls = [];
                this.failedUrls = [];
                this.badUrls = [];
                this.newUrls = [];
                this.unCrawledUrls = [];
                this.datas = [];
                this.taskResultCode = CrawlTaskResultCode.SUCCESS;
                this.message = "";
                this.avarage = "";
                this.mean = "";
                this.successAvarage = 10;
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
         * Set property crawlerIp
         * 
         * @param {String} crawlerIp
         * @returns {CrawlTaskResultBuilder}
         */
        crawlerIp(crawlerIp) {
                this._config.crawlerIp = crawlerIp;
                return this;
        }

        /**
         * Set property crawlerId
         * 
         * @param {String} crawlerId
         * @returns {CrawlTaskResultBuilder}
         */
        crawlerIp(crawlerId) {
                this._config.crawlerId = crawlerId;
                return this;
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
         * Set property startTime
         * 
         * @param {String} startTime
         * @returns {CrawlTaskResultBuilder}
         */
        startTime(startTime) {
                this._config.startTime = startTime;
                return this;
        }

        /**
         * Set property finishTime
         * 
         * @param {String} finishTime
         * @returns {CrawlTaskResultBuilder}
         */
        finishTime(finishTime) {
                this._config.finishTime = finishTime;
                return this;
        }

        /**
         * Set property successUrls
         * 
         * @param {String} successUrl
         * @returns {CrawlTaskResultBuilder}
         */
        successUrl(successUrl) {
                this._config.successUrls.push(successUrl);
                return this;
        }

        /**
         * Set property failedUrls
         * 
         * @param {String} failedUrl
         * @returns {CrawlTaskResultBuilder}
         */
        failedUrl(failedUrl) {
                this._config.failedUrls.push(failedUrl);
                return this;
        }

        /**
         * Set property badUrls
         * 
         * @param {String} badUrl
         * @returns {CrawlTaskResultBuilder}
         */
        badUrl(badUrl) {
                this._config.badUrls.push(badUrl);
                return this;
        }

        /**
         * Set property newUrls
         * 
         * @param {[Url]} newUrls
         * @returns {CrawlTaskResultBuilder}
         */
        newUrls(newUrls) {
                this._config.newUrls.push(newUrls);
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
                this._config.taskResultCode = CrawlTaskResultCode.SUCCESS;
                return this;
        }

        /**
         * Set property taskResult
         * 
         * @returns {CrawlTaskResultBuilder}
         */
        blocked() {
                this._config.taskResultCode = CrawlTaskResultCode.BLOCKED;
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
         * Build 
         * 
         * @returns {CrawlTaskResult}
         */
        build() {
                return this._config;
        }
}

exports.CrawlTaskResultBuilder = CrawlTaskResultBuilder;
