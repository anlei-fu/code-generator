/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-07 09:19:15
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-08 16:09:11
 */

const { OBJECT } = require("./../../libs/utils");
const { SQL_UTILS } = require("./../utils");
const { TYPE } = require("./../../libs/utils");
exports.SqlTemplate = class SqlTemplate {
        constructor(text) {
                this.segments = [];

                if (text)
                        this.segments.push(new SqlSegment(text, false));
        }

        render(option) {
                let ret = "";
                this.segments.forEach(x => {
                        ret += x.render(option);
                });

                return ret;
        }
}

/**
 * @member {String} name
 * @member {boolean} isVaribel
 * @member {boolean} replaceDirect
 */
exports.SqlSegment = class SqlSegment {
        constructor(name, isVarible, replaceDirect) {
                this.name = name;
                this.isVarible = isVarible;
                this.replaceDirect = replaceDirect;
        }

        render(option) {

                /**
                 *  1. Not varible
                 *  2. Varible needs format to sql-string
                 *  3. Just replace directly
                 */
                if (!this.isVarible) {
                        return this.name;
                } else if (!this.replaceDirect) {
                        let value = OBJECT.getValue(option, this.name);

                        if (!value)
                                throw new Error("can not find parameter:" + this.name);

                        return SQL_UTILS.getSqlString(value);
                } else {
                        let value = OBJECT.getValue(option, this.name);
                        if (!value)
                                throw new Error("can not find parameter:" + this.name);

                        return value;
                }
        }
}

/**
 * @member {[Node]} children 
 */
exports.Node = class Node {
        constructor() {
                this.children = [];
        }

        push(node) {
                this.children.push(node);
        }

        /**
         * 
         * @param {any} option
         * @returns {String} 
         */
        render(option) {
                let ret = "";
                this.children.forEach(x => {
                        ret += x.render(option);
                });
                return ret;
        }
}

/**
 * @member {String} id
 * @member {String} type
 */
exports.SqlNode = class SqlNode extends this.Node {

        /**
         * 
         * @param {String} id 
         * @param {String} type 
         */
        constructor(id, type) {
                super();
                this.id = id;
                this.type = type;
        }
}

exports.TrimNode = class TrimNode extends this.Node {

        constructor(prefix, suffix, suffixOverrides) {
                super();
                this.prefix = prefix;
                this.suffix = suffix;
                this.suffixOverrides = suffixOverrides;
        }

        /**
         * @description
         * @override
         * @param {any} option
         * @param {any} option
         */
        render(option) {

        }

}

exports.WhereNode = class WhereNode extends this.Node {

        /**
         * @description  trim where section (where and|or|else)
         * @override
         * @param {any} option 
         */
        render(option) {
                let ret = super.render(option).trim().toLowerCase();

                if (ret == "")
                        return ret;

                if (ret.startsWith("and"))
                        ret = ret.replace("and", "");

                if (ret.startsWith("or"))
                        ret = ret.replace("or", "");

                return "where" + ret;
        }
}

/**
 * @member {String} collection
 * @member {String} index
 * @member {String} seperator
 * @member {String} close
 * @member {String} open
 * @member {String} item
 */
exports.ForEachNode = class ForEachNode extends this.Node {
        constructor() {
                super();
                this.collection = "";
                this.index = "";
                this.item = "";
                this.separator = "";
                this.close = "";
                this.open = "";
        }

        /**
         * @override
         * @param {any} option 
         * @returns {String}
         */
        render(option) {
                let value = OBJECT.getValue(option, this.collection);

                if (!value)
                        throw new Error(`value(${this.collection}) can not be found!`)

                let ret = "";
                if (this.open)
                        ret += this.open;

                /**
                 *  Just array or object can passed into foreach node
                 */
                if (TYPE.isArray(value)) {
                        console.log("here");
                        value.forEach((v, i, array) => {
                                this.children.forEach(x => {
                                        ret += x.render({ item: v })
                                });

                                if (this.separator && i != array.length - 1)
                                        ret += this.separator;
                        });

                } else if (TYPE.isObject(value)) {
                        OBJECT.forEach((k, v) => {
                                let item = { key: k, value: v };
                                this.children.forEach(x => {
                                        ret += x.render(item);
                                });

                                if (this.separator && i != array.length - 1)
                                        ret += this.separator;
                        });

                } else {
                        throw new Error(`unexcepted data type passed into foreach collection(${this.collection}),data:${typeof value}`);
                }

                if (this.close)
                        ret += this.close;

                return ret;
        }
}

exports.IfNode = class IfNode extends this.Node {
        constructor() {
                super();
                this.test = "";
        }

        /**
         * @override
         * @param {any} option 
         * @returns {String}
         */
        render(option) {
                let value = OBJECT.getValue(option, this.test);
                return value ? super.render(option) : "";
        }

}

/**
 * @member {SqlTemplate} template
 */
exports.TemplateNode = class TemplateNode extends this.Node {
        constructor(text) {
                super();
                this.template;

                if (text)
                        this.template = new SqlTemplate(text);
        }

        /**
         * @override
         * @param {any} option 
         */
        render(option) {
                return this.template ? this.template.render(option) : "";
        }
}



