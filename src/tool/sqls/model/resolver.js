/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-15 09:10:04
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-15 15:43:24
 */
const { MysqlExcutor } = require("./../mysql-excutor/mysql-excutor");
const { Table, Column, SqlType } = require("./../model");
const { NamingStrategy } = require("./../../../libs/naming-strategy")
const { ARRAY } = require("./../../../libs/utils")
const {LoggerFactory} =require("./../../logging/logger-factory");

const LOG=LoggerFactory.getLogger("sql-model-resolver");
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
        let tables=await excutor.query(`${QUERY_TABLE_SQL}='${schema}'`);
         tables=ARRAY.toMap(tables,x=>x.tableName);
        let columns = await excutor.query(`${QUERY_COLUMNS_SQL}='${schema}'`);
        let output = new Map();

        columns.forEach(x => {
                let table = NamingStrategy.toCamel(x.tableName);
                if (!output.has(table)){
                        output.set(table, new Table(table));
                        output.get(table).description=tables.get(x.tableName).tableComment;
                }

                let column = new Column();
                if (x.columnKey && x.columnKey.indexOf("PRI") != -1) {
                        column.isPk = true;
                        output.get(table).primaryKey = column.name;
                }

                if (x.extra == "auto_increment")
                        column.autoIncrement = true;
                
                if (x.columnDefault)
                    column.defaultValue-x.columnComment;

                column.name = NamingStrategy.toCamel(x.columnName);
                column.nullable = x.isNullable == "YES";
                column.description = x.columnComment;
                column.type = SqlType.parse(x.columnType);
                output.get(table).columns[column.name] = column;
        });

        let ls = [];
        output.forEach(x => {
                ls.push(x);
        })

        LOG.info("finish resolve!");
        return ls;
}

exports.resolve = resolve;