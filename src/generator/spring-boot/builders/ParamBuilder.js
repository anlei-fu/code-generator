/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 16:31:46
 */
class ParamBuilder {

        constructor () {
                this.defaultValues = new Map();
        }

        /**
         * Determine is create params entity
         * 
         * @returns {ParamBuilder}
         */
        doCreate() {
                this._doCreate = true;
                return this;
        }

        /**
         * Set description of param entity
         * 
         * @param {String} description
         * @returns {ParamBuilder}
         */
        description(description) {
                this._description = description;
                return this;
        }

        /**
         * Set name of param
         * 
         * @param {String} name
         * @returns {ParamBuilder}
         */
        name(name) {
                this._name = name;
                return this;
        }

        /**
         * Add default value item
         * 
         * @param {String} key 
         * @param {String} expression 
         * @returns {ParamBuilder}
         */
        defaultValue(key, expression) {
                this._defaultValues.set(key, expression);
                return this;
        }

        /**
         * Internal call
         */
        build() {
                return {
                        name: this._name,
                        description: this._description,
                        doCreate: this._doCreate,
                        defaultValues: this._defaultValues
                }
        }
}

exports.ParamBuilder = ParamBuilder