const { resolveCsv } = require("./../csv-resolver/csv-resolver");
const { FILE } = require("./../../libs/file");
const { DIR } = require("./../../libs/dir");
const { ARRAY } = require("./../../libs/utils");
const { OBJECT } = require("./../../libs/utils");
const { NamingStrategy } = require("./../../libs/naming-strategy");

function parse(db) {
        DIR.create("./outputs");
        DIR.create("./outputs/" + db);

        let content = FILE.read("./resource/tables.csv");
        let resolvers = [
                {
                        name: "table",
                        resolver: x => NamingStrategy.toCamel(x.replace(/"/g, ""))
                },
                {
                        name: "column",
                        resolver: x => NamingStrategy.toCamel(x.replace(/"/g, ""))
                },
                {
                        name: "dataType",
                        resolver: x => NamingStrategy.toCamel(x.replace(/"/g, ""))
                },
                {
                        name: "dataLength",
                        resolver: x => parseInt(x.replace(/"/g, ""))
                },
                {
                        name: "nullable",
                        resolver: x => x == x.replace(/"/g, "")
                },
                {
                        name: "isPk",
                        resolver: x => x.replace(/"/g, "").includes("PK")
                },
                {
                        name: "description",
                        resolver: x => x.replace(/"/g, "")
                }
        ]

        let items = resolveCsv(content, resolvers);
        groups = ARRAY.groupBy(items, x => x.table);

        let tables = {};
        groups.forEach((value, key) => {
                if(!key|| key=="")
                   return;

                let table = {
                        name: key,
                        rawName:NamingStrategy.toHungary(key).toUpperCase(),
                        columns: {}
                };

                value.forEach(x => {
                        if(!x.column||x.column=="")
                             return;
                        x.name = x.column;
                        x.rawName=NamingStrategy.toHungary(x.column).toUpperCase()
                        x.type = {
                                name: x.dataType,
                                length: x.dataLength
                        }

                        table.columns[x.column] = x;
                        delete x.table;
                        delete x.column;
                        delete x.dataType;
                        delete x.dataLength;
                });
                tables[key] = table
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