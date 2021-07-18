const { Table } = require("./Table");
const { JavaUtils } = require("./JavaUtils");
const { OBJECT, NamingStrategy } = require("../../libs");
const { columnAnalyzer } = require("./ColumnInfoAnalyzer")

class TableInfoResolver {
    /**
     * 
     * @param {Table} table 
     */
    resolve(table) {
        let result = { baseInfo: {}, columns: [], indexes: [] };
        result.baseInfo.name = table.name;
        OBJECT.copyFieldsFrom(table, result.baseInfo, ["name", "description"]);
        result.baseInfo.entityName = NamingStrategy.toPascal(table.name);

        table.columns.forEach(c => {
            let data = {};
            OBJECT.copyFieldsFrom(
                data,
                c,
                [
                    "description",
                    "name",
                    "nullable",
                    "isAutoIncrement",
                    "isPrimaryKey",
                    "defaultValue",
                    "sqlType",
                    "length"
                ])
            data.entityFieldName = NamingStrategy.toCamel(c.name);
            data.label = NamingStrategy.toCamel(c.name);
            data.javaType = JavaUtils.getJavaType({ name: data.sqlType, length: data.length }, data.entityName);
            this.resolveColumn(data);

            result.columns.push(data);
        });

        table.indexes.forEach(index => {
            let data = {};
            OBJECT.copyFieldsFrom(data, index, ["name", "type", "columns"]);
            result.indexes.push(data);
        });


        return result;
    }

    resolveColumn(column) {
        columnAnalyzer.call(column, column.javaType, column.name);
    }
}

exports.TableInfoResolver = TableInfoResolver