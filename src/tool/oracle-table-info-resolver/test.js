const { resolveFromCsvString } = require("../csv-resolver/csv-resolver");
const { FILE } = require("../../libs/file");
const STRING_RESOLVER = x => x.replace(/\"/g, "\"");
let resolvers = [
        {
                name: "key",
                doResolve: STRING_RESOLVER
        },
        {
                name: "column",
                doResolve: STRING_RESOLVER
        },
        {
                name: "fullName",
                doResolve: STRING_RESOLVER
        },
];

let sql = "";
resolveFromCsvString(FILE.read("./test.csv"), resolvers, true, false).forEach(x => {
        if (!x.fullName)
                return;

        x.fullName = x.fullName.trim();
        if (x.fullName == "#N/A")
                return;
        sql += `UPDATE @table Set @column='${x.fullName}' WHERE CHANNEL_NO ='${x.key}'\r\n`;
});

FILE.write("1.sql", sql);
