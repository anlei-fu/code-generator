/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 16:32:32
 */
const { ColumnBuilder } = require("./columnBuilder");
const { controllerBuilder } = require("./controllerBuilder");
const { joinBuilder } = require("./joinBuilder")
const { ReqBuilder } = require("./reqBuilder")
const { respBuilder } = require("./respBuilder")
const { paramBuilder } = require("./paramBuilder")

exports.builder = function builder() {
        this._type;
        this._id;
        this._includes = new ColumnBuilder();
        this._conditions = new ColumnBuilder();
        this._controller = new controllerBuilder();
        this.reqs = [];
        this._resp = new respBuilder();
        this._params = new paramBuilder();
        this._alias;
        this.joins = [];

        /**
         * Set property "id"
         * 
         * @returns {builder}
         */
        this.id = (id) => {
                this._id = id;
                return this;
        }

        /**
         * Set property "id"
         * 
         * @returns {builder}
         */
        this.type = (type) => {
                this._type = type;
                return this;
        }

        /**
         * Set property "alias"
         * 
         * @returns {builder}
         */
        this.alias = (alias) => {
                this._alias = alias;
                return this;
        }

        /**
         * Add req item
         * 
         * @param {(reqBuilder) => void} configer to config new req item
         * @returns {builder}
         */
        this.req = (configer) => {
                let builder = new ReqBuilder();
                configer(builder);
                this.reqs.push(builder);
                return this;
        }

        /**
         * Config resp
         * 
         * @param {(respBuilder) => void} config to config resp
         * @returns {builder}
         */
        this.resp = (configer) => {
                configer(this._resp);
                return this;
        }

        /**
         * Config params
         * 
         * @param {(paramBuilder) => void} configer to config params
         * @returns {builder}
         */
        this.params = (configer) => {
                configer(this._params);
                return this;
        }

        /**
         * Add join item
         * 
         * @param {(joinBuilder) => void} configer to config new join item
         * @returns {builder}
         */
        this.join = (configer) => {
                let builder = new joinBuilder();
                configer(builder);
                this.joins.push(builder);
                return this;
        }

        /**
         * Config includes
         * 
         * @param {(columnBuilder) => void} configer  to build a includes collection
         * @returns {builder}
         */
        this.includes = (configer) => {
                configer(this._includes);
                return this;
        }

        /**
         * Config condition
         * 
         * @param {(columnBuilder) => void} configer  to build a conditions collection
         * @returns {builder}
         */
        this.conditions = (configer) => {
                configer(this._conditions);
                return this;
        }

        /**
         * Set do not generate controller file
         * 
         * @returns {builder}
         */
        this.noController = () => {
                this._noController = true;
                return this;
        }

        /**
         * Set do not generate service and service-impl file
         * 
         * @returns {builder}
         */
        this.noService = () => {
                this._noService = true;
                return this;
        }

        /**
         * Config controller
         * 
         * @param {(controllerBuilder) => void} configer  to config controller
         * @returns {builder}
         */
        this.controller = (configer) => {
                configer(this._controller);
                return this;
        }

        /**
         * Build a generator config item
         */
        this.build = () => {
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
                        controller: this._controller.build(),
                        includes: this._includes.build(),
                        conditions: this._conditions.build(),
                        noController: this._noController,
                        noService: this._noService,
                        joins: joins,
                        alias: this._alias
                };
        }
}