const { resolveFromCsvString } = require("../src/tools/csv-resolver/csv-resolver")
const { FILE, OBJECT } = require("../src/libs");
const csvResolver = require("../src/tools/csv-resolver/csv-resolver");


function main() {
        let csvStr = FILE.read("./1.csv");
        let data = csvResolver.resolveFromCsvString(csvStr, [
                csvResolver.resolvers.STR("provinceName"),
                csvResolver.resolvers.NUMBER("totalOrderCount"),
                csvResolver.resolvers.NUMBER("validOrderCount"),
                csvResolver.resolvers.NUMBER("validOrderRate"),
                csvResolver.resolvers.NUMBER("orderRate"),

        ])

        let result = { list: data };
        result.xAxis = "provinceName";
        result.configs = [
                { key: "totalOrderCount", type: "bar" },
                { key: "validOrderCount" ,type: "bar"},
                { key: "validOrderRate",type: "bar" },
                { key: "orderRate",type: "bar"},
        ];

        FILE.write("get-province.js", OBJECT.export_(result, "data"));
}

/*************************************************************************************main************************************************************************** */
main();