const { CrawlerTaskRunner } = require("./CrawlTaskRunner");
const { CrawlerContext } = require("./model/CrawlerContext");
const { Controller } = require("./Controller");
const { CrawlTaskConfig } = require("./model/CrawlTaskConfig");
const { MasterHeartbeat } = require("./model/MasterHeartbeat");
const { validateUtils } = require("./utils/validate-utils");

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
                        "crawlType"
                );

                try {
                        let runner = new CrawlerTaskRunner(this._context);
                        await runner.start(body);
                        return this.success("started");
                } catch (ex) {
                        this.error(`run task(${body.taskId}) failed`, ex, body);
                        return this.fail(ex.toString());
                }
        }

        /**
         * To receive master haertbeat 
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
         * To mount requets handler
         * 
         * @override
         */
        mount(app) {
                app.post(API.RUN, (req, resp) => this._process(req, resp, this.runNewTask))
                        .post(API.HEARTBEAT, (req, resp) => this._process(req, resp, this.heartbeat));
        }
}

exports.TaskController = TaskController;