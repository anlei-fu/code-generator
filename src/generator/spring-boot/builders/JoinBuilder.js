/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 14:34:14
 */
const { ColumnBuilder } = require("./ColumnBuilder");
const {OBJECT} =require("../../../libs/utils")

class JoinBuilder {
        constructor () {
                this._includes = new ColumnBuilder();
                this._conditions = new ColumnBuilder();
                this._table;
                this._type;
                this._joinCondition;
        }

        /**
         * Config includes
         * 
         * @param {ColumnBuilder => void} configer to build a includes conllection
         * @returns {JoinBuilder}
         */
        includes(configer) {
                configer(this._includes);
                return this;
        }

        /**
         * Config conditions
         * 
         * @param {ColumnBuilder => void} configer to build a conditions collection
         * @returns {JoinBuilder}
         */
        conditions(configer) {
                configer(this._conditions);
                return this;
        }

        /***
         * Set property "alias"
         * 
         * @param {String} alias
         * @returns {JoinBuilder}
         */
        alias(alias) {
                this._alias = alias;
                this._includes.prefixAll(alias);
                this._conditions.prefixAll(alias);
                return this;
        }

        /**
         * Set property "type"
         * 
         * @param {String} type
         * @returns {JoinBuilder}
         */
        type(type) {
                this._type = type;
                return this;
        }

        /**
         * Set property "alias"
         * 
         * @param {Table} table
         * @returns {JoinBuilder}
         */
        table(table) {
                this._table = OBJECT.clone(table);
                return this;
        }

        /**
         * Set property "joinCondition"
         * 
         * @returns {JoinBuilder}
         */
        joinCondition(joinCondition) {
                this._joinCondition = joinCondition;
                return this;
        }

        /**
         * @return {JoinBuilder}
         */
        build() {

                if (!this._table || !this._joinCondition)
                        throw new Error(`unexcepted config`);

                this._table.alias = this._alias;

                return {
                        includes: this._includes.build(),
                        conditions: this._conditions.build(),
                        joinCondition: this._joinCondition,
                        type: this._type,
                        table: this._table
                };
        }
}

exports.JoinBuilder=JoinBuilder;