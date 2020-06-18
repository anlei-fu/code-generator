const { validateUtils } = require("./validate-utils");
const { TYPE } = require("./utils");
const { NamingStrategy } = require("./naming-strategy");
const { StopWatch } = require("../StopWatch");

/**
 * Generate update string
 * 
 * @param {String} table 
 * @param {Object} fields
 * @returns {String?} 
 */
function getUpdateString(table, fields) {
        validateUtils.requireNotNull(table);

        fields = trimEmptyFields(fields);
        let fieldNames = Object.keys(fields);
        if (fieldNames.length == 0)
                return "";

        let updateSql = `update ${table} set \r\n`;
        fieldNames.forEach(name => {
                if (fields[name] instanceof String || fields[name] instanceof Date) {
                        updateSql += `${name}='${formatSqlString(fields[name])}',`
                } else {
                        updateSql += `${name}=${fields[name]},`
                }
        });

        return updateSql.substr(0, updateSql.length - 1);
}

/**
 * Generate insert string
 * 
 * @param {String} table 
 * @param {Object} fields 
 * @returns {String?}
 */
function getInsertString(table, fields) {
        validateUtils.requireNotNull(table);

        fields = trimEmptyFields(fields);
        let fieldNames = Object.keys(fields);
        if (fieldNames.length == 0)
                return "";

        let sql = `insert into ${table}`;
        let fieldsStr = "";
        let valuesStr = "";
        fieldNames.forEach((field, i, arr) => {
                if (i != arr.length - 1) {
                        fieldsStr += `${NamingStrategy.toHungary(field)},`;
                        valuesStr += `${formatSqlString(fields[field])},`;
                } else {
                        fieldsStr += `${NamingStrategy.toHungary(field)}`;
                        valuesStr += `${formatSqlString(fields[field])}`;
                }
        });

        sql = `${sql}(${fieldsStr})values(${valuesStr})`;
        console.log(sql);
        return sql;
}

/***
 * Nomorlize sql value, if a string escape \' mark
 * 
 * @returns {string}
 */
function formatSqlString(value) {
        if (value == undefined)
                throw new Error("argument can not be null");

        if (TYPE.isString(value)) {
                return `'${value.replace(/'/g, "''")}'`
        } else if (value instanceof Date) {
                return `'${value.toLocaleString()}'`
        }
        else {
                return `${value}`
        }
}

/**
 * Trim null fiedl of fields ,do a copy
 * 
 * @param {Object} fields 
 * @returns {Object}
 */
function trimEmptyFields(fields) {
        let _new = {};
        Object.keys(fields).forEach(key => {
                if (fields[key])
                        _new[key] = fields[key];
        });

        return _new;
}

/**
 * Get equal conditions join by 'and'
 * 
 * @param {Any} model 
 * @returns {String}
 */
function getEqualConditions(model) {
        let _new = trimEmptyFields(model);
        let fieldNames = Object.keys(_new);
        if (fieldNames.length == 0)
                return null;

        let sql = "";
        fieldNames.forEach((fieldName, i, array) => {
                let field = model[fieldName];

                if (i == 0) {
                        sql += `${NamingStrategy.toHungary(fieldName)} = ${formatSqlString(field)} `;
                } else {
                        sql += ` and ${NamingStrategy.toHungary(fieldName)} = ${formatSqlString(field)} `
                }
        });

        return sql;
}

/**
 * Generate in like sql segment
 * 
 * @param {[String|Number]} items 
 * @param {String} field 
 * @param {String} prefix  in|not in|exist|not exist
 * @returns {String?}
 */

function getInLike(items, field, prefix = "in") {
        if (items.length == 0)
                return null;

        let sql = ` ${field} ${prefix} (`;
        items.forEach((item, i, array) => {
                let formatedStr = sqlUtils.formatSqlString(item);
                sql += formatedStr;
                if (i < array.length - 1) {
                        sql += ",";
                } else {
                        sql += ")"
                }
        });

        return sql;
}


exports.sqlUtils = {
        getUpdateString,
        trimEmptyFields,
        formatSqlString,
        getInsertString,
        getInLike,
        getEqualConditions
}