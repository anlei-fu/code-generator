
const { TYPE } = require("./../../libs/utils");
const { NamingStrategy } = require("./../../libs/naming-stratey");

/**
 * 
 * @param {[]} item 
 */
function select(item, prefix = "", ident = "") {
        let buffer = "\tselect\t";
        if (TYPE.isString(item)) {
                return `${buffer}${item}\r\n`;
        } else if (TYPE.isArray(item)) {
                item.forEach((x, i, array) => {
                        if (i != array.length - 1) {
                                if (TYPE.isObject(x)) {
                                        let content = "";
                                        if (x.prefix)
                                                content += `${x.prefix} `;

                                        if (x.alias)
                                                content += `as ${x.alias},\r\n`;

                                        buffer += content;
                                } else {
                                        buffer += `${ident}\t\t${x},\r\n`;
                                }
                        }
                })
        }
}

/**
 * 
 * @param {[any]} items 
 * @param {String} ident 
 * @param {boolean} lastComma 
 * @param {boolean} newLine 
 * @param {String} prefix 
 */
function buildSelectItems(items, ident, lastComma = true, prefix = "") {

}

/**
 * 
 * @param {any} item 
 * @param {String} ident 
 * @param {boolean} comma 
 * @param {boolean} newLine 
 * @param {String} prefix 
 */
function buildSelectItem(item, ident, comma = true, newLine = true, prefix = "") {
        if (TYPE.isObject(item)) {

        } else {

        }
}

function equel(option) {
        if (TYPE.isString) {
                return `${NamingStrategy.toHungary(option)}=#{${option}}\r\n`;
        } else if (TYPE.isObject(option)) {
                let content = "";
                if (option.prefix) {
                        content += option.prefix + ".";
                }

                if (!option.name)
                        throw new Error(`required property name is not found in ${JSON.stringify(option)}`);

                return `${content}${NamingStrategy.toHungary(option.name)}=#{${option.name}}\r\n`;
        }

        throw new Error(`unexcepted type ${typeof option}`);
}
/**
 * 
 * @param {String|{name:String,prefix:String}} option 
 */
function from(option) {
        if (TYPE.isString) {
                return `from ${NamingStrategy.toHungary(option)}\r\n`;
        } else if (TYPE.isObject(option)) {
                let content = "";
                if (option.alias) {
                        content +=option.alias;
                }

                if (!option.name)
                        throw new Error(`required property name is not found in ${JSON.stringify(option)}`);

                return `${NamingStrategy.toHungary(option.name)} ${content}\r\n`;
        }

        throw new Error(`unexcepted type ${typeof option}`);
}
/**
 * 
 * @param {String} table 
 * @returns {String}
 */
function update(table,columns) {
     return `update ${NamingStrategy.toHungary(table)}\r\n`;
}

/**
 * 
 * @param {String} table 
 * @param {[String|{name:String,required:boolean}]} columns 
 */
function insert(table,columns) {

}

function _delete(table) {

}

function asign(option) {

}

function innerJoin(table, option) {

}

function leftJoin(table, option) {

}

function rightJoin(table, option) {

}

function fullJoin(table, option) {

}

function joinCore(table, option) {

}

function where(table, option) {

}

function forEach(option, suppliers) {

}

function _if(test, suplliers) {

}

function include(refid) {

}

function groupBy(items) {

}
function orderBy(items) {

}

