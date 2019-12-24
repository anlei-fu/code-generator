
function getCSharpType(sqlType) {
        if (sqlType.name.indexOf("char") != -1)
                return "string";

        if (sqlType.name == "date")
                return "DateTime";

        return sqlType.length > 20 ? "decimal" : "int";
}

exports.getCSharpType = getCSharpType;