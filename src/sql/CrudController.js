const { Controller } = require("./../http")
const { AccessBase } = require("./AcccessBase")

class CrudController extends Controller {
        constructor(accessName, apiPrefix) {
                super(`${accessName}-crud-controller`);
                this._accessName = accessName;
                this._apiPrefix = apiPrefix;
                this._access;
        }

        /**
         * 
         * @param {import("./CrudServiceContext").CrudServiceContext} context 
         */
        init(context) {
                this._access = context.accesses[this._accessName];
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