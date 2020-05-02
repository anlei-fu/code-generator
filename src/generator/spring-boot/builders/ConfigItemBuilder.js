/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 16:32:32
 */
const { ColumnBuilder } = require("./ColumnBuilder");
const { RequestHandlerBuilder } = require("./RequestHandlerBuilder");
const { JoinBuilder } = require("./JoinBuilder");
const { ReqBuilder } = require("./ReqBuilder");
const { RespBuilder } = require("./RespBuilder");
const { ParamBuilder } = require("./ParamBuilder");

class ConfigItemBuilder {
        constructor () {
                this._type;
                this._id;
                this._includes = new ColumnBuilder();
                this._conditions = new ColumnBuilder();
                this._requestHandler = new RequestHandlerBuilder();
                this.reqs = [];
                this._resp = new RespBuilder();
                this._params = new ParamBuilder();
                this._alias;
                this.joins = [];
        }

        /**
         * Set property "id"
         * 
         * @param {String} id
         * @returns {ConfigItemBuilder}
         */
        id(id) {
                this._id = id;
                return this;
        }

        /**
         * Set property "id"
         * 
         * @param {String} type
         * @returns {ConfigItemBuilder}
         */
        type(type) {
                this._type = type;
                return this;
        }

        /**
         * Set property "alias"
         * 
         * @param {String} alias
         * @returns {ConfigItemBuilder}
         */
        alias(alias) {
                this._alias = alias;
                return this;
        }

        /**
         * Add req item
         * 
         * @param {(ReqBuilder) => void} configer to config new req item
         * @returns {ConfigItemBuilder}
         */
        req(configer) {
                let builder = new ReqBuilder();
                configer(builder);
                this.reqs.push(builder);
                return this;
        }

        /**
         * Config resp
         * 
         * @param {(RespBuilder) => void} configer to config resp
         * @returns {ConfigItemBuilder}
         */
        resp(configer) {
                configer(this._resp);
                return this;
        }

        /**
         * Config params
         * 
         * @param {(ParamBuilder) => void} configer to config params
         * @returns {ConfigItemBuilder}
         */
        params(configer) {
                configer(this._params);
                return this;
        }

        /**
         * Add join item
         * 
         * @param {(JoinBuilder) => void} configer to config new join item
         * @returns {ConfigItemBuilder}
         */
        join(configer) {
                let builder = new JoinBuilder();
                configer(builder);
                this.joins.push(builder);
                return this;
        }

        /**
         * Config includes
         * 
         * @param {(ColumnBuilder) => void} configer  to build a include columns collection
         * @returns {ConfigItemBuilder}
         */
        includes(configer) {
                configer(this._includes);
                return this;
        }

        /**
         * Config condition
         * 
         * @param {(ColumnBuilder) => void} configer  to build a condition columns collection
         * @returns {ConfigItemBuilder}
         */
        conditions(configer) {
                configer(this._conditions);
                return this;
        }

        /**
         * Set do not generate controller file
         * 
         * @returns {ConfigItemBuilder}
         */
        noController() {
                this._noController = true;
                return this;
        }

        /**
         * Set do not generate service and service-impl file
         * 
         * @returns {ConfigItemBuilder}
         */
        noService() {
                this._noService = true;
                return this;
        }

        /**
         * Config controller
         * 
         * @param {(RequestHandlerBuilder) => void} configer  to config controller
         * @returns {ConfigItemBuilder}
         */
        request(configer) {
                configer(this._requestHandler);
                return this;
        }

        /**
         * Build a generator config item
         */
        build() {
                let joins = [];
                this.joins.forEach(join => {
                        joins.push(join.build());
                });

                let reqs = [];
                this.reqs.forEach(req => {
                        reqs.push(req.build());
                });

                if (this._alias) {
                        this._includes.prefixAll(this._alias);
                        this._conditions.prefixAll(this._alias);
                }

                return {
                        id: this._id,
                        type: this._type,
                        reqs: reqs,
                        resp: this._resp.build(),
                        params: this._params.build(),
                        controller: this._requestHandler.build(),
                        includes: this._includes.build(),
                        conditions: this._conditions.build(),
                        noController: this._noController,
                        noService: this._noService,
                        joins: joins,
                        alias: this._alias
                };
        }
}

exports.ConfigItemBuilder = ConfigItemBuilder;