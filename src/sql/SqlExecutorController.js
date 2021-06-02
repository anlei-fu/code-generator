const { Controller } = require("./../http")
const { AccessBase } = require("./AcccessBase")

class SqlExecutorController extends Controller {
        constructor (table, pk) {
                this._access = new AccessBase(table, table, { idField: pk });
        }

        init(context) {
                this._access.init(context);
        }

        async execute({ query }) {
                return await this._access.query(query.sql);
        }

        /**
         * 
         * @param {import("express").Express} app 
         */
        mount(app) {
                app.post(`/sql/execute`, (req, resp) => this._process(req, resp, this.execute));
        }
}

exports.SqlExecutorController = SqlExecutorController;