
/**
 * Convert SqlType to c# type
 * 
 * @param {SqlType} sqlType 
 */
function getCSharpType(sqlType) {
        if (sqlType.name.toLowerCase().includes("char"))
                return "string";

        if (sqlType.name.toLowerCase().includes("date"))
                return "DateTime";

        return sqlType.length > 20 ? "decimal" : "int";
}

exports.getCSharpType = getCSharpType;