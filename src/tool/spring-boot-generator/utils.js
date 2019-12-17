/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-01 09:02:40
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 13:03:35
 */

const BASIC_TYPES = new Set(["Integer", "Float", "Date", "Boolean", "String", "Long", "Double"]);

/**
 *  Convert sql type to java type
 * 
 * 
 * 
 *  @param { {name:String,length:number} } sqlType
 */
exports.getJavaType = function (sqlType) {

        // already been converted
        if (!sqlType.name)
                return sqlType;

        if (sqlType.name.indexOf("char") != -1) {
                return "String";
        } else if (sqlType.name.indexOf("integer") != -1) {
                return "Long";
        } else if (sqlType.name.indexOf("text") != -1) {
                return "String";
        }
        else if (sqlType.name.indexOf("float") != -1) {
                return "Float";
        }
        else if (sqlType.name.indexOf("double") != -1) {
                return "Double";
        }
        else if (sqlType.name.indexOf("small") != -1) {
                return "Boolean";
        } else if (sqlType.name.indexOf("time") != -1) {
                return "Date";
        } else {
                return "Integer";
        }
}

/**
 * Check is simple java type
 */
exports.isSimpleJavaType = (type) => {
        return BASIC_TYPES.has(type);
}