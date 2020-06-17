const { Controller } = require("../../common/Controller");
const { TaskAccess } = require("./../db/TaskAccess");

const API = {
        ADD: "/task/add",
        STATUS: "/task/status/:taskId",
        LIST_EXCUTEING: "/task/list/executing",
        WAIT_TO_EXCUTE: "/task/list/wait",
};

exports.TaskController = class TaskController extends Controller {

        /**
         * 
         * @param {TaskAccess} access 
         */
        constructor (access) {
                this._access = access;
        }

        /**
         * Add task
         * 
         * @param {*} param0 
         * @returns {ApiResponse}
         */
        async addTask({ body }) {
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
                let item = await this._access.getById(params.id);
                if (!item)
                        return this.fail("No data found", 1);

                return this.resposneObject({ status: item.status });
        }

        /**
         * List executing task
         * 
         * @returns {ApiResponse}
         */
        async listExcutingTask() {
                let list = await this._access.list({ status: 1 });
                return this.resposneObject(list || []);
        }

        /**
         * List wait to execute task
         * 
         * @returns {ApiResponse}
         */
        async listWaitingToExecuteTasks() {
                let list = await this._access.list({ status: 1 });
                return this.resposneObject(list || []);
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