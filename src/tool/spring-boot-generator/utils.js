exports.getJavaType = function (sqlType) {
        if (sqlType.name.indexOf("char") != -1) {
                return "String";
        } else if (sqlType.name.indexOf("big") != -1) {
                return "Long";
        } else if (sqlType.name.indexOf("small") != -1) {
                return "Boolean";
        }else if(sqlType.name.indexOf("time"!=-1)){
                return "Date";       
        } else {
                return "Integer";
        }
}
const types = new Set(["Integer", "Float", "Date", "Boolean", "String", "Long", "Double"]);
exports.isSimpleJavaType = (type) => {
        return types.has(type);
}