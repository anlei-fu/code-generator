/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 14:34:14
 */
const { columnBuilder } = require("./columnBuilder");
exports.joinBuilder = function joinBuilder(table, type, joinCondition) {
        this._includes = new columnBuilder();
        this._conditions = new columnBuilder();
        this._table = table;
        this._type = type;
        this._joinCondition = joinCondition;

        /**
         * Config includes
         * 
         * @param {columnBuilder => void} configer 
         * @returns {joinBuilder}
         */
        this.includes = (configer) => {
                configer(this._includes);
                return this;
        }

        /**
         * Config conditions
         * 
         * @param {columnBuilder => void} configer 
         * @returns {joinBuilder}
         */
        this.conditions = (configer) => {
                configer(this._conditions);
                return this;
        }

        /***
         * Set alias
         * 
         * @returns {joinBuilder}
         */
        this.alias = (alias) => {
                this.alias = alias;
                this._includes.prefixAll(alias);
                this._conditions.prefixAll(alias);
                return this;
        }

        this.type=

        /**
         * @return {joinBuilder}
         */
        this.build = () => {
                this.includes.build();
                this.conditions.build();
        }

}