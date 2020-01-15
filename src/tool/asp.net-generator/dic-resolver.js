
const {LoggerFactory}=require("../logging/logger-factory");
const { FILE } = require("../../libs/file");
const { DIR } = require("../../libs/dir");
const { resolveFromCsvString } = require("../csv-resolver/csv-resolver");
const STRING_RESOLVER = x => x.replace(/\"/g, "\"");
const { OBJECT } = require("../../libs/utils");
const LOG =LoggerFactory.getLogger("dictionary-resolver");


const DEFAULT_RESOLVERS = [
        {
                name: "name",
                doResolve: STRING_RESOLVER,
        },
]

function resolve(project) {
        DIR.create(`./resource/${project}`);
        let content = FILE.read(`./resource/${project}-dic.csv`);
        let result = resolveFromCsvString(content, DEFAULT_RESOLVERS);

        let prefix=project == "fd"?"fdSystem":project=="zd"?"sys":"System";

        let model = {
                table: `${prefix}Dictionary`,
                text: project == "fd" ? "Description" : "Name",
                type: project == "fd" ? "BelongEnum" : "Type",
                value: "Value",
                defaultText: "--请选择--"
        }

        let output = {};
        result.forEach(x => {
                OBJECT.extend(x, model);
                output[x.name] = x;
        });

        content = OBJECT.export_(output, "dictionaryMatchers");

        FILE.write(`./resource/${project}/dictionaryMatchers.js`, content);
        LOG.info("finish resolve!");
}

/*-------------------------------------------------------------------resolve---------------------------------------------------------------------------*/
resolve("zd");