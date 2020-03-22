const { OBJECT } = require("./../../libs/utils");
const { NamingStrategy } = require("./../../libs/naming-strategy");
const { getJavaType } = require("./utils");

/**
 * Get column from table and do initialize
 * 
 * @param {Table} table 
 * @param {ColumnConfig} columnConfig 
 * @param {String} alias of table
 */
function getColumn(table, columnConfig, alias) {

        // column not found
        if (!table.columns[columnConfig.name])
                throw new Error(`column(${columnConfig.name}) can not be found in table(${table.name})`);

        // clone to avoid one reference conflict
        let copy = OBJECT.clone(table.columns[columnConfig.name]);
        copy.type = getJavaType(copy.type);
        OBJECT.extend(columnConfig, copy);
        columnConfig.prefix = alias || NamingStrategy.toHungary(table.name);

        // seletct sql output column name 
        columnConfig.column = `${columnConfig.prefix}.${NamingStrategy.toHungary(columnConfig.name)}`;

        // output entity field name
        if (columnConfig.alias)
                columnConfig.name = columnConfig.alias;

        return columnConfig;
}

exports.getColumn = getColumn;