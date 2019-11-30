exports.getJavaType = function (sqlType) {
        if (sqlType.name.indexOf("char") != -1) {
                return "String";
        } else if (sqlType.name.indexOf("big") != -1) {
                return "Long";
        }else if (sqlType.name.indexOf("small") != -1) {
                return "Boolean";
        } else {
                return "Integer";
        }
}