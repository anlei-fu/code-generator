const { CrawlTaskConfig } = require("./model/CrawlTaskConfig");
const { CrawlTaskContext } = require("./model/CrawlTaskContext");
const { FailRecorder } = require("./FailRecorder");
const { SpeedCaculator } = require("./SpeedCaculator");
const { Browser } = require("./Browser");
const { Downloader } = require("./Downloader");
const { DelayCaculator } = require("./DelayCaculator");
const { LoggerSurpport } = require("./LoggerSurpport");
const { PageResult, PageResultBuilder } = require("./model/PageResult");
const { TaskRunnerStatus } = require("./constant/TaskRunnerStatus");
const { PageResultCode } = require("./constant/PageResultCode");
const { CrawlTaskResultBuilder } = require("./model/CrawlTaskResult");
const { CrawlerContext } = require("./model/CrawlerContext");

const cheerio = require('cheerio')

class CrawlerTaskRunner extends LoggerSurpport {
        /**
         * 
         * @param {CrawlerContext} context 
         */
        constructor (context) {
                super("crawler task runner");
                this._crawlerContext = context;
                this._taskResultBuilder = new CrawlTaskResultBuilder();
                this._speedCaculator = new SpeedCaculator();
        }

        /**
         * Start a crawl task
         * 
         * @param {CrawlTaskConfig} config 
         */
        async start(config) {

                this._taskResultBuilder.taskId(config.taskId);
                this._taskResultBuilder.startTime(new Date());
                this._taskResultBuilder.crawlerIp(this._crawlerContext.config.ip)
                this._taskResultBuilder.crawlId(this._crawlerContext.config.uniqueId);
                let result;
                try {
                        result = await this.init(config);
                } catch (ex) {
                        result = false;
                }

                if (!result) {
                        this.error(`start task (${config.taskId}) failed`);
                        return;
                }

                this._status = TaskRunnerStatus.OK;
                this.setPlan(true);
        }

        /**
         * Set timeout to run task
         * 
         * @param {boolean} positive 
         */
        setPlan(positive) {
                setTimeout(() => {
                        this.run.call(this);
                }, this._delayCaculator.nextDelay(positive));
        }

        /**
         * Init context
         * 
         * @param {CrawlTaskConfig} config 
         */
        async init(config) {
                this._taskContext = new CrawlTaskContext(config);
                this._failRecorder = new FailRecorder(config.maxFailCount);

                this._delayCaculator = new DelayCaculator(
                        context.config.task.pollRateMIn || 20,
                        context.config.task.pollRateMax || 10000
                );

                // create downloader
                if (!config.isStatic) {
                        this._taskContext.browser = new Browser(config);
                        await this._taskContext.browser._init();
                } else {
                        this._taskContext.cheerIo = cheerio;
                        this._taskContext.downloader = new Downloader(config);
                }

                // check crawler script
                if (! await this.checkAndDwonloadScript(config.script))
                        return false;

                return true;
        }

        /**
         * Run a task
         */
        async run() {

                // blocked
                if (this._status = TaskRunnerStatus.BLOCKED) {
                        return;
                }

                // over maxconcurrecy
                if (this._currentRunning > this._taskContext.config.maxConcurrecy) {
                        this.setPlan(false);
                        return;
                }

                this.setPlan(true);

                // no more task to run
                if (this._taskContext.config.urls.length == 0) {
                        return;
                }

                let urlPair = this._taskContext.config.urls.pop();

                let startTime = new Date();
                let result = null;
                this._currentRunning++;
                try {
                        result = await this.main(urlPair, this.context);
                } catch (ex) {
                        result = {};
                }

                let finishTime = new Date();
                this._speedCaculator.addItem(
                        {
                                startTime,
                                finishTime,
                                isSuccess: result.code == PageResultCode.SUCCCESS
                        }
                );

                this.checkAndSetResult(result);
                this._currentRunning--;

                // blocked and all task is finished
                if (this._status == TaskRunnerStatus.BLOCKED && this._currentRunning == 0) {
                        this.finish();
                        return;
                }

                // finish all tasks
                if (this._currentRunning == 0 && this._taskContext.config.urls.length == 0) {
                        this.finish();
                }
        }

        /**
         * Check is script existed or download
         */
        async checkAndDwonloadScript(script) {
                if (!this._jsManager.exists(script)) {
                        try {

                        } catch (ex) {
                                throw ex;
                        }
                }

                try {
                        this._main = this._jsManager.getMain(script);
                } catch (ex) {
                        throw ex;
                }
        }

        /**
         * Check page crawl result
         * 
         * @param {PageResult} result 
         */
        checkAndSetResult(result) {

                // blocked
                if (result.pageResultCode == PageResultCode.BLOCKED) {
                        this._taskResultBuilder.failedUrl(result.url);
                        this._status = TaskRunnerStatus.BLOCKED;
                        return;
                }

                // failed
                if (result.pageResultCode == PageResultCode.FAILED) {
                        this._taskResultBuilder.failedUrl(result.url);
                        this._failRecorder.failed();
                        if (this._failRecorder.overMaxFailed) {
                                this._status = TaskRunnerStatus.BLOCKED;
                        }
                        return;
                }

                // bad url
                if (result.pageResultCode = PageResultCode.NOT_EXIST) {
                        this._taskResultBuilder.badUrl(result.url);
                        return;
                }

                // success
                this._taskResultBuilder.successUrl(result.url);
                this._taskResultBuilder.data(result.data);
                this._taskResultBuilder.newUrls(result.newUrls);
        }

        /**
         * Finish crawler task
         */
        finish(msg) {
                if (this._taskContext.config.urls.length != 0) {
                        this._taskResultBuilder.unCrawledUrls(this._taskContext.config.urls);
                        this._taskResultBuilder.blocked();
                } else {
                        this._taskResultBuilder.success();
                }

                if (msg)
                        this._taskResultBuilder.message(msg);
        }
}

exports.CrawlerTaskRunner = CrawlerTaskRunner;