const { CrawlTaskConfig } = require("./model/CrawlTaskConfig");
const { CrawlTaskContext } = require("./CrawlTaskContext");
const { FailRecorder } = require("./FailRecorder");
const { SpeedCaculator } = require("./SpeedCaculator");
const { DelayCaculator } = require("./DelayCaculator");
const { LoggerSurpport } = require("./LoggerSurpport");
const { CrawlTaskResultBuilder, CrawlTaskResult } = require("./model/CrawlTaskResult");
const { CrawlerContext } = require("./CrawlerContext");
const { PageContext } = require("./PageContext");

const { TaskRunnerStatus } = require("./constant/TaskRunnerStatus");
const { PageResult } = require("./constant/PageResult");
const { ThreadUtils } = require("./utils/thread-utils");

class CrawlerTaskRunner extends LoggerSurpport {
        /**
         * Constructor of CrawlerTaskRunner
         * 
         * @constructor
         * @param {CrawlerContext} context 
         */
        constructor (context) {
                super("CrawlTaskRunner");
                this._crawlerContext = context;
                this._taskResultBuilder = new CrawlTaskResultBuilder();
                this._speedCaculator = new SpeedCaculator();
                this._currentRunning = 0;
        }

        /**
         * Start a new crawl task
         * 
         * @param {CrawlTaskConfig} taskConfig 
         */
        async start(taskConfig) {
                this._taskResultBuilder.taskId(taskConfig.taskId);

                try {
                        await this._init(taskConfig);
                } catch (ex) {
                        this.error(
                                `start task (${taskConfig.taskId}) failed, cause init failed`
                                , ex
                        );
                        throw ex;
                }

                this.info(`start executing crawl task(${taskConfig.taskId})`);
                this._status = TaskRunnerStatus.OK;
                this._schedule(true);
        }

        /**
         * Set timeout to run new task
         * 
         * @param {boolean} positive 
         */
        _schedule(positive) {
                setTimeout(() => {
                        this._crawl.call(this);
                }, this._delayCaculator.nextDelay(positive));
        }

        /**
         * Init context
         * 
         * @param {CrawlTaskConfig} config 
         */
        async _init(config) {
                config.urlMaxConcurrency = config.urlMaxConcurrency || 10;
                this._taskContext = new CrawlTaskContext(config);
                await this._taskContext.init();

                this._failRecorder = new FailRecorder(
                        config.urlMaxContinuouslyFail || 20,
                        config.urMaxFail || 200
                );

                let pollMinRate = config.ipMinuteSpeedLimit
                        ? 60 / config.ipMinuteSpeedLimit * 1000 : 1000;
                this._delayCaculator = new DelayCaculator(
                        pollMinRate,
                        10000
                );

                // decode urls
                let urls = [];
                config.urls.forEach(url => {
                        if (!url || !url.url)
                                return;

                        url.encodedUrl = url.url;
                        url.depth = url.depth || 0;
                        url.url = this._taskContext.urlDecoder.decode(url.url);

                        if (url.referUrl)
                                url.referUrl = this._taskContext.urlDecoder.decode(url.referUrl);

                        urls.push(url);
                });

                config.urls = urls;
                this._taskResultBuilder.urlTotal(config.urls.length);

                // load script
                await this._loadScript(config.scriptPath);
        }

        /**
         * Check is script existed or download
         * 
         * @param {String} scriptPath
         * @private
         */
        async _loadScript(scriptPath) {
                try {
                        this._main = await this._crawlerContext.jsManager.getMain(scriptPath);
                } catch (ex) {
                        this.error(`load script(${scriptPath}) faield`, ex);
                        throw ex;
                }
        }

        /**
         * Run a crawl task
         * 
         * @private
         */
        async _crawl() {

                // blocked
                if (this._status == TaskRunnerStatus.BLOCKED) {
                        this.info(`failed to crawl, cause task(${this._taskContext.taskConfig.taskId}) has been blocked!`);
                        return;
                }

                // over maxconcurrecy
                if (this._currentRunning > this._taskContext.taskConfig.urlMaxConcurrency) {
                        this._schedule(false);
                        this.info(`failed to crawl, cause task(${this._taskContext.taskConfig.taskId}) over max concurrency!`);
                        return;
                }

                // no more task to run
                if (this._taskContext.taskConfig.urls.length == 0) {
                        this.info(`task(${this._taskContext.taskConfig.taskId}) finished, all urls has been crawled !`);
                        return;
                }

                this._schedule(true);

                let url = this._taskContext.taskConfig.urls.pop();
                let pageContext = new PageContext(this._taskContext, url);
                this.info(`begin crawling url(${url.url})`);
                this._currentRunning++;
                let startTime = new Date();
                try {
                        if (await pageContext.prepare()) {
                                // To check is main ok
                                pageContext.pageResultBuilder.pageResult(PageResult.UNSET);
                                await this._main(pageContext);
                        }
                } catch (ex) {
                        pageContext.pageResultBuilder
                                .pageResult(PageResult.SCRIPT_INCORRECT)
                                .msg(ex.message);

                        this.error(`crawl url(${url.url}) failed`, ex);
                }

                // release browser page if need
                pageContext.release();

                let pageResult = pageContext.pageResultBuilder.build();
                this.info(
                        `crawl url(${url.url}) finished, result is ${pageResult.pageResult},` +
                        `and msg is ${pageResult.msg || "null"}`
                );

                this._speedCaculator.add(
                        {
                                elapsed: new Date().getTime() - startTime.getTime(),
                                success: pageResult.pageResult == PageResult.SUCCCESS
                        }
                );

                this._checkAndSavePageResult(pageResult);
                this._currentRunning--;

                if (
                        // blocked
                        (this._status == TaskRunnerStatus.BLOCKED && this._currentRunning == 0)
                        // finished
                        || (this._currentRunning == 0 && this._taskContext.taskConfig.urls.length == 0)
                ) {
                        this._finish();
                }
        }

        /**
         * Check page crawl result
         * 
         * @private
         * @param {PageResult} result 
         */
        _checkAndSavePageResult(result) {

                this._taskResultBuilder.pageResult(result);

                // blocked
                if (result.pageResult == PageResult.BLOCKED) {
                        this._status = TaskRunnerStatus.BLOCKED;
                        this._taskResultBuilder.message("blocked");
                        return;
                }

                // failed
                if (result.pageResult == PageResult.SCRIPT_INCORRECT
                        || result.pageResult == PageResult.DOWNLOAD_FAILED
                        || result.pageResult == PageResult.PAGE_NOT_EXIST
                        || result.pageResult == PageResult.PAGE_INCORRECT
                        || result.pageResult == PageResult.UNSET
                ) {
                        this._failRecorder.failed();
                        if (this._failRecorder.isOverMaxFailed) {
                                this._status = TaskRunnerStatus.BLOCKED;
                                this._taskResultBuilder.message("over max failed");
                                this.info(
                                        `over max failed, total :${this._failRecorder.totalFail},` +
                                        `conticuously fail:${this._failRecorder.continuouslyFailedCount}`
                                );
                        }

                        return;
                }
        }

        /**
         * Finish crawler task
         * 
         * @param {String} msg
         * @private
         */
        _finish(msg) {

                // close browser if use browser
                this._taskContext.release();

                // failed 
                if (this._taskContext.taskConfig.urls.length != 0) {
                        this._taskResultBuilder.unCrawledUrls(this._taskContext.taskConfig.urls);

                        // blocked
                        if (this._status == TaskRunnerStatus.BLOCKED) {
                                this._taskResultBuilder.blocked();
                        } else {
                                this._taskResultBuilder.failed();
                        }

                        this.info(`task(${this._taskContext.taskConfig.taskId})failed ,status is ${this._status}`);
                } else {
                        this._taskResultBuilder.success();
                        this.info(`task(${this._taskContext.taskConfig.taskId}) succeed`);
                }

                if (msg)
                        this._taskResultBuilder.message(msg);

                // set speed statistics
                this._taskResultBuilder.averageSpeedOfAll(this._speedCaculator.avarageSpeedOfAll);
                this._taskResultBuilder.averageSpeedOfSuccess(this._speedCaculator.averageSpeedOfSuccess);
                this._taskResultBuilder.medianSpeedOfSuccess(this._speedCaculator.medianSpeedOfSuccess);
                this._taskResultBuilder.maxSpeedOfSuccess(this._speedCaculator.maxSpeedOfSuccess);

                let taskResult = this._taskResultBuilder.build();
                this.reportTaskResult(taskResult);
        }

        /**
         * Send task result to master
         * 
         * @param {CrawlTaskResult} taskResult 
         */
        async reportTaskResult(taskResult) {
                // notify task result util success
                while (true) {
                        let masters = this._crawlerContext.masters;
                        for (const master of masters) {
                                try {
                                        let resp = await this._crawlerContext
                                                .resultReporter
                                                .reportResult(
                                                        master,
                                                        taskResult
                                                );

                                        this.info(`notify master(${master}) task(${this._taskContext.taskConfig.taskId}) result`);
                                        this.info(`and master response:`, resp);
                                        if (resp && resp.code == 100)
                                                return;

                                } catch (ex) {
                                        this.error(
                                                `report task(${this._taskContext.taskConfig.taskId}) result failed and master is ${master}`,
                                                ex
                                        );
                                }
                        }

                        await ThreadUtils.sleep(10000);
                }
        }
}

exports.CrawlerTaskRunner = CrawlerTaskRunner;