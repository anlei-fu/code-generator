const { OBJECT } = require("./../../libs/utils");
const { NamingStrategy } = require("./../../libs/naming-strategy");
const {getJavaType}=require("./utils");

/**
 * Get column from table and do initialize
 * 
 * @param {Table} table 
 * @param {ColumnConfig} columnConfig 
 */
function getColumn(table, columnConfig,alias) {
        if (!table.columns[columnConfig.name])
                throw new Error(`column(${columnConfig.name}) can not be found in table(${table.name})`);
     

        let copy = OBJECT.clone(table.columns[columnConfig.name]);
        copy.type=getJavaType(copy.type);
        OBJECT.extend(columnConfig, copy);
        columnConfig.prefix=alias||NamingStrategy.toHungary(table.name);
        columnConfig.column=`${columnConfig.prefix}.${NamingStrategy.toHungary(columnConfig.name)}`;
        return columnConfig;
}

exports.getColumn = getColumn;