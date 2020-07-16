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
        {
                name: "cityNo",
                doResolve: resolvers.STR
        },
        {
                name: "cityName",
                doResolve: resolvers.STR
        },
        {
                name: "districtNo",
                doResolve: resolvers.STR
        },
        {
                name: "districtName",
                doResolve: resolvers.STR
        },

        {
                name: "provinceId",
                doResolve: resolvers.STR
        },
        {
                name: "cityId",
                doResolve: resolvers.STR
        },

]

let obj= resolveFromCsvString(FILE.read("1.csv"),convertors);

FILE.write("area.js",OBJECT.export_(obj,"area"));
let t=0;
