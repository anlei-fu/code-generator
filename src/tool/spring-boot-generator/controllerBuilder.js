/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 14:07:54
 */
exports.controllerBuilder = function controllerBuilder() {

        /**
         * Set path
         * 
         * @param {String} path 
         */
        this.path = function path(path) {
                this._path = path;
                return this;
        }

        /**
         * Set description
         * 
         * @param {String} description 
         */
        this.description = function description(description) {
                this._description = description;
                return this;
        }

        this.build = () => {
                return {
                        description: this._description,
                        path: this._path
                };
        }

}