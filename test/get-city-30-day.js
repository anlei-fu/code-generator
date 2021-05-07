const { resolveFromCsvString } = require("../src/tools/csv-resolver/csv-resolver")
const { FILE, OBJECT } = require("../src/libs");
const csvResolver = require("../src/tools/csv-resolver/csv-resolver");


function main() {
        let csvStr = FILE.read("./1.csv");
        let data = csvResolver.resolveFromCsvString(csvStr, [
                csvResolver.resolvers.STR("cityName"),
                csvResolver.resolvers.NUMBER("totalOrderCount"),
                csvResolver.resolvers.NUMBER("validOrderCount"),
                csvResolver.resolvers.NUMBER("validOrderRate"),
                csvResolver.resolvers.NUMBER("orderRate"),

        ])

        let result = { list: data };
        result.xAxis = "cityName";
        result.configs = [
                { key: "totalOrderCount", type: "bar" },
                { key: "validOrderCount" ,type: "bar"},
                { key: "validOrderRate",type: "bar" },
                { key: "orderRate",type: "bar"},
        ];

        FILE.write("C:/Users/Administrator/Desktop/Projects/code-generator/src/char-viewer/data/city-30-day.js", OBJECT.export_(result, "data"));
}

/*************************************************************************************main************************************************************************** */
main();