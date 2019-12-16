/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-01 09:02:40
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-16 14:44:37
 */
exports.getJavaType = function (sqlType) {
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
const types = new Set(["Integer", "Float", "Date", "Boolean", "String", "Long", "Double"]);
exports.isSimpleJavaType = (type) => {
        return types.has(type);
}