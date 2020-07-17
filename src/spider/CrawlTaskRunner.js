const { CrawlTaskConfig } = require("./model/CrawlTaskConfig");
const { CrawlTaskContext } = require("./model/CrawlTaskContext");
const { FailRecorder } = require("./FailRecorder");
const { SpeedCaculator } = require("./SpeedCaculator");
const { Browser } = require("./Browser");
const { Downloader } = require("./Downloader");
const { DelayCaculator } = require("./DelayCaculator");
const { LoggerSurpport } = require("./LoggerSurpport");
const { PageResult, PageResultBuilder } = require("./model/PageResult");
const { CrawlTaskResultBuilder } = require("./model/CrawlTaskResult");
const { CrawlerContext } = require("./model/CrawlerContext");
const { TaskRunnerStatus } = require("./constant/TaskRunnerStatus");
const { PageResultCode } = require("./constant/PageResultCode");
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
        }

        /**
         * Start a new crawl task
         * 
         * @param {CrawlTaskConfig} config 
         */
        async start(config) {
                this._taskResultBuilder.taskId(config.taskId);
                this._taskResultBuilder.startTime(new Date());
                this._taskResultBuilder.crawlerIp(this._crawlerContext.config.ip)
                this._taskResultBuilder.crawlerId(this._crawlerContext.config.uniqueId);

                try {
                        await this._init(config);
                } catch (ex) {
                        this._finish(ex.toString());
                        this.error(
                                `start task (${config.taskId}) failed,cause init failed`
                                , ex
                        );
                }

                this.info(`start executing crawl task(${config.taskId})`);
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
                        this.run.call(this);
                }, this._delayCaculator.nextDelay(positive));
        }

        /**
         * Init context
         * 
         * @param {CrawlTaskConfig} config 
         */
        async _init(config) {
                this._taskContext = new CrawlTaskContext(config);
                this._failRecorder = new FailRecorder(config.maxContinuouslyFail, config.maxFail);

                this._delayCaculator = new DelayCaculator(
                        config.pollMinRate || 20,
                        config.pollMaxRate || 10000
                );

                // create downloader
                if (!config.isStatic) {
                        this._taskContext.browser = new Browser(config);
                        await this._taskContext.browser.init();
                } else {
                        this._taskContext.cheerIo = cheerio;
                        this._taskContext.downloader = new Downloader(this._taskContext);
                }

                // // check crawler script
                await this.checkAndDwonloadScript(config.script);
        }

        /**
         * Check is script existed or download
         */
        async checkAndDwonloadScript(script) {
                try {
                        this._main = this._crawlerContext.jsManager.getMain(script);
                } catch (ex) {
                        this.error(`load script(${script}) faield`, ex);
                        throw ex;
                }
        }

        /**
         * Run a crawl task
         */
        async run() {

                // blocked
                if (this._status == TaskRunnerStatus.BLOCKED) {
                        this.info(`to run new task failed ,cause task(${this._taskContext.config.taskId}) has been blocked!`);
                        return;
                }

                // over maxconcurrecy
                if (this._currentRunning > this._taskContext.config.maxConcurrecy) {
                        this._schedule(false);
                        this.info(`to run new task failed ,cause task(${this._taskContext.config.taskId}) over max concurrency!`);
                        return;
                }

                // no more task to run
                if (this._taskContext.config.urls.length == 0) {
                        this.info(`task(${this._taskContext.config.taskId}) finish run all crawl urls!`);
                        return;
                }

                this._schedule(true);

                let urlPair = this._taskContext.config.urls.pop();

                let startTime = new Date();
                let result = new PageResult();
                let config = {};
                config.url = urlPair;
                config.context = this._taskContext;
                this._currentRunning++;
                this.info(`begin crawling url(${urlPair.target})`);
                try {
                        if (this._taskContext.config.autoDownloadPage
                                && this._taskContext.config.isStatic
                        ) {
                                let downloadResult = await this._taskContext.downloader.download(urlPair);
                                result = this._taskContext.ruleChecker.check(downloadResult);
                                if (result.pageResultCode == PageResultCode.SUCCCESS) {
                                        config.html = downloadResult.html;
                                        await this._main(config);
                                }

                        } else {
                                result = await this._main(config);
                        }
                } catch (ex) {
                        result = new PageResultBuilder()
                                .url(urlPair.target)
                                .pageResultCode(PageResultCode.EXTRUCT_FAILED)
                                .msg(ex.message)
                                .build();
                        this.error(`crawl url(${urlPair.target}) failed`, ex);
                }

                this.info(`crawl url(${urlPair.target}) finished and result is ${result.pageResultCode}, msg is ${result.msg || "null"}`);

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
                        this._finish();
                        return;
                }

                // finish all tasks
                if (this._currentRunning == 0 && this._taskContext.config.urls.length == 0) {
                        this._finish();
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
                        this._taskResultBuilder.message("blocked");
                        return;
                }

                // failed
                if (result.pageResultCode == PageResultCode.EXTRUCT_FAILED) {
                        this._taskResultBuilder.failedUrl(result.url);
                        this._failRecorder.failed();
                        if (this._failRecorder.overMaxFailed) {
                                this._status = TaskRunnerStatus.BLOCKED;
                                this._taskResultBuilder.message("over max failed");
                        }

                        return;
                }

                // bad url
                if (result.pageResultCode == PageResultCode.NOT_EXIST) {
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
        async _finish(msg) {
                if (this._taskContext.config.urls.length != 0) {
                        this._taskResultBuilder.unCrawledUrls(this._taskContext.config.urls);
                        this._taskResultBuilder.blocked();
                        this.info(`task(${this._taskContext.config.taskId}) be blocked`);
                } else {
                        this._taskResultBuilder.success();
                        this.info(`task(${this._taskContext.config.taskId}) succeed`);
                }

                if (msg)
                        this._taskResultBuilder.message(msg);

                this._taskResultBuilder.finishTime(new Date());

                // notify task result util success
                while (true) {
                        let masters = this._crawlerContext.config.masters;
                        for (const master of masters) {
                                try {
                                        let res = await this._crawlerContext
                                                .resultReporter
                                                .sendResult(
                                                        master,
                                                        this._taskResultBuilder.build()
                                                );

                                        this.info(`notify master(${master}) task(${this._taskContext.config.taskId}) result`);
                                        this.info(`and master response`, res);
                                        if (res.code == 100)
                                                return;

                                } catch (ex) {
                                        this.error(
                                                `send task(${this._taskContext.config.taskId}) result failed and master is ${master}`,
                                                ex
                                        );
                                }
                        }

                        ThreadUtils.sleep(10000);
                }
        }
}

exports.CrawlerTaskRunner = CrawlerTaskRunner;