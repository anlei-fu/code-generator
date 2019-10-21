/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-15 09:19:07
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-21 09:18:25
 */
exports.TOKEN_TYPE = {
        keyword: "keyword",
        string: "string",
        boolean: "boolean",
        number: "number",
        operator: "operator",
        symbol: "symbol",
        comment: "comment",
        blank:"blank"
}

exports.Token = class Token {
        /**
         * 
         * @param {String} value 
         * @param {String} type 
         */
        constructor(value, type) {
                this.value = value;
                this.type = type;
        }
        /**
         * 
         */
        isString() { return this.type = TOKEN_TYPE.string }
        /**
         * 
         */
        isBoolean() { return this.type = TOKEN_TYPE.boolean; }
        /**
         * 
         */
        isNumber() { return this.type = TOKEN_TYPE.number; }
        /**
         * 
         */
        isOperator() { return this.type = TOKEN_TYPE.operator; }
        /**
         * 
         */
        toString() { return `${this.type}:${this.value}`; }
}