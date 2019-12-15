/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-10 10:05:02
 */
const { reqBuilder } = require("./reqBuilder")
exports.controllerBuilder = function () {
        this.reqs = [];

        /**
         * Set path
         * 
         * @param {String} path 
         */
        function path(path) {
                this.path = path;
                return this;
        }

        /**
         * Set description
         * 
         * @param {String} description 
         */
        function description(description) {
                this.description = description;
                return this;
        }
}