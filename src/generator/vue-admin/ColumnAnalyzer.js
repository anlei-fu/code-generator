const { ColumnBuilder } = require("./builders/Column");
const { ColorAnalyzer } = require("./ColorAnalyzer");
const { FormatAnalyzer } = require("./FormatAnalyzer");
const { Utils } = require("./Utils");
class ColumnAnalyzer {
        constructor (colorAnalyzer, formatAnalyzer, controlAnalyzer) {
                this._colorAnalyzer = colorAnalyzer;
                this._formatAnalyzer = formatAnalyzer;
                this._controlAnalyzer = colorAnalyzer;
        }
        analyze(resp) {
                let items = [];
                resp.fields.forEach(field => {
                        items.push(this.analyzeItem(field));
                });

                return items;
        }

        analyzeItem(column) {
                return new ColumnBuilder()
                        .name(column.name)
                        .defaultShow(
                                this.analyzeDefaultShow(column.type, column.name)
                        )
                        .title(
                                Utils.analyzeLabel(field.description, field.name)
                        )
                        .type(column.type)
                        .color(this._colorAnalyzer.analyze())
                        .format(this._formatAnalyzer.analyze())
                        .build();
        }

        /**
         * 
         * @param {String} type 
         * @param {String} name 
         * @returns {boolean}
         */
        analyzeDefaultShow(type, name) {

        }
}

exports.ColumnAnalyzer = ColumnAnalyzer;