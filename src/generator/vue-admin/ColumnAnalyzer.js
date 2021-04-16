const { OBJECT } = require("../../libs/");
const { COMMON_UTILS } = require("./../common")
const { ColumnBuilder } = require("./builders/Column");


class ColumnAnalyzer {
        constructor () {
           this._enumMatcher= COMMON_UTILS.DEFAULT_ENUM_MATCHERS;
        }
        
        extendEnum(matchers){
              OBJECT.deepExtend(this._enumMatcher,matchers);
        }

        analyze(table) {
                let result = []
                let columns = OBJECT.toArray(table.columns);

                columns.forEach(column => {
                        result.push(this.analyzeItem(column));
                });

                return result;
        }

        analyzeItem(column) {

                return new ColumnBuilder()
                        .name(column.name)
                        .defaultShow(
                                this.analyzeDefaultShow(column.type, column.name)
                        )
                        .label(
                                this.analyzeLabel(field.description, field.name)
                        )
                        .nullable(column.nullable)
                        .radioField(
                                this.analyzeRadioField(column)
                        )
                        .type(column.type)
                        .format(
                                this.analyzeFormat(column)
                        )
                        .build();
        }

        analyzeDefaultShow(column) {
                return true;
        }

        analyzeFormat(column) {
                if (column.type == "Date") {
                        return "date";
                }

                if (column.type == "Integer") {
                        if (COMMON_UTILS.DEFAULT_MONEY_MATCHER(column.name)) {
                                return "money";
                        }
                }

                let matchers = this._enumMatcher[column.type];
                if (matchers) {
                        for (const key in matchers) {
                                if (matchers[key].match(column.name))
                                        return "enum";
                        }
                }

                return null;
        }

        analyzeLabel(column) {
                return column.description;
        }

        analyzeRadioField(column) {
                let format = this.analyzeFormat(column);
                if (format)
                        return false;

                return column.type == "String" && COMMON_UTILS.DEFAULT_RADIO_MATCHER(column.name);
        }
}

exports.ColumnAnalyzer = ColumnAnalyzer;