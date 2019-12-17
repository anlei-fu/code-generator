/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:41:16
 */
exports.reqBuilder = function reqBuilder() {
        this._excludes = [];
        this._noValidated = true;
        this._validates = [];

        /**
         * Determine  is create new entity
         * 
         * @returns {reqBuilder}
         */
        this.doCreate = function doCreate() {
                this._doCreate = true;
                return this;
        }

        /**
         * Remove columns
         * 
         * @param {String|Object | [String|Object]} items 
         * @returns {reqBuilder}
         */
        this.excludes = function excludes(items) {
                this._excludes = items;
                return this;
        }

        /**
         * Set type of fields
         * 
         * @param {String} type
         * @returns {reqBuilder}
         */
        this.type = function type(type) {
                this._type = type;
                return this;
        }

        /**
         * Set name
         * 
         * @param {String} name 
         * @returns {reqBuilder}
         */
        this.name = (name) => {
                this._name = name;
                return this;
        }

        /**
         * Set description
         * 
         * @param {String} description 
         * @returns {reqBuilder}
         */
        this.description = (description) => {
                this._description = description;
                return this;

        }

        /**
         * Mark as no need validate-operation
         * 
         * @returns {readonly}
         */
        this.noValidated = () => {
                this._novalidated = false;
                return this;
        }

        /**
         * Set from property
         * 
         * @param {String} from 
         * @returns {reqBuilder}
         */
        this.from = (from) => {
                this._from = from;
                return this;
        }

        this.build = function build() {
                return {
                        doCreate: this._doCreate,
                        from: this._from,
                        noValidated: this._novalidated,
                        description: this._description,
                        name: this._name,
                        type: this._type,
                        excludes: this._excludes,
                        validates:this._validates,
                }
        }
}