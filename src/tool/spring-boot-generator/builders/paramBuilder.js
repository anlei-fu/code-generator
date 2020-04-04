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
        this.doCreate = () => {
                this._doCreate = true;
                return this;
        }

        /**
         * 
         * @param {String} description
         * @returns {paramBuilder}
         */
        this.description = (description) => {
                this._description = description;
                return this;
        }

        /**
         * @param {String} name
         * @returns {paramBuilder}
         */
        this.name = (name) => {
                this._name = name;
                return this;
        }

        /**
         * Add default value item
         * 
         * @param {String} key 
         * @param {String} expression 
         * @returns {paramBuilder}
         */
        this.defaultValue = (key, expression) => {
                this._defaultValues.set(key, expression);
                return this;
        }

        /**
         * Internal call
         */
        this.build = () => {
                return {
                        name: this._name,
                        description: this._description,
                        doCreate: this._doCreate,
                        defaultValues: this._defaultValues
                }
        }
}