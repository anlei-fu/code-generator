/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-15 09:19:07
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-15 14:30:10
 */
exports.TOKEN_TYPE= {
        keyword: "keyword",
        string: "string",
        boolean: "boolean",
        number: "number",
        operator: "operator",
        symbol:"symbol",
        comment:"comment",
        blank
}

exports.Token=class Token {
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
        isString = () => this.type = TOKEN_TYPE.string;
        /**
         * 
         */
        isBoolean = () => this.type = TOKEN_TYPE.boolean;
        /**
         * 
         */
        isNumber = () => this.type = TOKEN_TYPE.number;
        /**
         * 
         */
        isOperator = () => this.type = TOKEN_TYPE.operator;
        /**
         * 
         */
        toString = () => `${this.type}:${this.value}`;
}