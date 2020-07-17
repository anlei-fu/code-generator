const { CrawlTaskResultCode } = require("./../constant/CrawlTaskResultCode")
class CrawlTaskResult {
        constructor () {
                /**
                 * Ip of crawler from config file
                 */
                this.crawlerIp = "";

                /**
                 * Unique id of crawler from config file
                 */
                this.crawlerId = "";

                /**
                 * Task id from task config
                 */
                this.taskId = 1;

                /**
                 * The time task begin to execute
                 */
                this.startTime = new Date();

                /**
                 * The time that task finish executing
                 */
                this.finishTime = new Date();

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
                 * The crawl task result code @see {CrawlTaskResultCode}
                 */
                this.taskResultCode = CrawlTaskResultCode.SUCCESS;

                /**
                 * The crawl task result message not required
                 */
                this.message = "";

                /**
                 * The avarage speed of all crawling
                 */
                this.avarage = "";

                /**
                 * The mean speed of success crawling
                 */
                this.mean = "";

                /**
                 * The avarage speed of success crawling
                 */
                this.successAvarage = 10;

                /**
                 * The account id if use cookie
                 */
                this.accountId = 100;

                /**
                 * The proxy id if use proxy
                 */
                this.proxyId = 100;
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
        crawlerId(crawlerId) {
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
         * Set property accountId
         * 
         * @param {String} accountId
         * @returns {CrawlTaskResultBuilder}
         */
        accountId(accountId) {
                this._config.accountId = accountId;
                return this;
        }

        /**
         * Set property proxytId
         * 
         * @param {String} proxyId
         * @returns {CrawlTaskResultBuilder}
         */
        proxyId(proxyId) {
                this._config.proxyId = proxyId;
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
