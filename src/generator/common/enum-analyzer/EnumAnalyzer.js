const sqlUtils = require("../sqls/utils");
const { STR } = require("./../../../libs/str");

const DEFAULT_MATCHER = {
        status: {
                match: columnName =>{ 
                   let lower =columnName.toLowerCase();
                   let suffixes=["type", "status", "state", "class", "level", "style"]
                  return STR.endsWithAny(lower,suffixes);

                },
                label: "label",
                value: "value",
                placeHolder: "请选择",
                table: "dictionary",
        },
        has: {
                match: columnName => { 
                        let lower =columnName.toLowerCase();
                        let suffixes=["is","has","need","support","permit","allow","enable","disable"]
                       return STR.startsWithAny(lower,suffixes);
     
                     },
                label: "label",
                value: "value",
                type: "CheckBox",
                table: "dictionary",
                defaultType:"booleanFlag"
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