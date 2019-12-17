/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 16:31:46
 */
exports.paramBuilder = function paramBuilder() {

        this.defaultValues = new Map();

        /**
         * Determine is create params entity
         * 
         * @returns {paramBuilder}
         */
        this.doCreate = function doCreate() {
                this._doCreate = true;
                return this;
        }

        /**
         * 
         * @param {String} description
         * @returns {paramBuilder}
         */
        this.description = function description(description) {
                this._description = description;
                return this;
        }

        /**
         * @param {String} name
         * @returns {paramBuilder}
         */
        this.name = function name(name) {
                this._name = name;
                return this;
        }

        /**
         * Add default value item
         * 
         * @param {String} key 
         * @param {String} value 
         * @returns {paramBuilder}
         */
        this.defaultValue = function defaultValue(key, value) {
                this._defaultValues.set(key, value);
                return this;
        }

        this.build=function build(){
                return {
                        name:this._name,
                        description:this._description,
                        doCreate:this._doCreate,
                        defaultValues:this._defaultValues
                }
        }
}