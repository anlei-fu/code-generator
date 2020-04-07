const sqlUtils = require("../sqls/utils")

const DEFAULT_MATCHER = {
        status: {
                match: columnName => columnName.endsWith("status"),
                textField: "name",
                valueField: "value",
                placeHolder: "请选择",
                table: "SystemDictionary",
        },
        type: {
                match: columnName => columnName.endsWith("type"),
                textField: "name",
                valueField: "value",
                placeHolder: "请选择",
                table: "SystemDictionary",
        },
        state: {
                match: columnName => columnName.endsWith("state"),
                textField: "name",
                valueField: "value",
                placeHolder: "请选择",
                table: "SystemDictionary",
        },
        has: {
                match: columnName => columnName.startsWith("has"),
                textField: "name",
                valueField: "value",
                type: "CheckBox",
                table: "SystemDictionary",
        },
        is: {
                match: columnName => columnName.startsWith("is"),
                textField: "name",
                valueField: "value",
                type: "CheckBox",
                table: "SystemDictionary",
        },
}


class EnumAnalyzer {
        constructor () {
                this._matchers = DEFAULT_MATCHER;
        }

        useCustomMatcher(config) {
                Object.keys(config).forEach(x => {
                        this._matchers[x] = config[x];
                });
        }

        isEnumField(column) {
                if (sqlUtils.toJavaType(column.type) != "Integer")
                        return null;

                for (const matcherName of Object.keys(this._matchers)) {
                        let matcher = this._matchers[matcherName];
                        if (matcher.match(column.name.toLowerCase()))
                                return matcher;
                }
        }
}

module.exports.EnumAnalyzer = EnumAnalyzer;