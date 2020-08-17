const { CrawlTaskConfig } = require("./model/CrawlTaskConfig");
const { CrawlTaskContext } = require("./model/CrawlTaskContext");
// const { PageResult } = require("./model/PageResult");
const { FailRecorder } = require("./FailRecorder");
const { SpeedCaculator } = require("./SpeedCaculator");
const { Browser } = require("./Browser");
const { Downloader } = require("./Downloader");
const { DelayCaculator } = require("./DelayCaculator");
const { LoggerSurpport } = require("./LoggerSurpport");

const { CrawlTaskResultBuilder, CrawlTaskResult } = require("./model/CrawlTaskResult");
const { CrawlerContext } = require("./model/CrawlerContext");
const { PageContext } = require("./model/PageContext");


const { TaskRunnerStatus } = require("./constant/TaskRunnerStatus");
const { PageResult } = require("./constant/PageResult");
const { CrawlType } = require("./constant/CrawlType");
const { ThreadUtils } = require("./utils/thread-utils");
const cheerio = require('cheerio');

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
                        this._finish(ex.toString());
                        this.error(
                                `start task (${taskConfig.taskId}) failed,cause init failed`
                                , ex
                        );
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
                this._taskContext = new CrawlTaskContext(config);

                this._failRecorder = new FailRecorder(
                        config.maxContinuouslyFail || 15,
                        config.maxFail || 200
                );

                let pollMinRate = config.ipMinuteSpeedLimit
                        ? 60 / config.ipMinuteSpeedLimit * 1000 : 1000;
                this._delayCaculator = new DelayCaculator(
                        pollMinRate,
                        10000
                );

                // create downloader
                if (!config.crawlType == CrawlType.STATIC) {
                        this._taskContext.cheerIo = cheerio;
                        this._taskContext.downloader = new Downloader(this._taskContext);
                } else {
                        this._taskContext.browser = new Browser(config);
                        await this._taskContext.browser.init();
                }

                // check crawler script
                await this._downloadAndLoadScript(config.scriptPath);
        }

        /**
         * Check is script existed or download
         * 
         * @param {String} scriptPath
         * @private
         */
        async _downloadAndLoadScript(scriptPath) {
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
                        this.info(`to run new task failed ,cause task(${this._taskContext.taskConfig.taskId}) has been blocked!`);
                        return;
                }

                // over maxconcurrecy
                if (this._currentRunning > this._taskContext.taskConfig.urlMaxConcurrency) {
                        this._schedule(false);
                        this.info(`to run new task failed ,cause task(${this._taskContext.taskConfig.taskId}) over max concurrency!`);
                        return;
                }

                // no more task to run
                if (this._taskContext.taskConfig.urls.length == 0) {
                        this.info(`task(${this._taskContext.taskConfig.taskId}) finished, all urls has been crawled !`);
                        return;
                }

                this._schedule(true);

                let urlPair = this._taskContext.taskConfig.urls.pop();
                let pageContext = new PageContext(this._taskContext, urlPair);

                this._currentRunning++;
                this.info(`begin crawling url(${urlPair.url})`);
                let startTime = new Date();
                try {

                        // get browser page
                        if (this._taskContext.taskConfig.crawlType == CrawlType.BROWSER)
                                pageContext.page = await this._taskContext.browser.getPage();

                        let prepareResult = true;
                        if (this._taskContext.taskConfig.autoDownloadPage) {
                                if (this._taskContext.taskConfig.crawlType == CrawlType.STATIC) {
                                        prepareResult = await this._prepareStaticPage(pageContext);
                                } else if (this._taskContext.taskConfig.crawlType == CrawlType.BROWSER) {
                                        prepareResult = await this._prepareBrowserPage(pageContext);
                                }
                        }

                        if (prepareResult)
                                await this._main(pageContext);
                } catch (ex) {
                        pageContext.pageResultBuilder
                                .pageResult(PageResult.EXTRACT_FAILED)
                                .msg(ex.message);

                        this.error(`crawl url(${urlPair.url}) failed`, ex);
                }

                // release browser page
                if (pageContext.page)
                        pageContext.page.available = true;

                let pageResult = pageContext.pageResultBuilder.build();
                this.info(
                        `crawl url(${urlPair.url}) finished, result is ${pageResult.pageResult},`+
                         `and msg is ${pageResult.msg || "null"}`
                );

                let finishTime = new Date();
                this._speedCaculator.addItem(
                        {
                                startTime,
                                finishTime,
                                isSuccess: pageResult.pageResult == PageResult.SUCCCESS
                        }
                );

                this._checkAndSavePageResult(pageResult);
                this._currentRunning--;

                if (
                        // blocked
                        (this._status == TaskRunnerStatus.BLOCKED && this._currentRunning == 0)
                        //finished
                        || (this._currentRunning == 0 && this._taskContext.taskConfig.urls.length == 0)
                ) {
                        this._finish();
                }
        }

        /**
         * Download page and check page result
         * 
         * @param {PageContext} pageContext 
         * @returns {Promise<Boolean>}
         */
        async _prepareStaticPage(pageContext) {
                let downloadResult = await this._taskContext.downloader.download(pageContext.url);
                let checkResult = this._taskContext.ruleChecker.check(downloadResult);
                if (checkResult == PageResult.SUCCESS)
                        pageContext.html = downloadResult.html;

                pageContext.pageResultBuilder.pageResult(checkResult);
        }

        /**
         * Open page and check result
         * 
         * @param {PageContext} pageContext 
         * @returns {Promise<Boolean>}
         */
        async _prepareBrowserPage(pageContext) {

        }

        /**
         * Check page crawl result
         * 
         * @private
         * @param {PageResult} result 
         */
        _checkAndSavePageResult(result) {

                // blocked
                if (result.pageResult == PageResult.BLOCKED) {
                        this._taskResultBuilder.failedUrl(result.url);
                        this._status = TaskRunnerStatus.BLOCKED;
                        this._taskResultBuilder.message("blocked");
                        return;
                }

                // failed
                if (result.pageResult == PageResult.EXTRACT_FAILED) {
                        this._taskResultBuilder.failedUrl(result.url);
                        this._failRecorder.failed();
                        if (this._failRecorder.overMaxFailed) {
                                this._status = TaskRunnerStatus.BLOCKED;
                                this._taskResultBuilder.message("over max failed");
                                this.info(
                                        `over max failed, total :${this._failRecorder.totalFail},` +
                                        `conticuously fail:${this._failRecorder._maxConticuouslyFail}`
                                );
                        }

                        return;
                }

                // bad url
                if (result.pageResult == PageResult.NOT_EXIST) {
                        this._taskResultBuilder.badUrl(result.url);
                        this._failRecorder.failed();
                        if (this._failRecorder.overMaxFailed) {
                                this._status = TaskRunnerStatus.BLOCKED;
                                this._taskResultBuilder.message("over max failed");
                        }
                        return;
                }

                // success
                this._taskResultBuilder.successUrl(result.url);
                this._taskResultBuilder.data(result.data);
                this._taskResultBuilder.newUrls(result.newUrls);
        }

        /**
         * Finish crawler task
         * 
         * @param {String} msg
         * @private
         */
        _finish(msg) {

                // close browser if is not static crawl type
                if (this._taskContext.taskConfig.crawlType == CrawlType.BROWSER)
                        this._taskContext.browser.close();

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
                                        let res = await this._crawlerContext
                                                .resultReporter
                                                .reportResult(
                                                        master,
                                                        taskResult
                                                );

                                        this.info(`notify master(${master}) task(${this._taskContext.taskConfig.taskId}) task result`);
                                        this.info(`and master response:`, res);
                                        if (res&&res.code == 100)
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