const { ConfigGroup } = require("./../spring-boot/builders/ConfigGroup");
const { FieldAnalyzer } = require("./../spring-boot/FieldAnalyzer");
const { ConfigInitializer } = require("./../spring-boot/ConfigInitializer");
const { COMMON_UTILS } = require("./../common");
const { FILE, OBJECT, NamingStrategy } = require("./../../libs");
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
                let initialzier = new ConfigInitializer();
                initialzier.init(configGroup);

                let targetItems = configGroup.items.filter(x => x.id.includes("Detail"));
                if (targetItems.length == 0)
                        return;

                let targetItem = targetItems[0];
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
                let columnsContent = "new utils.ColumnBuilder()";
                let tableDeleteHtml = "";
                let tableEditHtml = "";
                columns.forEach(x => {
                        if (COMMON_UTILS.DEFAULT_DICTIONARY_MATCHER(x)) {
                                columnsContent += `.enumColumn("${x.name}","${x.description}")\r\n`
                        } else if (COMMON_UTILS.DEFAULT_FLOAT_MATCHER(x.name) && x.type == "BigDecimal") {
                                columnsContent += `.moneyColumn("${x.name}","${x.description}")\r\n`
                        } else if (x.type == "Date") {
                                columnsContent += `.dateColumn("${x.name}","${x.description}","yyyy-MM-dd hh:mm:ss")\r\n`
                        } else {
                                columnsContent += `.column("${x.name}","${x.description}")\r\n`
                        }
                });

                if (this._hasBatchOperation(configGroup)) {
                        columnsContent += ".checkColumn()\r\n";
                }

                if (this._hasDelete(configGroup) || this._hasEdit(configGroup)) {
                        columnsContent += ".operationColumn([";

                        if (this._hasEdit(configGroup)) {
                                columnsContent += `utils.operation("Edit","edit"),`
                                tableEditHtml = `@edit="showEdit"`;
                        }

                        if (this._hasDelete(configGroup)) {
                                columnsContent += `utils.operation("Delete","delete"),`
                                tableDeleteHtml = `@delete="showDelete"`;
                        }
                        columnsContent += "])\r\n"
                }

                columnsContent += ".build()"
                return {
                        columns: columnsContent,
                        tableDeleteHtml,
                        tableEditHtml
                }
        }

        /**
         * 
         * @param {[]} req 
         */
        generateSelect(req) {
                let selectContent = "selects:new utils.SelectOperationBuilder()";

                let selectFields = req.filter(x => COMMON_UTILS.DEFAULT_ENUM_MATCHER(x));
                if (selectFields.length == 0) {
                        return {
                                selectContent: "",
                                selectHtml: ""
                        }
                }

                selectFields.forEach(x => {
                        selectContent += `.option("${x.name}","${x.label}")`;
                });

                selectContent += ".build(),";

                return {
                        selectContent,
                        selectHtml
                }
        }

        /**
         * 
         * @param {[]} req 
         */
        generateTimeRange(req) {
                let timeRangeContent = "timeRange:[new Date(),new Date()]";
                let timeFields = req.filter(x => x.type == "Date");
                if (timeFields.length > 0) {
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
         * @param {[]} req 
         */
        generateRadioGroup(req) {
                let radioGroupContent = "";
                let radioFields = req.filter(x => x.type == "String" && COMMON_UTILS.DEFAULT_RADIO_MATCHER(x.name));
                if (radioFields.length == 0) {
                        return {
                                radioGroupContent: "",
                                radioHtml: ""
                        };
                }

                radioGroupContent = `
                radioKey: "downSystemSiteName",
                keyword: "",
                radioOptions: new utils.RadioOperationBuilder()
                `;

                radioFields.forEach(x => {
                        radioGroupContent += `.option("#${x.name}","${x.label}")`
                })

                radioGroupContent += ".build(),"

                return {
                        radioGroupContent,
                        radioGroupHtml
                }
        }

        /**
         * @param {[]} req 
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
         * 
         * @param {*} req 
         */
        generateQuery(req) {
                let query = "query : { \r\n";
                req.forEach(x => {
                        query += `${x.name} : null, \r\n`;
                });

                query += "}"

                return { query };
        }

        /**
        * Init table columns ,convert 'sql type' to 'java type'
        * 
        * @private
        * @param {Table} table 
        */
        _initTable(table) {
                OBJECT.forEach(table.columns, (_, column) => {
                        column.type = getJavaType(column.type);
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