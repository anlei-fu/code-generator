const {selectCandidatePatterns,
      selectExcludesPattern,
      updateDefaultPatterns,
      validate,}=require("./patterns")


/**
 * 
 * @param {String} name 
 */
function getSelectPattern(name) {
        for (const key in selectCandidatePatterns) {
                if (name.indexOf(key) != -1) {
                        return EXPRESSION_PATTERNS[key];
                }
        }
}


const { OBJECT } = require("./../../libs/utils");
const { STR } = require("./../../libs/str");
const { getJavaType } = require("./utils")
const { SimpleRender } = require("./../simple-pattern-render/simple-pattern-render")

const SELECT_CONFIG_RENDER = new SimpleRender({}, "./templates/select-config-item");

class BuilderConfigGenerator {

        generateSelect(table) {
                let items = [];

                OBJECT.forEach(table.columns, (key, value) => {
                        let type = getJavaType(value.type);
                        let pattern = getSelectPattern(key);
                        if (type == "String") {
                                let item = {
                                        key: pattern || { exclude: true }
                                }

                                items.push(item);

                        } else if (type == "Integer") {
                                
                                
                        } else if (type == "Float") {
                                let item = {
                                        key: {
                                                expression: "range"
                                        }
                                }
                                items.push(item);
                        } else if (type == "Date") {
                                let item = {
                                        key: {
                                                expression: "timeRange"
                                        }
                                }
                                items.push(item);
                        }

                });
        }

        renderSelectConfig(items) {
                let excludes = [];
                let timeRange = [];
                let range = [];
                let validates = [];
                items.forEach(items, x => {
                        if (x.exclude)
                                excludes.push(x.key);

                        if (x.expression) {
                                if (x.expression == "timeRange") {
                                        timeRange.push(x.key);
                                } else if (x.expression == "timeRange") {
                                        range.push(x.key);
                                }
                        }

                        if (x.validates) {
                                x.validates = x.validates.replace("@type", key);
                                x.push(x)
                        }

                });

                let excludesStr = this.getArray("excludes", excludes);
                let timeStr = this.getArray("timeRange", timeRange);
                let rangeStr = this.getArray("range", range);


                let validateStr = "";
                if (validates.length != 0) {
                        validates.forEach(x => {
                                validateStr += `.validate("${x.key}","${x.validate}")\r\n`;
                        });
                }
                let model = {
                        conditions: excludesStr + timeStr + rangeStr,
                        reqs: validateStr
                }

                return SELECT_CONFIG_RENDER.renderTemplate(model);
        }

        getArray(key, array) {
                let output = "";
                if (array.length != 0) {
                        output = `.${key}[`
                        array.forEach(x => {
                                output += `"${x}",`;
                        })

                        output += `${STR.removeLastComa(output)}]\r\n`;
                }
        }

        generateInsert(table) {
                let items = [];

                OBJECT.forEach(table.columns, (key, value) => {
                        let type = getJavaType(value.type);
                        let pattern = getSelectPattern(key);
                        if (type == "String") {
                                let item = {
                                        key: pattern || { exclude: true }
                                }

                                items.push(item);

                        } else if (type == "Integer") {
                                if (pattern)
                                        items.push(pattern);
                        } else if (type == "Float") {
                                let item = {
                                        key: {
                                                expression: "range"
                                        }
                                }
                                items.push(item);
                        } else if (type == "Date") {
                                let item = {
                                        key: {
                                                expression: "timeRange"
                                        }
                                }
                                items.push(item);
                        }

                });
        }

        generateUpdate() {

        }

        generateDelete() {

        }
}