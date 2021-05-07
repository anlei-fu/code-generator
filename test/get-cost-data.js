const { resolveFromCsvString } = require("../src/tools/csv-resolver/csv-resolver")
const { FILE, OBJECT } = require("../src/libs");
const csvResolver = require("../src/tools/csv-resolver/csv-resolver");


function main() {
        let csvStr = FILE.read("./1.csv");
        let data = csvResolver.resolveFromCsvString(csvStr, [
                csvResolver.resolvers.STR("time"),
                csvResolver.resolvers.NUMBER("cost"),
                csvResolver.resolvers.NUMBER("costPercent"),
                csvResolver.resolvers.NUMBER("show"),
                csvResolver.resolvers.NUMBER("showPercent"),
                csvResolver.resolvers.NUMBER("showPrice"),
                csvResolver.resolvers.NUMBER("click"),
                csvResolver.resolvers.NUMBER("clickPercent"),
                csvResolver.resolvers.NUMBER("clickRate"),
                csvResolver.resolvers.NUMBER("clickPrice"),
                csvResolver.resolvers.NUMBER("convert"),
                csvResolver.resolvers.NUMBER("convertPercent"),
                csvResolver.resolvers.NUMBER("convertPrice"),
                csvResolver.resolvers.NUMBER("convertRate"),

        ])

        let result = { list: data };
        result.xAxis = "time";
        result.configs = [
                { key: "cost" },
                { key: "costPercent", type: "bar" },
                { key: "show" },
                { key: "showPrice" },
                { key: "showPercent", type: "bar" },
                { key: "click" },
                { key: "clickPrice" },
                { key: "clickPercent", type: "bar" },
                { key: "clickRate" },
                { key: "convert" },
                { key: "convertPrice" },
                { key: "convertPercent", type: "bar" },
                { key: "convertRate" },
        ];

        FILE.write("get-cost.js", OBJECT.export_(result, "data"));
}

/*************************************************************************************main************************************************************************** */
main();