const { COMMON_UTILS } = require("./../common/utils")

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

        let type = sqlType.length > 20 ? "decimal" : "int";

        return COMMON_UTILS.DEFAULT_FLOAT_MATCHER(type) ? "decimal" : type;
}

exports.getCSharpType = getCSharpType;