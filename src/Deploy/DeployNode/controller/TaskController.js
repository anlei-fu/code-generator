const { Controller } = require("../../common/Controller");
const { TaskStatus } = require("./../../common/po/constant/TaskStatus");
const { validateUtils } = require("./../../common/utils/validate-utils");
const { ConvertUtils } = require("./../../common/utils/convert-utils");
const { NodeContext } = require("./../../common/NodeContext");

const API = {
        ADD: "/task/add",
        STATUS: "/task/status/:id",
        LIST_EXCUTEING: "/task/list/executing",
        WAIT_TO_EXCUTE: "/task/list/wait",
        RETRY: "/task/retry/:id"
};
class TaskController extends Controller {

        constructor () {
                super("TaskController");
        }

        /**
         * Init
         * 
         * @param {NodeContext} context 
         */
        init(context) {
                validateUtils.requireNotNull(context.accesses, "TaskAccess");
                this._access = context.accesses.TaskAccess;
        }

        /**
         * Retry task
         * 
         * @param {*} param0 
         */
        async retry({ params }) {
                let id = ConvertUtils.toNumber(params.id);
                validateUtils.requireNumber(id);
                let item = await this._access.getById(id);
                if (!item)
                        return this.noDataFound();

                let result = await this._access.updateById(id, {
                        executeCount: item.executeCount || 1 + 1,
                        taskStatus: TaskStatus.WAIT
                });

                return this.responseBoolean(result);
        }

        /**
         * Add task
         * 
         * @param {*} param0 
         * @returns {ApiResponse}
         */
        async addTask({ body }) {
                validateUtils.requireNumber(body, "id", "taskType");
                let result = await this._access.add({
                        id: body.id,
                        taskType: body.taskType,
                        args: body.args,
                        scriptFilePath: body.scriptFilePath
                });

                return this.responseBoolean(result);
        }

        /**
         * Get task status
         * 
         * @param {*} param0 
         * @returns {ApiResponse}
         */
        async status({ params }) {
                let id = ConvertUtils.toNumber(params.id);
                validateUtils.requireNumber(id);
                let item = await this._access.getById(id);
                if (!item)
                        return this.noDataFound();

                return this.resposneObject({ taskStatus: item.taskStatus });
        }

        /**
         * List executing task
         * 
         * @returns {ApiResponse}
         */
        async listExcutingTask() {
                let list = await this._access.list({ taskStatus: TaskStatus.EXCUTING });
                return this.resposneObject(list || []);
        }

        /**
         * List wait to execute task
         * 
         * @returns {ApiResponse}
         */
        async listWaitingToExecuteTasks() {
                let list = await this._access.list({ taskStatus: TaskStatus.SHEDULED });
                return this.resposneObject(list);
        }

        /**
         * Mount all controller
         * 
         * @param {Express.Application} app 
         * @returns {ApiResponse}
         */
        mount(app) {
                app.post(API.ADD, (req, resp) => this._process(req, resp, this.addTask))
                        .get(API.LIST_EXCUTEING, (req, resp) => this._process(req, resp, this.listExcutingTask))
                        .get(API.WAIT_TO_EXCUTE, (req, resp) => this._process(req, resp, this.listWaitingToExecuteTasks))
                        .get(API.STATUS, (req, resp) => this._process(req, resp, this.status))
                        .put(API.RETRY, (req, resp) => this._process(req, resp, this.retry));
        }
}

exports.TaskController = TaskController;