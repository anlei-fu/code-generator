const { DIR } = require("./../../libs/dir");
const { STR } = require("./../../libs/str");
const { FILE } = require("./../../libs/file");
const { generate } = require("./../../sqls/model/model-generator")
const { resolve } = require("./../../sqls/model/resolver")
/**
 * 
 * @param {String} project 
 * @param {{host:String,port:number,db:String,user:String,password:String}} dbConfig 
 */
async function init(project, dbConfig) {

        // create project required folders
        makeAllFolders(project);

        let tables = await resolve(dbConfig, dbConfig.db);
        let root=`./output/${project}/config`;
        let tableNames=[];
        tables.forEach(x => {
                tableNames.push(x.name);
                writeConfig(root,x.name);
        });

        let content="";
        tableNames.forEach(x=>{
                content+=`        require("./${x}.js").${x}Config,\r\n`;
        });
        FILE.write(`${root}/all.js`,FILE.read("./templates/config-all.js").replace("@content",content.trimRight()));

        FILE.write(`./output/${project}/index.js`,FILE.read("./templates/generator.js").replace(/@project/g,project));
         
        // generate db info
        await generate(dbConfig, dbConfig.db, `./output/${project}/db`);
}

/**
 * 
 * @param {String} project 
 */
function makeAllFolders(project) {
        DIR.create(`./output/${project}`);
        DIR.create(`./output/${project}/db`);
        DIR.create(`./output/${project}/config`);
        DIR.create(`./output/${project}/src`);
        DIR.create(`./output/${project}/src/main`);
        DIR.create(`./output/${project}/src/main/java`);
        DIR.create(`./output/${project}/src/main/java/com`);

        let root = `./output/${project}/src/main/java/com/${project}`;
        DIR.create(root);
        DIR.create(`${root}/service`);
        DIR.create(`${root}/pojo`);
        DIR.create(`${root}/mapper`);
        DIR.create(`${root}/controller`);
        DIR.create(`${root}/service/impl`);
        DIR.create(`${root}/pojo/req`);
        DIR.create(`${root}/pojo/resp`);
        DIR.create(`${root}/pojo/entity`);
        DIR.create(`${root}/pojo/param`);
        DIR.create(`${root}/config`);
        DIR.create(`${root}/util`);
        DIR.create(`${root}/exception`);
        DIR.create(`./output/${project}/src/main/resource`)
        DIR.create(`./output/${project}/src/main/resource/mapper`)
        FILE.write(`./output/${project}/src/main/resource/application.properties`, "");
        DIR.create(`./output/${project}/src/test`);
        DIR.create(`./output/${project}/src/test/java`)
        DIR.create(`./output/${project}/src/test/java/com`);
        DIR.create(`./output/${project}/src/test/java/com/${project}`);
        FILE.copy("./templates/R.java", `${root}/pojo/resp/R.java`);
}

function writeConfig(root, table) {
        let templates = FILE.read("./templates/config-item.js");
        let patterns = {
                "@name": STR.upperFirstLetter(table),
                "@sname": table
        };
        templates = STR.replace(templates, patterns);
        FILE.write(`${root}/${table}.js`, templates);
}

exports.init = init;