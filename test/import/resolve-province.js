const { resolveFromCsvString, resolvers } = require("./../../src/generator/common/csv-resolver/csv-resolver");
const { FILE } = require("./../../src/libs/file");
const {OBJECT } = require("./../../src/libs/utils");
const convertors = [
        {
                name: "provinceNo",
                doResolve: resolvers.STR
        },
        {
                name: "provinceName",
                doResolve: resolvers.STR
        },
]

let obj= resolveFromCsvString(FILE.read("3.csv"),convertors);

FILE.write("dm_province.js",OBJECT.export_(obj,"dmProvince"));
let t=0;
