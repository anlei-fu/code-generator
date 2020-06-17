const { Controller } = require("../../common/Controller");
const { JavaProjectAccess } = require("./../db/JavaProjectDbAccess");
const { validateUtils } = require("./../../common/utils/validate-utils");
const { NodeContext } = require("./../../common/NodeContext");

const Api = {
        GET_BY_ID: "/app/:id",
        LIST: "/app/list",
        STATUS: "/app/status/:id"
};

class AppController extends Controller {
        /**
         * 
         * @param {JavaProjectAccess} access 
         */
        constructor () {
                super("AppController");
        }

        /**
         * Init
         * 
         * @param {NodeContext} context 
         */
        init(context) {
                validateUtils.requireNotNull(context.accesses, "AppAccess");
                this._access = context.accesses.AppAccess;
        }

        /**
         * Get project
         * 
         * @param {*} param0 
         * @returns {ApiResponse<Task>}
         */
        async getById({ params }) {
                validateUtils.requireNumber(params, "id");
                let item = await this._access.getById({ id: params.id });
                return item ? this.resposneObject(item) : this.noDataFound();
        }

        /**
         * Get list
         * 
         * @param {*} param0 
         * @returns {ApiResponse}
         */
        async list({ query }) {
                if (query.status)
                        validateUtils.requireNumber(query, "status");

                if (query.appType)
                        validateUtils.requireNumber(query, "appType");

                let list = await this._access.list({ status: query.status, appType: query.appType });
                return this.resposneObject(list);
        }

        /**
         * GetStatus
         * 
         * @param {*} param0 
         * @returns {ApiResponse<{status:number}>}
         */
        async status({ params }) {
                validateUtils.requireNumber(params, "id");
                let item = await this._access.getById({ id: params.id });
                return item ? this.resposneObject({ status: item.status }) : this.noDataFound();
        }

        /**
         * To mount requets handler
         * 
         * @override
         */
        mount(app) {
                app.get(Api.GET_BY_ID, (req, resp) => this._process(req, resp, this.getById))
                        .get(Api.LIST, (req, resp) => this._process(req, resp, this.list))
                        .get(Api.STATUS, (req, resp) => this._process(req, resp, this.status))
        }
}

exports.AppController = AppController;