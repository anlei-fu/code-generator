const { Controller } = require("../../common/Controller");
const { TaskStatus } = require("./../../common/po/constant/TaskStatus");
const { validateUtils } = require("./../../common/utils/validate-utils");
const {NodeContext} =require("./../../common/NodeContext");

const API = {
        ADD: "/task/add",
        STATUS: "/task/status/:taskId",
        LIST_EXCUTEING: "/task/list/executing",
        WAIT_TO_EXCUTE: "/task/list/wait",
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
                validateUtils.requireNumber(params, "id");
                let item = await this._access.getById(params.id);
                if (!item)
                        return this.noDataFound();

                return this.resposneObject({ status: item.status });
        }

        /**
         * List executing task
         * 
         * @returns {ApiResponse}
         */
        async listExcutingTask() {
                let list = await this._access.list({ status: TaskStatus.EXCUTING });
                return this.resposneObject(list || []);
        }

        /**
         * List wait to execute task
         * 
         * @returns {ApiResponse}
         */
        async listWaitingToExecuteTasks() {
                let list = await this._access.list({ status: TaskStatus.SHEDULED });
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
                        .get(API.STATUS, (req, resp) => this._process(req, resp, this.status));
        }
}

exports.TaskController = TaskController;