const { resolveFromCsvString, resolvers } = require("./../../src/generator/common/csv-resolver/csv-resolver");
const { FILE } = require("./../../src/libs/file");
const {OBJECT } = require("./../../src/libs/utils");
const convertors = [
        {
                name: "cityNo",
                doResolve: resolvers.STR
        },
        {
                name: "cityName",
                doResolve: resolvers.STR
        },
        {
                name: "status",
                doResolve: resolvers.STR
        },
        {
                name: "provinceNo",
                doResolve: resolvers.STR
        },
]

let obj= resolveFromCsvString(FILE.read("2.csv"),convertors);

FILE.write("dm_city.js",OBJECT.export_(obj,"dmCity"));
let t=0;
