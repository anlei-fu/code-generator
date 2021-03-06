const { CrawlerTaskRunner } = require("./CrawlTaskRunner");
const { CrawlerContext } = require("./CrawlerContext");
const { Controller } = require("./../http");
const { CrawlTaskConfig } = require("./model/CrawlTaskConfig");
const { MasterHeartbeat } = require("./model/MasterHeartbeat");
const { validateUtils } = require("./../libs");

const API = {
        RUN: "/run",
        HEARTBEAT: "/heartbeat"
}

class TaskController extends Controller {
        constructor () {
                super("TaskController")
        }

        /**
         * Set @see {CrawlerContext}
         * 
         * @param {CrawlerContext} context 
         */
        init(context) {
                this._context = context;
        }

        /**
         * To start new crawl task
         * 
         * @param {{body:CrawlTaskConfig}} param0 
         */
        async runNewTask({ body }) {
                validateUtils.requireNotNull(
                        body,
                        "taskId",
                        "urls",
                        "scriptPath",
                        "crawlType",
                        // "autoDownloadPage",
                        // "ipMinuteSpeedLimit",
                        // "urlMaxConcurrency"
                );

                try {
                        let runner = new CrawlerTaskRunner(this._context);
                        await runner.start(body);
                        return this.success("started");
                } catch (ex) {
                        this.fatal(`run task(${body.taskId}) failed`, ex);
                        return this.fail(ex.toString());
                }
        }

        /**
         * To receive master heartbeat 
         * 
         * @param {{body:MasterHeartbeat}} param0 
         */
        heartbeat({ body }) {
                this._context.masters = body.masters;
                this._context.fileHost = body.fileHost;
                this.info(`receive heartbeat from master(${body.master})`);
                return this.success();
        }

        /**
         * To mount requests handler
         * 
         * @param {Express} express
         * @override
         */
        mount(express) {
                express.post(API.RUN, (req, resp) => this._process(req, resp, this.runNewTask))
                        .post(API.HEARTBEAT, (req, resp) => this._process(req, resp, this.heartbeat));
        }
}

exports.TaskController = TaskController;