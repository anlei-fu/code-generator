const { resolveFromCsvString } = require("./../../../csv-resolver/csv-resolver");
const { FILE } = require("./../../../../../libs/file");
const { DIR } = require("./../../../../../libs/dir");
const { STR } = require("./../../../../../libs/str");
const { ARRAY } = require("./../../../../../libs/utils");
const { OBJECT } = require("./../../../../../libs/utils");
const { renderMarkDown } = require("./mark-down-render");
const { NamingStrategy } = require("./../../../../../libs/naming-strategy");

const STRING_RESOLVER = x => x.replace(/\"/g, "\"");

const NAME_FIELD_MATCHER = x => {
        return STR.endsWithAny(x.toLowerCase(), [
                "name",
                "company",
                "account",
        ])
}

/**
 * Resolve csv to table infos
 * 
 * @param {String} project  project name
 * @param {(String)=>Boolean} validateTable , check table is valid by table name
 */
function resolve(project, validateTable = defaultValidate) {
        DIR.create(`${__dirname}/outputs`);
        DIR.create(`${__dirname}/outputs/` + project);

        let csv = FILE.read(`${__dirname}/resource/${project}.csv`);
        let resolvers = [
                {
                        name: "table",
                        doResolve: STRING_RESOLVER
                },
                {
                        name: "column",
                        doResolve: STRING_RESOLVER
                },
                {
                        name: "dataType",
                        doResolve: STRING_RESOLVER
                },
                {
                        name: "dataLength",
                        doResolve: STRING_RESOLVER
                },
                {
                        name: "nullable",
                        doResolve: text => text == "Y"
                },
                {
                        name: "isPk",
                        doResolve: text => STRING_RESOLVER(text).includes("PK")
                },
                {
                        name: "description",
                        doResolve: STRING_RESOLVER
                },
                {
                        name: "tableDescription",
                        doResolve: STRING_RESOLVER
                }
        ];

        // resolve all columns from csv file
        let allColumnsMetaInfos = resolveFromCsvString(csv, resolvers, true, true);

        // group columns by it's table 
        groups = ARRAY.groupBy(allColumnsMetaInfos, item => item.table);

        // merge columns into table
        let tables = [];
        groups.forEach((columns, tableName) => {
                if (!tableName || tableName == "")
                        return;

                let table = {
                        name: NamingStrategy.toCamel(tableName),
                        rawName: tableName,
                        columns: {},
                };

                // check is valid table (excludes temp-table or test-table)
                if (!validateTable(table.name))
                        return;

                columns.forEach(column => {
                        if (!column.column || column.column == "")
                                return;

                        column.name = NamingStrategy.toCamel(column.column);
                        table.description = column.tableDescription;
                        column.rawName = column.column
                        column.type = {
                                name: column.dataType,
                                length: column.dataLength
                        }
                        table.columns[column.name] = column;

                        // set name column
                        if (!table.nameColumn && NAME_FIELD_MATCHER(column.name))
                                table.nameColumn = column.name;

                        // set pk column
                        if (column.isPk)
                                table.primaryColumn = column.name;

                        // remove useless properties
                        delete column.table;
                        delete column.column;
                        delete column.dataType;
                        delete column.dataLength;
                        delete column.tableDescription
                });

                // try set pk column
                if (!table.primaryColumn)
                        analyzePrimaryColumn(table);

                tables.push(table);
        });

        // big data base(with lots of table), group by project prefix
        let tableGroups = ARRAY.groupBy(tables, x => x.rawName.split("_")[0].toLowerCase());
        let groupContent = "";
        let subAllTempalte = FILE.read("./templates/all.js");
        let allTemplate = FILE.read("./templates/all.js");
        tableGroups.forEach((tabs, group) => {
                DIR.create(`./outputs/${project}/${group}`);

                let tableContent = "";
                tabs.forEach(x => {
                        let content = OBJECT.text(x, x.name);
                        content = content.replace("let ", "exports.")
                        FILE.write(`./outputs/${project}/${group}/${x.name}.js`, content);
                        tableContent += `        ${x.name}:require("./${x.name}").${x.name},\r\n`;
                        groupContent += `        ${x.name}:require("./${group}/${x.name}").${x.name},\r\n`;
                });

                FILE.write(`./outputs/${project}/${group}/all.js`, subAllTempalte.replace("@content", tableContent.trimRight()));

        })

        FILE.write(`./outputs/${project}/all.js`, allTemplate.replace("@content", groupContent.trimRight()));

        renderMarkDown(project);
}

/**
 * Check is table valid
 * 
 * @param {String} name of table
 * @returns {boolean} 
 */
function defaultValidate(name) {
        return !STR.includesAny(name.toLowerCase(), [
                "tmp",
                "test",
                "temp"
        ]);
}

/**
 * Try set primary column if absent
 * 
 * @param {Table} table 
 */
function analyzePrimaryColumn(table) {

        // has any 'no' or 'id' column
        for (const key of Object.keys(table.columns)) {
                if (STR.equalAny(key.toLowerCase(), ["no", "id"])) {
                        table.columns[key].isPk = true;
                        table.primaryColumn = key;
                        return;
                }


        }

        // first column ends with 'no' or 'id'
        for (const key of Object.keys(table.columns)) {
                if (STR.endsWithAny(key.toLowerCase(), ["no", "id"])
                        && table.name.toLowerCase().includes(STR.replace(key.toLowerCase(), { "no": "", "id": "" }))) {
                        table.columns[key].isPk = true;
                        table.primaryColumn = key;
                        return;
                }
        }

}

/*---------------------------------------------------------------main--------------------------------------------------------------------------------*/
/**
 * exports csv file from database -> put into resource folder -> then excuete this file
 */

resolve("zd");