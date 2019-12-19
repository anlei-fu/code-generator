/**
 * Init table columns ,convert 'origin type' to 'java type'
 * 
 * @param {Table} table 
 */
function initTable(table) {
        OBJECT.forEach(table.columns, (key, value) => {
                table.columns[key].type = getJavaType(value.type);
        });
}

exports.initTable = initTable