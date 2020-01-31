const { OBJECT } = require("./../../libs/utils");
const { NamingStrategy } = require("./../../libs/naming-strategy");
const {getJavaType}=require("./utils");

/**
 * Get column from table and do initialize
 * 
 * @param {Table} table 
 * @param {ColumnMetaInfo} columnMetaInfo 
 */
function getColumn(table, columnMetaInfo,alias) {
        if (!table.columns[columnMetaInfo.name])
                throw new Error(`column(${columnMetaInfo.name}) can not be found in table(${table.name})`);

        let meta = OBJECT.clone(table.columns[columnMetaInfo.name]);
        meta.type=getJavaType(meta.type);
        OBJECT.extend(columnMetaInfo, meta);
        columnMetaInfo.prefix=alias||NamingStrategy.toHungary(table.name);
        columnMetaInfo.column=`${columnMetaInfo.prefix}.${NamingStrategy.toHungary(columnMetaInfo.name)}`;
        return columnMetaInfo;
}

exports.getColumn = getColumn;