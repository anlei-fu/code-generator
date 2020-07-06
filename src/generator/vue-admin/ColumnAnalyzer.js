const { ColumnBuilder } = require("./builders/Column");
const { ColorAnalyzer } = require("./ColorAnalyzer");
const { FormatAnalyzer } = require("./FormatAnalyzer");
const { Utils } = require("./Utils");
class ColumnAnalyzer {
        analyze(resp) {
               let items=[];
               resp.fields.forEach(field=>{
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
                               Utils.analyzeLabel(field.description,field.name)
                        )
                        .type(column.type)
                        .render(
                                this.ananlyzeRender(column.type, column.type)
                        )
                        .build();
        }

        ananlyzeRender(type, name) {

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

exports.ColumnAnalyzer =ColumnAnalyzer;