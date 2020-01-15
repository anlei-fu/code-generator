const { OBJECT } = require("../../libs/utils");
const { STR } = require("../../libs/str");
const { DIR } = require("../../libs/dir");
const { FILE } = require("../../libs/file");
const { getCSharpType } = require("./utils");
const {
        SelectAnalyzer,
        InsertAnalyzer,
        ControlAnlyzer,
        ColumnAnalyzer,
        DelfaultValueAnalyzer
} = require("./analyzer");

const selectAnalyzer = new SelectAnalyzer();
const insertAnalyzer = new InsertAnalyzer();
const controlAnalyzer = new ControlAnlyzer();
const columnAnalyzer = new ColumnAnalyzer();
const defaultValueAnalyzer = new DelfaultValueAnalyzer();

/**
 * Init Generator config
 * 
 * @param {Table} table 
 * @param {GeneratorConfig} config 
 */
function init(table, config) {

        // create project structure
        createFolder(config.project, STR.upperFirstLetter(table.name),config.root);

        // init controller analyzer
        controlAnalyzer.useDictionaryMatchers(require(`./resource/${config.abbrOfProject}/dictionaryMatchers.js`).dictionaryMatchers);
        controlAnalyzer.useCustomerMatchers(require(`./resource/${config.abbrOfProject}/customerMatchers.js`).customerMatchers);
        controlAnalyzer.useRelation(generateRelationMatchers(config.abbrOfProject, table.name));
        columnAnalyzer.controlAnalyzer = controlAnalyzer;
        selectAnalyzer.controlAnalyzer = controlAnalyzer;

        config.table = table;
        config.name = STR.upperFirstLetter(table.name);
        config.prefix = config.prefix || "M";
        config.operations = config.operations || [];

        // init table conver sql type to c# type and nomarlize description
        OBJECT.forEach(table.columns, (key, column) => {
                column.type = getCSharpType(column.type);
                column.name = STR.upperFirstLetter(column.name);
                column.description = column.description.trim().split(":")[0];
        });

        analyzeDefaultValues(config);
        buildSelectConfig(table, config);
        buildTableConfig(table, config);

        // build add config
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

        // build export excel config
        if (config.exportExcel)
                buildExportExcel(table, config);

        // build import excel config
        if (config.importExcel)
                buildImportExcel(table, config);

        // write config
        let output = OBJECT.text(config, "test").replace("let test", "exports.config");
        FILE.write(`./outputs/${config.project}--${config.name}/config.js`, output);
}

/**
 * Create project structure
 * 
 * @param {String} project  name
 * @param {String} name of table upper case 
 */
function createFolder(project, name, root) {
        DIR.create("./outputs");
        DIR.create(`./outputs/${project}--${name}`);
        FILE.copy("./resource/build.js", `./outputs/${project}--${name}/build.js`);
        let pattern = {
                "@project": project,
                "@name": name,
                "@root": root
        }
        let merge=FILE.read("./resource/merge.js");
        merge=STR.replace(merge,pattern);

        FILE.write(`./outputs/${project}--${name}/merge.js`,merge);
}

function generateRelationMatchers(project, tableName) {
        let relations = require(`./../table-relation/outputs/${project}.js`).relations[tableName];
        if (!relations)
                return {};

        let tables = require(`./../oracle-table-info-resolver/outputs/${project}/all.js`).all;
        let matchers = {};
        relations.forEach(x => {
                if (tables[x.otherTable].nameColumn && tables[x.otherTable].primaryColumn) {
                        matchers[x.selfColumn] = {
                                match: columnName => columnName == x.selfColumn,
                                lable: tables[x.otherTable].description,
                                service: x.otherTable,
                                name: x.selfColumn,
                                text: tables[x.otherTable].nameColumn,
                                value: tables[x.otherTable].primaryColumn,
                                defaultText: "--???--"
                        };
                }
        });

        return matchers;
}

/**
 * Analyze default values for insert and update
 * 
 * @param {GeneratorConfig} config 
 */
function analyzeDefaultValues(config) {
        config.defaultValues = defaultValueAnalyzer.analyzeTable(config.table);
}


/**
 * Build import excel config
 * 
 * @param {GeneratorConfig} config 
 */
function buildImportExcel(config) {
        let importExcelConfig = {
                items: []
        };

        OBJECT.forEach(config.table.columns, (key, column) => {
                let item = {
                        header: column.description,
                        content: "",
                        type: column.type
                }

                item.content = controlAnalyzer.shouldBeSelect(column)
                        ? `@item.GetDataValue("${key}Name")`
                        : `@item.${key}`;

                importExcelConfig.items.push(item);
        });

        config.tableConfig = importExcelConfig;
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

        // must reset index
        columnAnalyzer.index = 0;

        OBJECT.forEach(table.columns, (_, column) => {
                if (!selectAnalyzer.shouldBeCandidate(column))
                        return;

                let analyzeResult = columnAnalyzer.analyzeColumn(column);
                buildControlConfig(analyzeResult, selectConfig, column);

                if (analyzeResult.column.indexOf("t.") == -1)
                        selectConfig.getListSql.columns.push(analyzeResult.column);

                selectConfig.getListSql.conditions.push(`{&@t.${column.name}}`);

                if (analyzeResult.join)
                        selectConfig.getListSql.joins.push(analyzeResult.join);

                selectConfig.getCountSql.conditions.push(`{&@t.${column.name}}`);
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

        // sort items
        selectConfig.getListSql.columns = selectConfig.getListSql.columns.sort();
        selectConfig.getListSql.conditions = selectConfig.getListSql.conditions.sort();
        selectConfig.getCountSql.conditions = selectConfig.getCountSql.conditions.sort();

        config.selectConfig = selectConfig;
}

/**
 * Build control config
 * 
 * @param {AddConfig|SelectConfig} config 
 * @param {Column} column 
 */
function buildControlConfig(analyzeResult, config, column) {
        if (controlAnalyzer.shouldBeSelect(column)) {
                analyzeResult.select.lable = column.description;
                analyzeResult.select.name = column.name;
                config.selects.push(analyzeResult.select);
        } else {
                analyzeResult.text.lable = column.description;
                config.texts.push(analyzeResult.text);
        }
}

/**
 * Build table config
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

                item.content = controlAnalyzer.shouldBeSelect(value)
                        ? `@item.GetDataValue("${value.name}Name")`
                        : `@item.${value.name}`

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

        OBJECT.forEach(table.columns, (key, column) => {
                if (!insertAnalyzer.shouldBeCandidate(column))
                        return;

                let analyzeResult = columnAnalyzer.analyzeColumn(column);
                buildControlConfig(analyzeResult, addConfig, column);
        });

        config.addConfig = addConfig;
}

exports.init = init