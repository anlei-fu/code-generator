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
const LIST_PAGE_RENDER = new SimpleRender({}, `${__dirname}/template/list-page.vue`);

class ListPageGenerator {
        generate(table) {
                let pk = this._findPkColumn(table);
                let pkName = NamingStrategy.toCamel(pk.rawName);
                let name = STR.upperFirstLetter(table.name);
                name = STR.removeRange(name, 0, 2);
                let sname = NamingStrategy.toCamel(table.rawName);
                let description = table.description;

                return LIST_PAGE_RENDER.renderTemplate({
                        sname,
                        apiPrefix: findApiPrefix(STR.lowerFirstLetter(name)),
                        name,
                        pkName,
                        description,
                        columns: this._makeColumns(table),
                        query: this._makeQuery(table),
                        date: new Date().toLocaleString(),
                        radios: this._makeRadios(table).radios,
                        selectedKey: this._makeRadios(table).selectedKey,
                        selects: this._makeSelects(table)
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
                let newColumns = [];
                columns.forEach(column => {
                        column.type = COMMON_UTILS.getJavaType(column.type, column.name);

                        let columnName = column.name;
                        let newColumn = {
                                title: COMMON_UTILS.normalizeLabel(column.description),
                                field: columnName
                        }
                        let format = ANALYZER.analyzeFormat(column);
                        if (format && !column.isPk) {
                                let config = {
                                        type: format
                                };

                                if (format == "enum") {
                                        config.pattern = STR.lowerFirstLetter(COMMON_UTILS.getEnumKey(column.name));
                                }

                                if (format == "date") {
                                        config.pattern = "yyyy-MM-dd hh:mm:ss";
                                        newColumn.minWidth = "135px";
                                }

                                newColumn.format = config;
                        }

                        newColumns.push(newColumn);
                });

                return OBJECT.jsCode(newColumns, "columns");

        }

        _makeQuery(table) {
                let columns = table.columns;
                let query = {};
                Object.keys(columns).forEach(x => {
                        let format = ANALYZER.analyzeFormat(columns[x])
                        let columnName = columns[x].name;
                        if (columns[x].isPk) {
                                return;
                        }

                        if (!(columns[x].type == "String" && ANALYZER.analyzeRadioField(columns[x]))) {
                                if (format != "enum")
                                        return;
                        }
                        query[columnName] = null;
                });

                return OBJECT.jsCode(query, "query");
        }

        _makeRadios(table) {
                let columns = OBJECT.toArray(table.columns);
                let radios = [];
                columns.forEach(column => {
                        if (ANALYZER.analyzeRadioField(column)) {
                                radios.push({
                                        value: column.name,
                                        name: COMMON_UTILS.normalizeLabel(column.description)
                                });
                        }
                })
                let selectedKey = radios.length == 0 ? "" : radios[0].value;
                return { radios: OBJECT.jsCode(radios, "radioOptions"), selectedKey };
        }

        _makeSelects(table) {
                let columns = OBJECT.toArray(table.columns);
                let selects = {

                };
                columns.forEach(column => {
                        if (column.isPk)
                                return;

                        let format = ANALYZER.analyzeFormat(column);
                        if (format == "enum") {
                                let config = {
                                        title: COMMON_UTILS.normalizeLabel(column.description),
                                        enum: column.name,
                                }

                                selects[column.name] = config;
                        }
                })
                return OBJECT.jsCode(selects, "selects");
        }

}

exports.ListPageGenerator = ListPageGenerator;