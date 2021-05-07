const { COMMON_UTILS } = require("../common");
const { SimpleRender } = require("../common/renders/SimplePatterRender");
const { STR, NamingStrategy, OBJECT } = require("./../../libs/");
const { ColumnAnalyzer } = require("./../vue-admin");
const { findApiPrefix } = require("./api-prefix-map");

const ANALYZER = new ColumnAnalyzer();

ANALYZER.extendEnum({
        Integer: {
                dic: {
                        match: x => STR.equalAny(x.toLowerCase(), ["carrierlicense"])
                }
        }

})

const EDIT_PAGE_RENDER = new SimpleRender({}, `${__dirname}/template/edit-page.vue`);

class EditPageGenerator {
        generate(table) {
                let pk = this._findPkColumn(table);
                let pkName = NamingStrategy.toCamel(pk.rawName);
                let name = STR.upperFirstLetter(table.name);
                name = STR.removeRange(name, 0, 2);
                let sname = NamingStrategy.toCamel(table.rawName);
                let description = table.description;
                let { configGroups, ruleConfigs, query, withNumber } = this._makeColumns(table);
                let rule = OBJECT.jsCode(ruleConfigs, "rules");
                if (withNumber)
                        rule = rule.replace(/type: "number",/g, "validator: numberValidator,");

                query[pkName] = null;
                return EDIT_PAGE_RENDER.renderTemplate({
                        sname,
                        apiPrefix: findApiPrefix(STR.lowerFirstLetter(name)),
                        name,
                        pkName,
                        description,
                        rule,
                        fields: OBJECT.jsCode(configGroups, "fields"),
                        query: OBJECT.jsCode(query, "query"),
                        numberValidator: withNumber ? `import { numberValidator } from "./../../../../../util/Validators";` : "",
                        date: new Date().toLocaleString(),
                })
        }

        _findPkColumn(table) {
                for (let key in table.columns) {
                        if (table.columns[key].isPk)
                                return table.columns[key];
                }
        }

        _makeColumns(table) {
                let columns = OBJECT.toArray(table.columns);
                let columnConfigs = [];
                let query = {};
                let ruleConfigs = {};
                let withNumber = false;
                columns.forEach(column => {
                        column.type = COMMON_UTILS.getJavaType(column.type,column.name);
                        let columnName = column.name;
                        let description = COMMON_UTILS.normalizeLabel(column.description);
                        if (column.isPk)
                                return;

                        if (column.type == COMMON_UTILS.JAVA_TYPE.DATE)
                                return;

                        if (COMMON_UTILS.DEFAULT_EDIT_IGNORE_FIELDS_MATCHER(columnName))
                                return;

                        let columnConfig = {
                                prop: columnName,
                                label: description,
                        }

                        query[columnName] = null;

                        let format = ANALYZER.analyzeFormat(column);
                        if (format == "enum") {
                                columnConfig.type = "select";
                                columnConfig.enum = columnName;
                        } else if (COMMON_UTILS.DEFAULT_TEXTAREA_MATCHER(columnName)) {
                                columnConfig.type = "textarea";
                        } else {
                                columnConfig.type = "text";
                        }

                        let rules = [];

                        if (!column.nullable) {
                                rules.push(
                                        { required: true, message: columnConfig.type == "select" ? `请选择${description}` : `请输入${description}`, trigger: 'blur' }
                                );
                        }

                        if (column.type == COMMON_UTILS.JAVA_TYPE.INTEGER && columnConfig.type == "text") {
                                withNumber = true;
                                rules.push(
                                        { type: "number", message: "请输入合法数字", trigger: 'blur' }
                                );
                        }

                        if (rules.length != 0) {
                                ruleConfigs[columnName] = rules;
                        }

                        columnConfigs.push(columnConfig);
                });

                let configGroups = [];
                let tempGroup = [];
                for (let i = 0; i < columnConfigs.length; i++) {
                        tempGroup.push(columnConfigs[i]);
                        if (i % 2 === 0 && i !== 0) {
                                configGroups.push(tempGroup);
                                tempGroup = [];
                                continue;
                        }
                }

                if (tempGroup.length != 0)
                        configGroups.push(tempGroup);

                return { configGroups, ruleConfigs, query, withNumber };

        }
}

exports.EditPageGenerator = EditPageGenerator;