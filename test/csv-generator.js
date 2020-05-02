const { resolveFromCsvString } = require("./../src/generator/common/csv-resolver/csv-resolver");
const { FILE } = require("./../src/libs/file");

function main() {
        let content = FILE.read("1.csv");
        let output = "";
        let resolvers = [
                {
                        name: "channelNo",
                        doResolve: x => x
                },
                {
                        name: "channelName",
                        doResolve: x => x,
                },
                {
                        name: "companyName",
                        doResolve: x => x,
                },
                {
                        name: "status",
                        doResolve: x => x,
                },
                {
                        name: "date",
                        doResolve: x => x,
                },

        ]
        resolveFromCsvString(content, resolvers).forEach(x => {
                output += `update table set date=to_date('${x.date}','yyyy/MM/dd') where channel_no = '${x.channelNo}' \r\n`;
        });

        FILE.write("1.sql", output);
}

/***************************************************************main****************************************************************/

main();