const { NamingStrategy, TYPE, validateUtils, OBJECT } = require("../libs");
const { TableConfig } = require("./TableConfig");
/**
 * Generate update string
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

        return updateSql.substr(0, updateSql.length - 1) + ` where  ${tableConfig.pk} = ${formatSqlString(pkValue)}`;
}

/**
 * Generate insert string
 * 
 * @param {Object} entity 
 * @param {TableConfig} tableConfig
 * @returns {String?}
 */
function makeInsertSql(entity, tableConfig) {
        validateUtils.requireNotNull(table);

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
 * Get equal conditions join by 'and'
 * 
 * @param {Any} model 
 * @returns {String}
 */
function makeEqualSql(model) {
        let _new = trimEmptyFields(model);
        let fieldNames = Object.keys(_new);
        if (fieldNames.length == 0)
                return null;

        let sql = "";
        fieldNames.forEach((fieldName) => {
                let field = model[fieldName];
                sql += ` and ${NamingStrategy.toHungary(fieldName)} = ${formatSqlString(field)}  \n`
        });

        return sql;
}

/**
 * Make where clause
 * 
 * @param {Object} model 
 * @param {TableConfig} tableConfig 
 */
function makeWhereClauseSql(model, tableConfig) {
        let likeClause = "";
        if (likes && likes.length > 0) {
                let likeModel = {};
                likes.forEach(x => {

                        if (!TYPE.isArray(model[x]))
                                return;

                        likeModel[x] = model[likeModel];

                        likeClause += sqlUtils.makeLikeSql(likeModel)
                        OBJECT.setFieldToNull(model, x);
                });


        }

        let inClause = "";
        if (ins && ins.length > 0) {
                ins.forEach(x => {
                        inClause += makeInOrNotInSql(model[x], x);
                })

                OBJECT.setFieldToNull(model, ins);
        }

        let notInClause = "";
        if (ins && ins.length > 0) {
                notIns.forEach(x => {
                        inClause += makeInOrNotInSql(model[x], x, "not in");
                })
                OBJECT.setFieldToNull(model, notIns);
        }

        let equalClause = makeEqualSql(model);

        let sql = equalClause + inClause + notInClause + likeClause;
        sql = sql.trim();
        if (sql.startsWith("and")) {
                sql = sql.substr(3, sql.length - 3);
        }

        return `where ${sql}`;
}

function makeLikeSql(model) {
        let _new = trimEmptyFields(model);
        let fieldNames = Object.keys(_new);
        if (fieldNames.length == 0)
                return null;

        let sql = "";
        fieldNames.forEach((fieldName) => {
                let field = model[fieldName];
                sql += ` and ${NamingStrategy.toHungary(fieldName)} like '%${formatSqlString(field, false)}%' \n`
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
 * @returns {string}
 */
function formatSqlString(value, withQuota = true) {
        if (TYPE.isUndefined(value))
                throw new Error("argument can not be null");

        if (TYPE.isString(value)) {
                return withQuota ? `'${value.replace(/'/g, "''")}'` : `${value.replace(/'/g, "''")}`;
        } else if (value instanceof Date) {
                return withQuota ? `'${value.toLocaleString()}'` : `${value.toLocaleString()}`;
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
                if (!TYPE.isEmpty(fields[key]))
                        _new[key] = fields[key];
        });

        return _new;
}


exports.SqlMaker = {
        makeUpdateSql,
        trimEmptyFields,
        formatSqlString,
        makeInsertSql,
        makeInOrNotInSql,
        makeEqualSql,
        makeLikeSql,
        makeWhereClauseSql
}