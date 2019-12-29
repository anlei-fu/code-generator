/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-01 09:02:40
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 13:03:35
 */

const JAVA_BASE_TYPES = new Set(["Integer", "Float", "Date", "Boolean", "String", "Long", "Double"]);

/**
 *  Convert sql type to java type
 * 
 *  @param {SqlType} sqlType constains name(string) and length(number) properties
 */
exports.getJavaType = function (sqlType) {

        // aready been converted
        if (typeof sqlType == "string")
                return sqlType;

        // type is correct
        if (!sqlType.name && sqlType.length)
                return new Error(`input(${sqlType}) is not a correct type!`);

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

/**
 * Check is java base type
 */
exports.isJavaBaseType = (type) => {
        return JAVA_BASE_TYPES.has(type);
}