const { OBJECT } = require("./../../libs/utils")
const { STR } = require("./../../libs/str")
const { DIR } = require("./../../libs/dir")
const {FILE} =require("./../../libs/file")
const { getCSharpType } = require("./utils")

const { SelectAnalyzer, AddAnalyzer, ControlAnlyzer, ColumnAnalyzer, AutoSetValueColumnAnalyzer } = require("./analyzer")
const selectAnalyzer = new SelectAnalyzer();
const addAnalyzer = new AddAnalyzer();
const controlAnlyzer = new ControlAnlyzer();
const columnAnalyzer = new ColumnAnalyzer();
const defaultValueAnalyzer = new AutoSetValueColumnAnalyzer();


function init(table, config) {
        createFolder(config.project,STR.upperFirstLetter(table.name));
        config.table = table;
        config.name = STR.upperFirstLetter(table.name);
        config.prefix = config.prefix || "M";
        OBJECT.forEach(table.columns, (key, value) => {
                value.type = getCSharpType(value.type);
                value.name = STR.upperFirstLetter(value.name);
                value.description= value.description.trim().split(":")[0];
        });

        config.operations = config.operations || [];

        if (config.add || config.edit)
                buildAddConfig(table, config);

        if (config.edit) {
                config.operations.push({
                        condition: "",
                        function: "add(@item.Id,'编辑')"
                });
        }

        if (config._delete) {
                config.operations.push({
                        condition: "",
                        function: "_delete(@item.Id)"
                });
        }

        analyzeDefaultValues(config);
        buildSelectConfig(table, config);
        buildTableConfig(table, config);

        if (config.exportExcel)
                buildExportExcel(table, config);

        if (config.importExcel)
                buildImportExcel(table, config);

        let output=OBJECT.text(config,"test").replace("let test","exports.config");
        FILE.write(`./outputs/${config.project}--${config.name}/config.js`,output);
}

function createFolder(project,name) {
        DIR.create("./outputs");
        DIR.create(`./outputs/${project}--${name}`);
        FILE.copy("./templates/build.js",`./outputs/${project}--${name}/build.js`);
}

/**
 * 
 * @param {Config} config 
 */
function analyzeDefaultValues(config) {
        config.defaultValues = defaultValueAnalyzer.analyzeTable(config.table);
}


/**
 * 
 * @param {Table} table 
 * @param {Config} config 
 */
function buildImportExcel(table, config) {
        let importExcelConfig = {
                items: []
        };

        OBJECT.forEach(table.columns, (key, value) => {
                let item = {
                        header: value.description,
                        content: "",
                }

                if (controlAnlyzer.shouldBeSelect(value)) {
                        item.content = `@item.GetDataValue("${key}Name")`
                } else {
                        item.content = `@item.${key}`;
                }

                importExcelConfig.items.push(item);
        });

        config.tableConfig = importExcelConfig;
}

/**
 * 
 * @param {Table} table 
 * @param {Config} config 
 */
function buildExportExcel(table, config) {

        columnAnalyzer._index = 0;
        let exportExcelConfig = {
                items: [],
                sql: {
                        conditions: [],
                        joins: [],
                        orderBy: []
                }
        };

        OBJECT.forEach(table.columns, (key, value) => {
                let item = {
                        header: value.description,
                        content: "",
                }

                let analyzeResult = columnAnalyzer.analyzeColumn(value);
                item.content = analyzeResult.gettter

                if (selectAnalyzer.shouldBeCandidate(value))
                        exportExcelConfig.sql.conditions.push(``);


                exportExcelConfig.items.push(item);
        });

        if (table.columns["createTime"]) {
                exportExcelConfig.sql.conditions.push("");
                exportExcelConfig.sql.orderBy = "ORDER BY t.CREATE_TIME DESC";
        }

        if (table.columns["createdTime"]) {
                exportExcelConfig.sql.conditions.push("");
                exportExcelConfig.sql.orderBy = "ORDER BY t.CREATED_TIME DESC";
        }
        config.tableConfig = exportExcelConfig;
}

/**
 * 
 * @param {Table} table 
 * @param {Config} config 
 */
function buildSelectConfig(table, config) {
        let selectConfig = {
                selects: [],
                texts: [],
                getListSql: {
                        columns: [],
                        joins: [],
                        conditions: ["1=1"],
                        orderBy: "",
                },
                getCountSql: {
                        conditions: ["1=1"],
                },
        }

        columnAnalyzer._index = 0;

        OBJECT.forEach(table.columns, (key, value) => {
                if (!selectAnalyzer.shouldBeCandidate(value))
                        return;

                let analyzeResult = columnAnalyzer.analyzeColumn(value);
                if (controlAnlyzer.shouldBeSelect(value)) {
                        analyzeResult.select.lable = value.description;
                        selectConfig.selects.push(analyzeResult.select);
                } else {
                        analyzeResult.text.lable = value.description;
                        selectConfig.texts.push(analyzeResult.text);
                }

                selectConfig.getListSql.columns.push(analyzeResult.column);
                selectConfig.getListSql.conditions.push(`@&t.${value.name}`);
                if (analyzeResult.join)
                        selectConfig.getListSql.joins.push(analyzeResult.join);
                selectConfig.getCountSql.conditions.push(`@&t.${value.name}`);
        });

        if (table.columns["createTime"]) {
                selectConfig.getListSql.conditions.push("{&@t.CreateTime >= to_date($ST,'YYYY-MM-DD')}");
                selectConfig.getListSql.conditions.push("{&@t.CreateTime < to_date($ET,'YYYY-MM-DD')}");
                selectConfig.getCountSql.conditions.push("{&@t.CreateTime >= to_date($ST,'YYYY-MM-DD')}");
                selectConfig.getCountSql.conditions.push("{&@t.CreateTime < to_date($ET,'YYYY-MM-DD')}");
                selectConfig.getListSql.orderBy = "ORDER BY t.CREATE_TIME DESC";
        }

        if (table.columns["createdTime"]) {
                selectConfig.getListSql.conditions.push("{&@t.CreatedTime >= to_date($ST,'YYYY-MM-DD')}");
                selectConfig.getListSql.conditions.push("{&@t.CreatedTime < to_date($ET,'YYYY-MM-DD')}");
                selectConfig.getCountSql.conditions.push("{&@t.CreatedTime >= to_date($ST,'YYYY-MM-DD')}");
                selectConfig.getCountSql.conditions.push("{&@t.CreatedTime < to_date($ET,'YYYY-MM-DD')}");
                selectConfig.getListSql.orderBy = "ORDER BY t.CREATED_TIME DESC";
        }

        selectConfig.getListSql.columns = selectConfig.getListSql.columns.sort();
        selectConfig.getListSql.conditions = selectConfig.getListSql.conditions.sort();
        selectConfig.getCountSql.conditions = selectConfig.getCountSql.conditions.sort();

        config.selectConfig = selectConfig;
}

/**
 * 
 * @param {Table} table 
 * @param {Config} config 
 */
function buildTableConfig(table, config) {
        let tableConfig = {
                items: []
        };

        OBJECT.forEach(table.columns, (key, value) => {
                let item = {
                        header: value.description,
                        content: "",
                }

                if (controlAnlyzer.shouldBeSelect(value)) {
                        item.content = `@item.GetDataValue("${value.name}Name")`
                } else {
                        item.content = `@item.${value.name}`;
                }

                tableConfig.items.push(item);
        });

        config.tableConfig = tableConfig;
}

/**
 * 
 * @param {Table} table 
 * @param {Config} config 
 */
function buildAddConfig(table, config) {
        let addConfig = {
                selects: [],
                texts: [],
                required: [],
        };

        OBJECT.forEach(table.columns, (key, value) => {
                if (!addAnalyzer.shouldBeCandidate(value))
                        return;

                let analyzeResult = columnAnalyzer.analyzeColumn(value);
                if (controlAnlyzer.shouldBeSelect(value)) {
                        analyzeResult.select.lable = value.description;
                        addConfig.selects.push(analyzeResult.select);
                } else {
                        analyzeResult.text.lable = value.description;
                        addConfig.texts.push(analyzeResult.text);
                }
        });

        config.addConfig = addConfig;
}




exports.init = init