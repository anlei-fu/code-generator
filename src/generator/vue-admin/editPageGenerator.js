const { ConfigGroup } = require("./../spring-boot/builders/ConfigGroup");
const { FieldAnalyzer } = require("./../spring-boot/FieldAnalyzer");
const { ConfigInitializer } = require("./../spring-boot/ConfigInitializer");
const { COMMON_UTILS } = require("./../common");
const { FILE, OBJECT, NamingStrategy, StringBuilder, ARRAY, STR } = require("./../../libs");
const { SimpleRender } = require("./../common")

const selectHtml = FILE.read(`${__dirname}/templates/select.html`);
const radioGroupHtml = FILE.read(`${__dirname}/templates/radioGroup.html`);
const timeRangeHtml = FILE.read(`${__dirname}/templates/timeRange.html`);
const buttonHtml = FILE.read(`${__dirname}/templates/button.html`);
const listPageRander = new SimpleRender({}, `${__dirname}/templates/list.vue`);

class ListPageGenerator {

        /**
         * 
         * @param {ConfigGroup} configGroup 
         */
        generate(configGroup) {
                // init config group
                let initialzier = new ConfigInitializer();
                initialzier.init(configGroup);

                // find target page config item
                let targetItem = ARRAY.firstOrDefault(configGroup.items, x => x.id.includes("add"));
                if (!targetItem)
                        return;

                let req = FieldAnalyzer.analyzeReq(targetItem);
                let columnParams = this.generateColumn(req);
                let validatesParams = this.generateValidates(req);

                let queryParams = this.generateQuery(req.fields);

                let config = {};
              
                OBJECT.extend(config, queryParams);
                OBJECT.extend(config, columnParams);
                OBJECT.extend(config, {
                        apiPrefix: `${NamingStrategy.toSplash(configGroup.table.rawName)}`,
                        pkField: configGroup.table.primaryColumn
                })

                if (this._hasItem(configGroup, x => x.id == "add" || x.id == "edit")) {
                        OBJECT.extend(config, {
                                editImport: `import edit from "./edit";`,
                                editComponent: `component:{edit},`,
                                editHtml: `<edit ref="edit"/>`,
                                buttonHtml: buttonHtml
                        })
                }

                let content = listPageRander.renderTemplate(config);
                FILE.write(`${__dirname}/output/${configGroup.name}.vue`, content);
        }


        /**
         * 
         * @param {[]} columns 
         * @param {ConfigGroup} configGroup 
         */
        generateColumn(columns, configGroup) {
                let builder = new StringBuilder();
                builder.append("new utils.ColumnBuilder()");
                let tableDeleteHtml = "";
                let tableEditHtml = "";
                columns.forEach(x => {
                        if (COMMON_UTILS.DEFAULT_DICTIONARY_MATCHER(x)) {
                                builder.appendLine(`.enumColumn("${x.name}","${x.description}")`);
                        } else if (COMMON_UTILS.DEFAULT_FLOAT_MATCHER(x.name) && x.type == "BigDecimal") {
                                builder.appendLine(`.moneyColumn("${x.name}","${x.description}")`);
                        } else if (x.type == "Date") {
                                builder.appendLine(`.dateColumn("${x.name}","${x.description}","yyyy-MM-dd hh:mm:ss")`);
                        } else {
                                builder.appendLine(`.column("${x.name}","${x.description}")`);
                        }
                });

                if (this._hasBatchOperation(configGroup)) {
                        builder.appendLine(".checkColumn()");
                }

                if (this._hasDelete(configGroup) || this._hasEdit(configGroup)) {
                        builder.append(".operationColumn([");

                        if (this._hasEdit(configGroup)) {
                                builder.append(`utils.operation("Edit","edit"),`);
                                tableEditHtml = `@edit="showEdit"`;
                        }

                        if (this._hasDelete(configGroup)) {
                                builder.append(`utils.operation("Delete","delete"),`);
                                tableDeleteHtml = `@delete="showDelete"`;
                        }

                        builder.appendLine("])");
                }

                builder.append(".build()");
                return {
                        columns: builder.build(),
                        tableDeleteHtml,
                        tableEditHtml
                }
        }

        /**
         * 
         * @param {[]} fields 
         */
        generateValidates(fields){

        }

        /**
         * Generate query config
         * 
         * @param {[]} fields 
         */
        generateQuery(fields) {
                let builder = new StringBuilder()
                        .appendLine("query : {")
                        .append(STR.arrayToString1(fields, x => `${x.name} : null, \r\n`))
                        .append("}");
                return { query: builder.build() };
        }

        /**
        * Init table columns ,convert 'sql type' to 'java type'
        * 
        * @private
        * @param {Table} table 
        */
        _initTable(table) {
                OBJECT.forEach(table.columns, (_, column) => {
                        column.type = COMMON_UTILS.getJavaType(column.type, column.name);
                });
        }

        /**
         * 
         * @param {ConfigGroup} configGroup 
         */
        _hasEdit(configGroup) {
                return this._hasItem(configGroup, x => x.id == "update");
        }


        /**
         * 
         * @param {ConfigGroup} configGroup 
         */
        _hasDelete(configGroup) {
                return this._hasItem(configGroup, x => x.id.startsWith("deleteBy"));
        }


        /**
         * 
         * @param {ConfigGroup} configGroup 
         */
        _hasBatchOperation(configGroup) {
                return this._hasItem(configGroup, x => x.id.startsWith("batch"));
        }

        _hasItem(configGroup, matcher) {
                return configGroup.items.filter(x => matcher(x)).length > 0;
        }
}

exports.ListPageGenerator = ListPageGenerator