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
                let targetItem = ARRAY.firstOrDefault(configGroup.items, x => x.id.includes("Detail"));
                if (!targetItem)
                        return;

                let columns = [];
                if (targetItem.resp.doCreate) {
                        columns = FieldAnalyzer.analyzeResp(targetItem);
                } else {
                        columns = targetItem.table.columns;
                }

                let columnParams = this.generateColumn(columns.fields, configGroup);
                let req = FieldAnalyzer.analyzeReq(targetItem);

                let selectParams = this.generateSelect(req.fields);
                let radioParams = this.generateRadioGroup(req.fields);
                let timeRangeParams = this.generateTimeRange(req.fields);
                let buttonParams = this.generateButton(configGroup);
                let queryParams = this.generateQuery(req.fields);

                let config = {};
                OBJECT.extend(config, selectParams);
                OBJECT.extend(config, radioParams);
                OBJECT.extend(config, timeRangeParams);
                OBJECT.extend(config, buttonParams);
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
         * Generate select config
         * 
         * @param {[]} fields 
         */
        generateSelect(fields) {

                if (!ARRAY.hasAny(fields, x => COMMON_UTILS.DEFAULT_ENUM_MATCHER(x))) {
                        return {
                                selectContent: "",
                                selectHtml: ""
                        }
                }
                let selectFields = fields.filter( x => COMMON_UTILS.DEFAULT_ENUM_MATCHER(x));
                let builder = new StringBuilder()
                        .appendLine("selects:new utils.SelectOperationBuilder()")
                        .append(STR.arrayToString1(selectFields, x => `.option("${x.name}","${x.description}")\r\n`))
                        .append(".build(),")

                return {
                        selectContent: builder.build(),
                        selectHtml
                }
        }

        /**
         * Generate time range config
         * 
         * @param {[]} fields 
         */
        generateTimeRange(fields) {
                let timeRangeContent = "timeRange:[new Date(),new Date()]";
                if (ARRAY.hasAny(fields, x => x.type == "Date")) {
                        return {
                                timeRangeContent,
                                timeRangeHtml
                        }
                } else {
                        return {
                                timeRangeContent: "",
                                timeRangeHtml: ""
                        }
                }
        }

        /**
         * Generate radio group config
         * 
         * @param {[]} fields 
         */
        generateRadioGroup(fields) {

        
                if (!ARRAY.hasAny(fields, x => x.type == "String" && COMMON_UTILS.DEFAULT_RADIO_MATCHER(x.name))) {
                        return {
                                radioGroupContent: "",
                                radioHtml: ""
                        };
                }
                let radioFields = fields.filter(x => x.type == "String" && COMMON_UTILS.DEFAULT_RADIO_MATCHER(x.name));
                let builder = new StringBuilder()
                        .append(`
                radioKey: "downSystemSiteName",
                keyword: "",
                radioOptions: new utils.RadioOperationBuilder()
                `)
                        .append(STR.arrayToString1(radioFields, x => `.option("#${x.name}","${x.description}")\r\n`))
                        .append(".build(),")

                return {
                        radioGroupContent: builder.build(),
                        radioGroupHtml
                }
        }

        /**
         * Generate button config
         * 
         * @param {ConfigGroup} configGroup 
         */
        generateButton(configGroup) {
                if (this._hasItem(configGroup, x => x.id == "add")) {
                        return {
                                buttonHtml
                        }
                }

                return {
                        buttonHtml: ""
                }
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