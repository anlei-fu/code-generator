const { resolveFromCsvString } = require("../csv-resolver/csv-resolver");
const { FILE } = require("../../libs/file");
const { DIR } = require("../../libs/dir");
const { ARRAY } = require("../../libs/utils");
const { OBJECT } = require("../../libs/utils");
const { NamingStrategy } = require("../../libs/naming-strategy");

const STRING_RESOLVER = x =>x.replace(/\"/g, "\"");

function parse(db) {
        DIR.create("./outputs");
        DIR.create("./outputs/" + db);

        let content = FILE.read("./resource/tables.csv");
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
                        doResolve: STRING_RESOLVER
                },
                {
                        name: "isPk",
                        doResolve: x => STRING_RESOLVER(x).includes("PK")
                },
                {
                        name: "description",
                        doResolve: STRING_RESOLVER
                }
        ];

        let items = resolveFromCsvString(content, resolvers, true, false);
        groups = ARRAY.groupBy(items, item => item.table);

        let tables = [];
        groups.forEach((column, tableName) => {
                if (!tableName || tableName == "")
                        return;
                

                let table = {
                        name: NamingStrategy.toCamel(tableName),
                        rawName:tableName,
                        columns: {}
                };

                column.forEach(column => {
                        if (!column.column || column.column == "")
                                return;

                        column.name = NamingStrategy.toCamel(column.column);
                        column.rawName = column.column
                        column.type = {
                                name: column.dataType,
                                length: column.dataLength
                        }

                        table.columns[column.column] = column;
                        delete column.table;
                        delete column.column;
                        delete column.dataType;
                        delete column.dataLength;
                });

                tables.push(table);
        });

        let tableGroups = ARRAY.groupBy(tables, x => x.rawName.split("_")[0].toLowerCase());
        let groupContent = "";
        let groupTemplate = FILE.read("./templates/group.js");
        let subAllTempalte = FILE.read("./templates/sub-all-table.js");
        let allTemplate = FILE.read("./templates/all.js");
        tableGroups.forEach((tabs,group) => {

                DIR.create(`./outputs/${db}/${group}`);

                let tableContent = "";
                tabs.forEach(x => {
                        let content = OBJECT.text(x, x.name);
                        content = content.replace("let ", "exports.")
                        FILE.write(`./outputs/${db}/${group}/${x.name}.js`, content);
                        tableContent += `        ${x.name}:require("./${x.name}").${x.name},\r\n`;
                });

                FILE.write(`./outputs/${db}/${group}/all.js`, subAllTempalte.replace("@content", tableContent.trimRight()));
                groupContent += groupTemplate.replace(/@group/g, group);
        })

        FILE.write(`./outputs/${db}/all.js`, allTemplate.replace("@content", groupContent.trimRight()));
}

parse("fd");