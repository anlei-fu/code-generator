/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 16:32:32
 */
const { columnBuilder } = require("./columnBuilder");
const { controllerBuilder } = require("./controllerBuilder");
const { joinBuilder } = require("./joinBuilder")
const { reqBuilder } = require("./reqBuilder")
const { respBuilder } = require("./respBuilder")
const { paramBuilder } = require("./paramBuilder")

exports.builder = function builder(type, id) {
        this.type = type;
        this.id = id;
        this._includes = new columnBuilder();
        this._conditions = new columnBuilder();
        this._controller = new controllerBuilder();
        this.reqs = [];
        this._resp = new respBuilder();
        this._params = new paramBuilder();
        this.joins = [];

        /**
         * Config req
         * 
         * @param { (reqBuilder) => void} configer
         * @returns {builder}
         */
        this.req = function req(configer) {
                let builder = new reqBuilder();
                configer(builder);
                this.reqs.push(builder);
                return this;
        }

        /**
         * Config resp
         * 
         * @param {(respBuilder)=>void}
         * @returns {builder}
         */
        this.resp = function resp(configer) {
                configer(this._resp);
                return this;
        }

        /**
         * Config params
         * 
         * @param {(paramBuilder)=>void}
         * @returns {builder}
         */
        this.params = function params(configer) {
                configer(this._params);
                return this;
        }

        /**
         * Add join
         * 
         * @param { (joinBuilder) => void} configer 
         * @returns {builder}
         */
        this.join = function join(configer) {
                let builder = new joinBuilder();
                configer(builder);
                this.joins.push(builder);
                return this;
        }

        /**
         * Config include
         * 
         * @param {(columnBuilder) => void} configer 
         * @returns {builder}
         */
        this.includes = function include(configer) {
                configer(this._includes);
                return this;
        }

        /**
         * Config condition
         * 
         * @param {(columnBuilder) => void} configer 
         * @returns {builder}
         */
        this.conditions = function conditions(configer) {
                configer(this._conditions);
                return this;
        }

        /**
         * Do not config controller
         * 
         * @returns {builder}
         */
        this.noController = function noController() {
                this.noController = true;
                return this;
        }

        /**
         * Config service
         * 
         * @returns {builder}
         */
        this.noService = function noService() {
                this.noService = true;
                return this;
        }

        /**
         * Config controller
         * 
         * @param {(controllerBuilder)=>void} configer 
         * @returns {builder}
         */
        this.controller = function controller(configer) {
                configer(this._controller);
                return this;
        }

        this.build = function build() {
                let joins = [];
                this.joins.forEach(x => {
                        joins.push(x.build());
                });

                let reqs = [];
                this.reqs.forEach(x => {
                        reqs.push(x.build());
                });


                return {
                        id: this.id,
                        type: this.type,
                        reqs: reqs,
                        resp: this._resp.build(),
                        params: this._params.build(),
                        controller: this._controller.build(),
                        includes: this._includes.build(),
                        conditions: this._conditions.build(),
                        noController: this.noController,
                        noService: this.noService,
                        joins: joins
                };
        }
}