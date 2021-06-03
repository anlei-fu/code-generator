const { NamingStrategy, TYPE, validateUtils, OBJECT } = require("../libs");
const { TableConfig } = require("./TableConfig");
/**
 * Generate update sql
 * 
 * @param {Object} entity
 * @param {TableConfig} tableConfig
 * @returns {String?} 
 */
function makeUpdateSql(entity, tableConfig) {
        validateUtils.requireNotNull(entity, [tableConfig.pk]);
        let pkValue = entity[tableConfig.pk];
        entity = trimEmptyFields(entity);
        let columns = Object.keys(entity);
        if (columns.length == 1)
                return "";

        let updateSql = `update ${tableConfig.table} set \r\n`;
        columns.forEach(column => {
                if (column == id)
                        return;

                if (TYPE.isString(entity[column]) || entity[column] instanceof Date) {
                        updateSql += `${NamingStrategy.toHungary(column)} = ${formatSqlString(entity[column])}, \n`
                } else {
                        updateSql += `${NamingStrategy.toHungary(column)} = ${entity[column]}, \n`
                }
        });

        return updateSql.substr(0, updateSql.length - 1) + ` where ${tableConfig.pk} = ${formatSqlString(pkValue)}`;
}

/**
 * Make insert sql 
 * 
 * @param {Object} entity 
 * @param {TableConfig} tableConfig
 * @returns {String?}
 */
function makeInsertSql(entity, tableConfig) {
        entity = trimEmptyFields(entity);
        let fieldNames = Object.keys(entity);
        if (fieldNames.length == 0)
                return "";

        let sql = `insert into ${tableConfig.table}`;
        let fieldsStr = "";
        let valuesStr = "";
        fieldNames.forEach((field, i, arr) => {
                if (i != arr.length - 1) {
                        fieldsStr += `\`${NamingStrategy.toHungary(field)}\`,`;
                        valuesStr += `${formatSqlString(entity[field])},`;
                } else {
                        fieldsStr += `\`${NamingStrategy.toHungary(field)}\``;
                        valuesStr += `${formatSqlString(entity[field])}`;
                }
        });

        sql = `${sql}(${fieldsStr})values(${valuesStr})`;
        return sql;
}



/**
 * Make equals sql 
 * 
 * @param {Any} model 
 * @param {TableConfig} tableConfig
 * @returns {String}
 */
function makeEqualSql(model, tableConfig) {
        let _new = trimEmptyFields(model);
        let fieldNames = Object.keys(_new);
        if (tableConfig && tableConfig.equals && tableConfig.equals.length > 0) {
                fieldNames = fieldNames.filter(x => tableConfig.equals.includes(x));
        }

        if (fieldNames.length == 0)
                return "";

        let sql = "";
        fieldNames.forEach((fieldName) => {
                let field = model[fieldName];
                sql += ` and ${NamingStrategy.toHungary(fieldName)} = ${formatSqlString(field)}  \n`
        });

        return sql;
}

/**
 * Make where clause sql
 * 
 * @param {Object} model 
 * @param {TableConfig} tableConfig 
 * @returns {String}
 */
function makeWhereClauseSql(model, tableConfig) {
        let likeClause = "";
        if (tableConfig.likes && tableConfig.likes.length > 0) {
                let likeModel = {};
                likes.forEach(x => {
                        if (TYPE.isEmpty(model[x]))
                                return;

                        likeModel[x] = model[likeModel];
                });

                likeClause += makeLikeSql(likeModel)
                OBJECT.setFieldToNull(model, tableConfig.likes);
        }

        let equalClause = makeEqualSql(model, tableConfig);
        let sql = equalClause + likeClause;
        sql = trimAnd(sql);

        return `where ${sql}`;
}

/**
 * Make like sql %keyword%
 * 
 * @param {Object} model 
 * @returns {String}
 */
function makeLikeSql(model) {
        let _new = trimEmptyFields(model);
        let fieldNames = Object.keys(_new);
        if (fieldNames.length == 0)
                return "";

        let sql = "";
        fieldNames.forEach((fieldName) => {
                let field = model[fieldName];
                sql += ` and ${NamingStrategy.toHungary(fieldName)} like '%${formatSqlString(field, false)}%' \n`
        });

        return sql;
}

/**
 * Make in-like sql str
 * 
 * @param {[String|Number]} items 
 * @param {String} field 
 * @param {String} prefix  in|not in|exist|not exist
 * @returns {String?}
 */

function makeInOrNotInSql(items, field, prefix = "in") {
        if (items.length == 0)
                return null;

        let sql = `and ${field} ${prefix} (`;
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

/***
 * Nomorlize sql value, if a string escape \' mark
 * 
 * @returns {String}
 */
function formatSqlString(value, withQuota = true) {
        if (TYPE.isUndefined(value))
                throw new Error("argument can not be null");

        if (TYPE.isString(value)) {
                return withQuota ? `'${value.replace(/'/g, "''")}'` : `${value.replace(/'/g, "''")}`;
        } else if (value instanceof Date) {
                return withQuota ? `'${value.toLocaleString()}'` : `${value.toLocaleString()}`;
        } else {
                return `${value}`;
        }
}

/**
 * Trim null field and do a copy
 * 
 * @param {Object} fields 
 * @returns {Object}
 */
function trimEmptyFields(fields) {
        let _new = {};

        Object.keys(fields).forEach(key => {
                if (!TYPE.isEmpty(fields[key]))
                        _new[key] = fields[key];
        });

        return _new;
}

/**
 * Remove and start in where clause
 * 
 * @param {String} sql 
 * @returns {String}
 */
function trimAnd(sql) {
        sql = sql.trim();
        if (sql.startsWith("and")) {
                sql = sql.substr(3, sql.length - 3);
        }

        return sql;
}

exports.SqlMaker = {
        makeUpdateSql,
        trimEmptyFields,
        formatSqlString,
        makeInsertSql,
        makeInOrNotInSql,
        makeEqualSql,
        makeLikeSql,
        makeWhereClauseSql,
        trimAnd
}