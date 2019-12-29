const { resolveFromCsvString } = require("../csv-resolver/csv-resolver");
const { FILE } = require("../../libs/file");
const { DIR } = require("../../libs/dir");
const { ARRAY } = require("../../libs/utils");
const { OBJECT } = require("../../libs/utils");
const { NamingStrategy } = require("../../libs/naming-strategy");

function parse(db) {
        DIR.create("./outputs");
        DIR.create("./outputs/" + db);

        let content = FILE.read("./resource/tables.csv");
        let resolvers = [
                {
                        name: "table",
                        doResolve: x => NamingStrategy.toCamel(x.replace(/"/g, ""))
                },
                {
                        name: "column",
                        doResolve: x => NamingStrategy.toCamel(x.replace(/"/g, ""))
                },
                {
                        name: "dataType",
                        doResolve: x => NamingStrategy.toCamel(x.replace(/"/g, ""))
                },
                {
                        name: "dataLength",
                        doResolve: x => parseInt(x.replace(/"/g, ""))
                },
                {
                        name: "nullable",
                        doResolve: x => x == x.replace(/"/g, "")
                },
                {
                        name: "isPk",
                        doResolve: x => x.replace(/"/g, "").includes("PK")
                },
                {
                        name: "description",
                        doResolve: x => x.replace(/"/g, "")
                }
        ];

        let items = resolveFromCsvString(content, resolvers,true,false);
        groups = ARRAY.groupBy(items, item => item.table);

        let tables = {};
        groups.forEach((column, columnName) => {
                if (!columnName || columnName == "")
                        return;

                let table = {
                        name: columnName,
                        rawName: NamingStrategy.toHungary(columnName).toUpperCase(),
                        columns: {}
                };

                column.forEach(column => {
                        if (!column.column || column.column == "")
                                return;

                        column.name = column.column;
                        column.rawName = NamingStrategy.toHungary(column.column).toUpperCase()
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

                tables[columnName] = table
        })

        let tableContent = "";
        OBJECT.forEach(tables, (key, value) => {
                let content = OBJECT.text(value, key);
                content = content.replace("let ", "exports.")
                FILE.write(`./outputs/${db}/${key}.js`, content);
                tableContent += `        ${key}:require("./${key}").${key},\r\n`;
        })

        FILE.write(`./outputs/${db}/tables.js`, FILE.read("./templates/main.js").replace("@content", tableContent));
}

parse("fd");