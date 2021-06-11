const { Controller } = require("./../http")

class CrudController extends Controller {
        constructor (accessName, apiPrefix) {
                super(`${accessName}-crud-controller`);
                this._accessName = accessName;
                this._apiPrefix = apiPrefix;
                this._access;
        }

        /**
         * Set table access
         * 
         * @param {import("./CrudServiceContext").CrudServiceContext} context 
         */
        init(context) {
                this._access = context.accesses[this._accessName];
        }

        /**
         * Get page result
         * 
         * @param {} param0 
         */
        async page({ query }) {
                let page = await this._access.page(query);
                return this.resposneObject(page);
        }

        async all() {
                let all = await this._access.getAll();
                return this.resposneObject(all);
        }

        async getById({ params }) {
                let item = await this._access.getById(params.id);
                return this.resposneObject(item);
        }

        async list({ query }) {
                let ls = await this._access.list(query);
                return this.resposneObject(ls);
        }

        async add({ body }) {
                let result = await this._access.add(body);
                return this.responseBoolean(result);
        }

        async update({ body }) {
                let result = await this._access.updateById(body);
                return this.responseBoolean(result);
        }

        async delete({ params}) {
                let result = await this._access.deleteById(params.id);
                return this.responseBoolean(result);
        }

        /**
         * 
         * @param {import("express").Express} app 
         */
        mount(app) {
                app.post(`${this._apiPrefix}`, (req, resp) => this._process(req, resp, this.add))
                        .put(`${this._apiPrefix}`, (req, resp) => this._process(req, resp, this.update))
                        .delete(`${this._apiPrefix}/:id`, (req, resp) => this._process(req, resp, this.delete))
                        .get(`${this._apiPrefix}/page`, (req, resp) => this._process(req, resp, this.page))
                        .get(`${this._apiPrefix}/list`, (req, resp) => this._process(req, resp, this.list))
                        .get(`${this._apiPrefix}/:id`, (req, resp) => this._process(req, resp, this.getById))
                        .get(`${this._apiPrefix}`, (req, resp) => this._process(req, resp, this.all))
        }
}

exports.CrudController = CrudController;