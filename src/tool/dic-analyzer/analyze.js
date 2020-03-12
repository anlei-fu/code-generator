const sqlUtils = require("./../sqls/utils")

const DEFAULT_MATCHER = {
        status: {
                match: x => x.endsWith("status"),
                textField: "name",
                valueField: "value",
                placeHolder: "请选择",
                table: "SystemDictionary",
        },
        type: {
                match: x => x.endsWith("type"),
                textField: "name",
                valueField: "value",
                placeHolder: "请选择",
                table: "SystemDictionary",
        },
        state: {
                match: x => x.endsWith("state"),
                textField: "name",
                valueField: "value",
                placeHolder: "请选择",
                table: "SystemDictionary",
        },
        has: {
                match: x => x.startsWith("has"),
                textField: "name",
                valueField: "value",
                type: "CheckBox",
                table: "SystemDictionary",
        },
        is: {
                match: x => x.startsWith("is"),
                textField: "name",
                valueField: "value",
                type: "CheckBox",
                table: "SystemDictionary",
        },
}


class DicAnalyzer {
        constructor () {
                this._matchers = DEFAULT_MATCHER;
        }

        useCustomMatcher(config) {
                Object.keys(config).forEach(x => {
                        this._matchers[x] = config[x];
                });
        }

        analyze(column) {
                if (sqlUtils.toJavaType(column.type) != "Integer")
                        return null;

                for (const matcherName of Object.keys(this._matchers)) {
                        let matcher = this._matchers[matcherName];
                        if (matcher.match(column.name.toLowerCase()))
                                return matcher;
                }
        }
}

module.exports.DicAnalyzer = DicAnalyzer;