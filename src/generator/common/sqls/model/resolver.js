/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-15 09:10:04
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-15 15:43:24
 */
const { MysqlExcutor } = require("./../../sqls/sql-excutors/mysql-excutor/mysql-excutor");
const { Table, Column, SqlType } = require("./../model");
const { NamingStrategy } = require("./../../../../libs/naming-strategy")
const { ARRAY } = require("../../../../libs/type")
const { LoggerFactory } = require("./../../logging/logger-factory");

const LOG = LoggerFactory.getLogger("sql-model-resolver");
const QUERY_COLUMNS_SQL = `select * from INFORMATION_SCHEMA.Columns
where table_schema`;
const QUERY_TABLE_SQL = `select * from INFORMATION_SCHEMA.Tables
where table_schema`;

/**
 * @description Resolve table infos by schema
 * @param {SqlConfig} sqlConfig
 * @param {String} schema
 * @returns {[Table]} 
 */
async function resolve(sqlConfig, schema) {
        let excutor = new MysqlExcutor(sqlConfig);
        let tables = await excutor.query(`${QUERY_TABLE_SQL}='${schema}'`);
        tables = ARRAY.toMap(tables, x => x.tableName);
        let columns = await excutor.query(`${QUERY_COLUMNS_SQL}='${schema}'`);
        let output = new Map();

        columns.forEach(columMetaInfo => {
                let table = NamingStrategy.toCamel(columMetaInfo.tableName);
                if (!output.has(table)) {
                        output.set(table, new Table(table));
                        output.get(table).description = tables.get(columMetaInfo.tableName).tableComment;
                }

                let column = new Column();
                if (columMetaInfo.columnKey && columMetaInfo.columnKey.includes("PRI")) {
                        column.isPk = true;
                        output.get(table).primaryKey = column.name;
                }

                if (columMetaInfo.extra == "auto_increment")
                        column.autoIncrement = true;

                if (columMetaInfo.columnDefault)
                        column.defaultValue = columMetaInfo.columnComment;

                column.name = NamingStrategy.toCamel(columMetaInfo.columnName);
                column.rawName = columMetaInfo.columnName;
                column.nullable = columMetaInfo.isNullable == "YES";
                column.description = columMetaInfo.columnComment;
                column.type = SqlType.parse(columMetaInfo.columnType);

                // set to target table
                output.get(table).columns[column.name] = column;
        });

        let ls = [];
        output.forEach(x => {
                x.rawName = NamingStrategy.toHungary(x.name);
                ls.push(x);
        })

        LOG.info("finish resolve!");
        return ls;
}

exports.resolve = resolve;