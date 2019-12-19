const { DIR } = require("./../../libs/dir");
const { STR } = require("./../../libs/str");
const { FILE } = require("./../../libs/file");
const { generate } = require("./../../sqls/model/model-generator")
const { resolve } = require("./../../sqls/model/resolver")

/**
 * Initialize a spring boot CRUD web project 
 * 
 * @param {String} project 
 * @param {{host:String,port:number,db:String,user:String,password:String}} dbConfig 
 */
async function init(project, dbConfig) {

        // create project required folders
        makeAllFolders(project, dbConfig);

        // generate all items
        let tables = await resolve(dbConfig, dbConfig.db);
        let root = `./output/${project}/config`;
        let tableNames = [];
        tables.forEach(x => {
                tableNames.push(x.name);

                let pk;
                for(const c in x.columns){
                    pk=pk||c;

                    if(x.columns[c].isPk){
                            pk=x.columns[c].name;
                            break;
                    }
                }
                pk=pk||x.columns[key].name;
                generateConfigItem(root, x.name,pk);
        });

        // create all.js
        let content = "";
        tableNames.forEach(x => {
                content += `        require("./${x}.js").${x}Config,\r\n`;
        });
        FILE.write(`${root}/all.js`, FILE.read("./templates/config-all.js").replace("@content", content.trimRight()));

        // create index.js
        FILE.write(`./output/${project}/index.js`, FILE.read("./templates/generator.js").replace(/@project/g, project));

        FILE.copy('./templates/packages.js',`./output/${project}/packages.js`);

        // generate all table infos
        await generate(dbConfig, dbConfig.db, `./output/${project}/db`);
}

/**
 * Create all folders and files of project structure
 * 
 * @param {String} project 
 */
function makeAllFolders(project, dbConfig) {

        // base structure
        DIR.create(`./output/`);
        DIR.create(`./output/${project}`);
        DIR.create(`./output/${project}/db`);
        DIR.create(`./output/${project}/config`);
        DIR.create(`./output/${project}/${project}`);

        // maven project folders
        DIR.create(`./output/${project}/${project}/src`);
        DIR.create(`./output/${project}/${project}/src`);
        DIR.create(`./output/${project}/${project}/src/main`);
        DIR.create(`./output/${project}/${project}/src/main/java`);
        DIR.create(`./output/${project}/${project}/src/main/java/com`);
        let root = `./output/${project}/${project}/src/main/java/com/${project}`;
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

        // resource items
        DIR.create(`./output/${project}/${project}/src/main/resource`)
        DIR.create(`./output/${project}/${project}/src/main/resource/mapper`)
        FILE.write(`./output/${project}/${project}/src/main/resource/application.properties`, "");

        // test items
        DIR.create(`./output/${project}/${project}/src/test`);
        DIR.create(`./output/${project}/${project}/src/test/java`)
        DIR.create(`./output/${project}/${project}/src/test/java/com`);
        DIR.create(`./output/${project}/${project}/src/test/java/com/${project}`);

        // all default files
        FILE.copy("./templates/R.java", `${root}/pojo/resp/R.java`);
        FILE.copy("./templates/WebConfig.java", `${root}/config/WebConfig.java`);
        FILE.copy("./templates/SwaggerConfig.java", `${root}/config/SwaggerConfig.java`);
        FILE.copy("./templates/ValidatorConfig.java", `${root}/config/ValidatorConfig.java`);
        FILE.copy("./templates/logback.xml", `./output/${project}/${project}/src/main/resource/logback.xml`);

        // pom.xml
        let pom = FILE.read("./templates/pom.xml")
                .replace(/@project/g, project);
        FILE.write(`./output/${project}/${project}/pom.xml`, pom);

        // application.properties
        let patterns = {
                "@dbHost": dbConfig.host,
                "@dbPort": dbConfig.port,
                "@dbName": dbConfig.db,
                "@dbUser": dbConfig.user,
                "@dbPassword": dbConfig.password
        };
        let config = FILE.read("./templates/application.properties");
        FILE.write(`./output/${project}/${project}/src/main/resource/application.properties`, STR.replace(config, patterns));
}

/**
 * Generate confi item
 * 
 * @param {String} root 
 * @param {String} tableName 
 */
function generateConfigItem(root, tableName,primaryKey) {
        let templates = FILE.read("./templates/config-item.js");
        let patterns = {
                "@name": STR.upperFirstLetter(tableName),
                "@sname": tableName,
                "@key":STR.upperFirstLetter(primaryKey),
                "@skey":primaryKey
        };
        templates = STR.replace(templates, patterns);
        FILE.write(`${root}/${tableName}.js`, templates);
}

exports.init = init;