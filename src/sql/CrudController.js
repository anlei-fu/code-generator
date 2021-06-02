const { Controller } = require("./../http")
const { AccessBase } = require("./AcccessBase")

class CrudController extends Controller {
        constructor (table, pk, apiPrefix) {
                this._access = new AccessBase(table, table, { idField: pk });
                this._apiPrefix = apiPrefix;
        }

        init(context) {
                this._access.init(context);
        }

        async page({ query }) {
                let page = await this._access.page(query, query);
                return this.resposneObject(page);
        }

        async all() {
                let all = await this._access.getAll();
                return this.resposneObject(all);
        }

        async getById({ query }) {
                let item = await this._access.getById(query.id);
                return this.resposneObject(item);
        }

        async list({ query }) {
                let item = await this._access.list(query);
                return this.resposneObject(item);
        }

        async add({ body }) {
                let result = await this._access.add(body);
                return this.responseBoolean(result);
        }

        async update({ body }) {
                let result = await this._access.updateById(body);
                return this.responseBoolean(result);
        }

        async delete({ query }) {
                let result = await this._access.deleteById(query.id);
                return this.responseBoolean(result);
        }

        /**
         * 
         * @param {import("express").Express} app 
         */
        mount(app) {
                app.post(`${this.apiPrefix}`, (req, resp) => this._process(req, resp, this.add))
                        .put(`${this.apiPrefix}`, (req, resp) => this._process(req, resp, this.update))
                        .delete(`${this.apiPrefix}`, (req, resp) => this._process(req, resp, this.delete))
                        .get(`${this.apiPrefix}/page`, (req, resp) => this._process(req, resp, this.page))
                        .get(`${this.apiPrefix}/list`, (req, resp) => this._process(req, resp, this.list))
                        .get(`${this.apiPrefix}/get-by-id`, (req, resp) => this._process(req, resp, this.getById))
                        .get(`${this.apiPrefix}`, (req, resp) => this._process(req, resp, this.all))
        }
}

exports.CrudController = CrudController;