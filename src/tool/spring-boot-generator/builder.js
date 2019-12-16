/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-10 11:51:46
 */
const { columnBuilder } = require("./columnBuilder");
const { controllerBuilder } = require("./controllerBuilder");
const { joinBuilder } = require("./joinBuilder")

exports.builder = function (type,id) {
        this.type=type;
        this.id=id;
        this.includes = new columnBuilder();
        this.conditions = new columnBuilder();
        this.controller = new controllerBuilder();
        this.joins = [];

        /**
         * Add join
         * 
         * @param {(any) => void} configer 
         * @returns {builder}
         */
        function join(configer) {
                let builder = new joinBuilder();
                configer(builder);
                this.joins.push(builder);
                return this;
        }

        /**
         * Config include
         * 
         * @param {(any) => void} configer 
         * @returns {builder}
         */
        function includes(configer) {
                configer(this.includes);
                return this;
        }

        /**
         * Config condition
         * 
         * @param {(any) => void} configer 
         * @returns {builder}
         */
        function conditions(configer) {
                configer(this.conditions);
                return this;
        }

        /**
         * Do not config controller
         * 
         * @returns {builder}
         */
        function noController() {
                this.noController = true;
                return this;
        }

        /**
         * Config service
         * 
         * @returns {builder}
         */
        function noService() {
                this.noService = true;
                return this;
        }

        /**
         * Config contrpller
         * 
         * @param {controllerBuilder} configer 
         * @returns {builder}
         */
        function controller(configer) {
                configer(this.controller);
                return this;
        }

        function build() {
                if (this.joins) {
                        this.joins.forEach(join => {
                                join.build();
                        })
                }

                if (this.conditions)
                        this.conditions.build();

                if (this.includes)
                        this.includes.build();
        }
}