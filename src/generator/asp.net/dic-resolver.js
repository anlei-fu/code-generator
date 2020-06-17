
const {LoggerFactory}=require("./../common/logging/logger-factory");
const { FILE } = require("../../libs/file");
const { DIR } = require("../../libs/dir");
const { resolveFromCsvString } = require("../common//csv-resolver/csv-resolver");
const STRING_RESOLVER = x => x.replace(/\"/g, "\"");
const { OBJECT } = require("../../libs/utils");
const { STR } = require("../../libs/str");
const LOG =LoggerFactory.getLogger("dictionary-resolver");


const DEFAULT_RESOLVERS = [
        {
                name: "name",
                doResolve: STRING_RESOLVER,
        },
]

function resolve(project,table,text="Name",type="Type") {
        DIR.create(`./resource/${project}`);
        let content = FILE.read(`./resource/${project}-dic.csv`);
        let result = resolveFromCsvString(content, DEFAULT_RESOLVERS);

        let model = {
                table: table,
                text: text,
                type: type,
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
        let customerTemplate=FILE.read("./resource/customer-dic-matcher.js");
        content =STR.replace(customerTemplate,{
           "@table":table,
           "@text":text,
           "@type":type
        });
        FILE.write(`./resource/${project}/customerMatchers.js`,content );

        LOG.info("finish resolve!");
}

/*-------------------------------------------------------------------resolve---------------------------------------------------------------------------*/
resolve("fc","FcSystemDictionary");