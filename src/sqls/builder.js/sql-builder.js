
const { TYPE } = require("./../../libs/utils");
const { NamingStrategy } = require("./../../libs/naming-stratey");
const { TemplateNode, SqlTemplate, SqlSegment, IfNode, WhereNode, ForEachNode, Node, TrimNode } = require("./../template/sql-template")




/*--------------------------------------------------------------------main-------------------------------------------------------*/

/**
 * 
 * @param {String} table 
 * @param {[{name:String,type:SqlType}]} columns 
 */
function insert(table, columns) {
        let prefix = new TemplateNode(`insert into ${table}\r\n`);
        let trim = new TrimNode("(", ")", ",");

        columns.forEach(x => {
                if (x.nullable) {
                        trim.push(ifName(x));
                } else {
                        trim.push(name(x));
                }
        });

        let suffix = new TemplateNode(")");

        return [prefix, trim, suffix];
}



/**
 * 
 */
function batchInsert(table, columns) {

}

/**
 * 
 * @param {*} table 
 * @param {*} conditions 
 */
function _delete(table, conditions) {

}


/**
 * 
 * @param {*} table 
 * @param {*} columns 
 * @param {*} conditions 
 */
function update(table, columns, conditions) {
        return `update ${NamingStrategy.toHungary(table)}\r\n`;
}


/**
 * 
 * @param {*} table 
 * @param {*} columns 
 * @param {*} conditions 
 */
function batchUpdate(table, columns, conditions){

}


function select(table, columns, conditions) {

}



/*-----------------------------------------------------------------utils---------------------------------------------------------*/

/**
 * 
 * @param {[String]} source 
 * @param {[String]} excludes 
 */
function exlude(source, excludes) {
        let set = new Set(excludes);
        return source.filter(x => !set.has(x));
}


/**
 * 
 * @param {String} prefix 
 * @param {[String|{name:String,nullable:boolean}]} columns 
 */
function prefix(prefix, columns) {
        columns.forEach(x => {
                x.prefix = prefix;
        })
}

/**
 * 
 * @param {String:{name:String,nullable:boolean}} option 
 */
function alias(option, alias) {

        option.alias = alias
        return option;

}

/**
 * @param {String:{name:String,nullable:boolean}} option 
 */
function replaceDirect(option) {
        option.replaceDirect = true;

        return option;
}








/**
 * 
 * @param {String} table
 * @param {{name:String,nullable:boolean}} columns 
 */
function _delete(table, columns) {

}


function name(column, suffix) {

}

function andName(column, suffix) {

}

function orName(column, suffix) {

}

/**
 * 
 * @param {{name:String,type:SqlType,replaceDirect:boolean,prefix:String,alias:String}} column 
 */
function item(column) {

}

function andItem(column) {

}

function orItem(column) {

}

/**
 * 
 * @param {String} option 
 */
function asign(option) {

}

/**
 * 
 * @param {String} option 
 */
function andAsign(option) {

}

/**
 * 
 * @param {String} option 
 */
function orAsign(option) {

}

/**
 * 
 * @param {{table:String,column:String}} table1 
 * @param {{table:String,column:String}} table2 
 * @returns {TemplateNode}
 */
function innerJoin(table1, table2) {

}

/**
 * 
 * @param {{table:String,column:String}} table1 
 * @param {{table:String,column:String}} table2 
 * @returns {TemplateNode}
 */
function leftJoin(table1, table2) {

}

/**
 * 
 * @param {{table:String,column:String}} table1 
 * @param {{table:String,column:String}} table2 
 * @returns {TemplateNode}
 */
function rightJoin(table1, table2) {

}

/**
 * 
 * @param {{table:String,column:String}} table1 
 * @param {{table:String,column:String}} table2 
 * @returns {TemplateNode}
 */
function fullJoin(table1, table2) {

}

/**
 * 
 * @param {{table:String,column:String}} table1 
 * @param {{table:String,column:String}} table2 
 * @param {String} join
 * @returns {TemplateNode}
 */
function joinCore(table1, table2, join) {

}


function where(nodes) {

}

function forEach(option, suppliers) {

}

/**
 * 
 * @param {String} test 
 * @param {[Node]} suplliers 
 */
function _if(test, suplliers) {

}

function ifName(opttion) {

}

function ifAndName(option) {

}

function ifOrName() {

}

function ifItem() {

}

function ifAndItem() {

}

function ifOrItem() {

}


/**
 * 
 * @param {String} option 
 */
function ifAsign(option) {

}

/**
 * 
 * @param {String} option 
 */
function ifAndAsign(option) {

}

/**
 * 
 * @param {String} option 
 */
function ifOrAsign(option) {

}


/**
 * 
 * @param {String} refid
 */
function include(refid) {

}


function groupBy(items) {

}
function orderBy(items) {

}

