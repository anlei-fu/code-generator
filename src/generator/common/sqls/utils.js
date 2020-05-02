/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-08 10:24:48
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-15 15:25:53
 */

const { SimpleFullTextSearcher } = require("./../full-text-index/simple-full-text-searcher")

/**
 * To get primary column if exists ,or pick best matched one to instead
 * 
 * @param {Table} table 
 * @returns {String}
 */
function findPrimaryColumn(table) {
        let primaryColumn;
        for (const columnName in table.columns) {
                primaryColumn = primaryColumn || columnName;
                if (table.columns[columnName].isPk)
                        return columnName;
        }

        return primaryColumn;
}

/**
 * To find name column
 * 
 * @param {Table} table
 * @returns {String}
 */
function findNameColumn(table) {
        let searcher = new SimpleFullTextSearcher();
        searcher.useCustomerTokenizer(x => x.split("_"));
        let docs = [];

        for (const columnName in table.columns) {
                docs.push({
                        content: table.columns[columnName].rawName,
                        weight: 1,
                        name: columnName
                });
        }
        searcher.addDocuments(docs);

        let results = searcher.search(table.rawName + "_name", 10);
        let best;
        for (const item of results) {
                best = best || item;
                if (item.name.toLowerCase().endsWith("name"))
                        return item
        }
        return best;
}

/***
 * Convert to c# data type
 * 
 * @param {SqlType} sqlType
 * 
 * @return {String}
 */
function toCsharpType(sqlType) {
        if (sqlType.name.toLowerCase().includes("char"))
                return "string";

        if (sqlType.name.toLowerCase().includes("date"))
                return "DateTime";

        return sqlType.length > 20 ? "decimal" : "int";
}

/**
 * Convert to java data type
 * 
 * @param {SqlType} sqlType
 * 
 * @returns {String}
 */
function toJavaType(sqlType) {
        // aready been converted
        if (typeof sqlType == "string")
                return sqlType;

        // type is correct
        if (!sqlType.name && sqlType.length)
                return new Error(`input(${sqlType}) is not a correct type!`);
        sqlType.name = sqlType.name.toLowerCase();

        if (sqlType.name.includes("char")) {
                return "String";
        } else if (sqlType.name.includes("integer")) {
                return "Long";
        } else if (sqlType.name.includes("text")) {
                return "String";
        } else if (sqlType.name.includes("float")) {
                return "Float";
        } else if (sqlType.name.includes("double")) {
                return "Double";
        } else if (sqlType.name.includes("small")) {
                return "Boolean";
        } else if (sqlType.name.includes("time") || sqlType.name.includes("date")) {
                return "Date";
        } else {
                return "Integer";
        }
}

module.exports={
        findPrimaryColumn,
        findNameColumn,
        toCsharpType,
        toJavaType
}