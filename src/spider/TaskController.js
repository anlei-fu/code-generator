const { CrawlerTaskRunner } = require("./CrawlTaskRunner");
const { Controller } = require("./Controller");
const {validateUtils} =require("./utils/validate-utils");

const RequestPath = {
        RUN: "/run",
        HEARTBEAT: "/heartbeat"
}
class TaskController extends Controller {
        constructor(){
                super("TaskController")
        }
        init(context) {
                this._context = context;
        }

        async run({ body }) {
                validateUtils.requireNotNull(
                        body,
                        "taskId",
                        "urls",
                        "script",
                        "rules"
                );
                
                try {
                        let runner = new CrawlerTaskRunner(this._context);
                        await runner.start(body);
                        return this.success("started!");

                } catch (ex) {
                        return this.fail(ex.toString());
                }
        }

        heartbeat({body}) {
                this._context.masters=body;
                return this.success();
        }

        /**
         * To mount requets handler
         * 
         * @override
         */
        mount(app) {
                app.post(RequestPath.RUN, (req, resp) => this._process(req, resp, this.run))
                        .post(RequestPath.HEARTBEAT, (req, resp) => this._process(req, resp, this.heartbeat));
        }
}

exports.TaskController = TaskController;