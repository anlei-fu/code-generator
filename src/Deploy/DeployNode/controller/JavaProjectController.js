const { Controller } = require("../../common/Controller");
const { JavaProjectAccess } = require("./../db/JavaProjectDbAccess");

const Api = {
        GET_BY_ID: "/app/:id",
        LIST: "/app/list",
        STATUS: "/app/status/:id"
};
exports.JavaProjectController = class JavaProjectController extends Controller {
        /**
         * 
         * @param {JavaProjectAccess} access 
         */
        constructor (access) {
                super("JavaProjectController");
                this._access = access;
        }

        /**
         * Get project
         * 
         * @param {*} param0 
         * @returns {ApiResponse}
         */
        async getById({ params }) {
                let item = await this._access.getById({ id: params.id });
                if (!item)
                        return this.fail("", 1);

                return this.resposneObject(item);
        }

        /**
         * Get list
         * 
         * @param {*} param0 
         * @returns {ApiResponse}
         */
        async list({ query }) {
                let list = await this._access.list({ status: query.status, appType: query.appType });
                return this.resposneObject(list);
        }

        /**
         * GetStatus
         * 
         * @param {*} param0 
         * @returns {ApiResponse}
         */
        async status({ params }) {
                let item = await this._access.getById({ id: params.id });
                if (!item)
                        return this.fail("", 1);

                return this.resposneObject({ status: item.status });
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