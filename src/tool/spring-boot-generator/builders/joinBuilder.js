/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 14:34:14
 */
const { columnBuilder } = require("./columnBuilder");
exports.joinBuilder = function joinBuilder() {
        this._includes = new columnBuilder();
        this._conditions = new columnBuilder();
        this._table;
        this._type;
        this._joinCondition;

        /**
         * Config includes
         * 
         * @param {columnBuilder => void} configer to build a includes conllection
         * @returns {joinBuilder}
         */
        this.includes = (configer) => {
                configer(this._includes);
                return this;
        }

        /**
         * Config conditions
         * 
         * @param {columnBuilder => void} configer to build a conditions collection
         * @returns {joinBuilder}
         */
        this.conditions = (configer) => {
                configer(this._conditions);
                return this;
        }

        /***
         * Set property "alias"
         * 
         * @returns {joinBuilder}
         */
        this.alias = (alias) => {
                this._alias = alias;
                this._includes.prefixAll(alias);
                this._conditions.prefixAll(alias);
                return this;
        }

        /**
         * Set property "type"
         * 
         * @returns {joinBuilder}
         */
        this.type = (type) => {
                this._type = type;
                return this;
        }

        /**
         * Set property "alias"
         * 
         * @returns {joinBuilder}
         */
        this.table = (table) => {
                this._table = table;
                return this;
        }

        /**
         * Set property "joinCondition"
         * 
         * @returns {joinBuilder}
         */
        this.joinCondition = (joinCondition) => {
                this._joinCondition = joinCondition;
                return this;
        }

        /**
         * @return {joinBuilder}
         */
        this.build = () => {

                if (!this._table || !this._joinCondition)
                        throw new Error(`unexcepted config`);

                if (this._alias) {
                        this._includes.prefixAll(this._alias);
                        this._conditions.prefixAll(this._alias);
                }

                this.table.alias = this._alias;

                return {
                        includes: this._includes.build(),
                        conditions: this._conditions.build(),
                        joinCondition: this._joinCondition,
                        type: this._type,
                        table: this._table
                };
        }

}