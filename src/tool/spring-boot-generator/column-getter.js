const { OBJECT } = require("./../../libs/utils")
const { NamingStrategy } = require("./../../libs/naming-strategy")
const {getJavaType}=require("./utils")

/**
 * Get column from table and do initialize
 * 
 * @param {Table} table 
 * @param {column} column 
 */
function getColumn(table, column) {
        if (!table.columns[column.name])
                throw new Error(`column(${column.name}) can not be found in table(${table.name})`);

        let meta = OBJECT.clone(table.columns[column.name]);
        meta.type=getJavaType(meta.type);
        OBJECT.extend(column, meta);
        column.prefix=conlumn.prefix||NamingStrategy.toHungary(table.name);
        column.column=`${column.prefix}.${NamingStrategy.toHungary(column.name)}`;
        return column;
}

exports.getColumn = getColumn;