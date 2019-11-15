/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-15 09:10:04
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-15 15:43:24
 */
const { MysqlExcutor } = require("./../mysql-excutor/mysql-excutor");
const { Table, Column, SqlType } = require("./../../resolvers/db-info");
const { NamingStrategy } = require("./../../libs/naming-stratey")

const sql = `select * from INFORMATION_SCHEMA.Columns
where table_schema=`;

/**
 * 
 * @param {Sqlconnfig} config
 * @param {String} schema
 * @returns {[Table]} 
 */
async function resolve(config, schema) {
        let excutor = new MysqlExcutor(config);
        let datas = await excutor.query(sql + `'${schema}'`);
        let tables = new Map();;

        datas.forEach(x => {
                let table = NamingStrategy.toCamel(x.tableName);

                if (!tables.has(table))
                        tables.set(table, new Table(table));

                let column = new Column();
                if (x.columnKey && x.columnKey.indexOf("PRI") != -1) {
                        column.isPk = true;
                        tables.get(table).primaryKey = column.name;
                }

                if (x.extra == "auto_increment")
                        column.autoIncrement = true;

                column.name = NamingStrategy.toCamel(x.columnName);
                column.nullable = x.isNullable == "YES";
                column.description = x.columnComment;
                column.type = SqlType.parse(x.columnType);
                tables.get(table).columns[column.name] = column;
        });

        let ls = [];

        tables.forEach(v => {
                ls.push(v);
        })
        console.log("finish resolve!");
        return ls;
}

exports.resolve = resolve;