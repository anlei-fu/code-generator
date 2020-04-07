/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 16:32:32
 */
const { ColumnBuilder } = require("./columnBuilder");
const { RequestHandlerBuilder } = require("./requestHandlerBuilder");
const { JoinBuilder } = require("./joinBuilder");
const { ReqBuilder } = require("./reqBuilder");
const { RespBuilder } = require("./respBuilder");
const { ParamBuilder } = require("./paramBuilder");

class Builder {
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
         * @returns {Builder}
         */
        id(id) {
                this._id = id;
                return this;
        }

        /**
         * Set property "id"
         * 
         * @param {String} type
         * @returns {Builder}
         */
        type(type) {
                this._type = type;
                return this;
        }

        /**
         * Set property "alias"
         * 
         * @param {String} alias
         * @returns {Builder}
         */
        alias(alias) {
                this._alias = alias;
                return this;
        }

        /**
         * Add req item
         * 
         * @param {(ReqBuilder) => void} configer to config new req item
         * @returns {Builder}
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
         * @returns {Builder}
         */
        resp(configer) {
                configer(this._resp);
                return this;
        }

        /**
         * Config params
         * 
         * @param {(ParamBuilder) => void} configer to config params
         * @returns {Builder}
         */
        params(configer) {
                configer(this._params);
                return this;
        }

        /**
         * Add join item
         * 
         * @param {(JoinBuilder) => void} configer to config new join item
         * @returns {Builder}
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
         * @returns {Builder}
         */
        includes(configer) {
                configer(this._includes);
                return this;
        }

        /**
         * Config condition
         * 
         * @param {(ColumnBuilder) => void} configer  to build a condition columns collection
         * @returns {Builder}
         */
        conditions(configer) {
                configer(this._conditions);
                return this;
        }

        /**
         * Set do not generate controller file
         * 
         * @returns {Builder}
         */
        noController() {
                this._noController = true;
                return this;
        }

        /**
         * Set do not generate service and service-impl file
         * 
         * @returns {Builder}
         */
        noService() {
                this._noService = true;
                return this;
        }

        /**
         * Config controller
         * 
         * @param {(RequestHandlerBuilder) => void} configer  to config controller
         * @returns {Builder}
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
                this.joins.forEach(x => {
                        joins.push(x.build());
                });

                let reqs = [];
                this.reqs.forEach(x => {
                        reqs.push(x.build());
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

exports.Builder = Builder;