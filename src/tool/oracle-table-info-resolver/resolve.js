const { resolveFromCsvString } = require("../csv-resolver/csv-resolver");
const { FILE } = require("../../libs/file");
const { DIR } = require("../../libs/dir");
const { STR } = require("../../libs/str");
const { ARRAY } = require("../../libs/utils");
const { OBJECT } = require("../../libs/utils");
const { writeMarkDown } = require("./mark-down-writer");
const { NamingStrategy } = require("../../libs/naming-strategy");

const STRING_RESOLVER = x => x.replace(/\"/g, "\"");

/**
 * Resolve csv to table infos
 * 
 * @param {String} project  project name
 * @param {(String)=>Boolean} validateTable , check table is valid by table name
 */
function resolve(project, validateTable = x => !STR.includesAny(x.toLowerCase(), [
        "tmp",
        "test",
        "temp"
])) {
        DIR.create("./outputs");
        DIR.create("./outputs/" + project);

        let content = FILE.read(`./resource/${project}.csv`);
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
                        doResolve: x => x == "Y"
                },
                {
                        name: "isPk",
                        doResolve: x => STRING_RESOLVER(x).includes("PK")
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

        let allColumnsMetaInfos = resolveFromCsvString(content, resolvers, true, false);
        groups = ARRAY.groupBy(allColumnsMetaInfos, item => item.table);

        let tables = [];
        groups.forEach((columns, tableName) => {
                if (!tableName || tableName == "")
                        return;

                let table = {
                        name: NamingStrategy.toCamel(tableName),
                        rawName: tableName,
                        columns: {},
                };

                columns.forEach(column => {
                        if (!column.column || column.column == "")
                                return;

                        table.description = column.tableDescription;
                        column.name = NamingStrategy.toCamel(column.column);
                        column.rawName = column.column
                        column.type = {
                                name: column.dataType,
                                length: column.dataLength
                        }

                        table.columns[column.name] = column;

                        // remove useless properties
                        delete column.table;
                        delete column.column;
                        delete column.dataType;
                        delete column.dataLength;
                        delete column.tableDescription
                });

                if (validateTable(table.name))
                        tables.push(table);
        });

        // big data base, group by table project prefix
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

        writeMarkDown(project);
}

/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
resolve("fc");