const { DIR } = require("./../../libs/dir");
const { STR } = require("./../../libs/str");
const { FILE } = require("./../../libs/file");
const { generate } = require("./../sqls/model/model-generator");
const { resolve } = require("./../sqls/model/resolver");
const { ConfigBuilderGenerator } = require("./config-template-generator");

const { LoggerFactory } = require("./../logging/logger-factory");
const LOG = LoggerFactory.getLogger("spring-boot-web-CRUD-project-initializer");
const COMPYRIGHT=FILE.read("./templates/copyright.java").replace("@date",new Date().toLocaleString());

/**
 * Initialize a spring boot CRUD web project 
 * 
 * @param {String} project 
 * @param {{host:String,port:number,db:String,user:String,password:String}} dbConfig 
 */
async function init(project, dbConfig) {

        // create project required folders
        makeAllFolders(project, dbConfig);

        // generate all items config
        let tables = await resolve(dbConfig, dbConfig.db);
        let root = `./output/${project}/config`;
        let tableNames = [];
        tables.forEach(x => {
                tableNames.push(x.name);

                let pk;
                for (const c in x.columns) {
                        pk = pk || x.columns[c];

                        if (x.columns[c].isPk) {
                                pk = x.columns[c];
                                break;
                        }
                }
                pk = pk || x.columns[key].name;
                generateConfigItem(root, x, pk);
        });

        // create all.js
        let content = "";
        tableNames.forEach(x => {
                content += `        require("./${x}.js").${x}Config,\r\n`;
        });
        FILE.write(`${root}/all.js`,COMPYRIGHT+FILE.read("./templates/config-all.js").replace("@content", content.trimRight()));

        // create index.js
        copy("./templates/generator.js",`./output/${project}/index.js` , project);

        copy('./templates/packages.js', `./output/${project}/packages.js`,project);

        // generate all table infos
        await generate(dbConfig, dbConfig.db, `./output/${project}/db`);

        LOG.info(`project ${project} init finished!`);
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
        DIR.create(`${root}/utils`);
        DIR.create(`${root}/validate`);
        DIR.create(`${root}/validate/annotation`);
        DIR.create(`${root}/validate/validator`);
        DIR.create(`${root}/exception`);

        // resource items
        DIR.create(`./output/${project}/${project}/src/main/resources`)
        DIR.create(`./output/${project}/${project}/src/main/resources/mapper`)

        // test items
        DIR.create(`./output/${project}/${project}/src/test`);
        DIR.create(`./output/${project}/${project}/src/test/java`)
        DIR.create(`./output/${project}/${project}/src/test/java/com`);
        DIR.create(`./output/${project}/${project}/src/test/java/com/${project}`);

        // all default files
        copy("./templates/R.java", `${root}/pojo/resp/R.java`, project);
        copy("./templates/WebConfig.java", `${root}/config/WebConfig.java`, project);
        copy("./templates/SwaggerConfig.java", `${root}/config/SwaggerConfig.java`, project);
        copy("./templates/ValidatorConfig.java", `${root}/config/ValidatorConfig.java`, project);
        copy("./templates/logback.xml", `./output/${project}/${project}/src/main/resources/logback.xml`, project);

        // page req
        copy("./templates/PageReq.java", `${root}/pojo/req/PageReq.java`, project);

        // page helper util
        copy("./templates/PageHelperUtils.java", `${root}/utils/PageHelperUtils.java`, project);

        // build.gradle
        copy("./templates/build.gradle", `./output/${project}/${project}/build.gradle`, project);

        copy("./templates/Application.java", `./output/${project}/${project}/src/main/java/com/${project}/Application.java`, project);

        // annotation
        copyFolder("./templates/annotation", `${root}/validate/annotation`, project);

        // validator
        copyFolder("./templates/validator", `${root}/validate/validator`, project);

        // application.properties
        let patterns = {
                "@dbHost": dbConfig.host,
                "@dbPort": dbConfig.port,
                "@dbName": dbConfig.db,
                "@dbUser": dbConfig.user,
                "@dbPassword": dbConfig.password,
                "@project": project,
                "@date":new Date().toLocaleString()
        };
        let config = FILE.read("./templates/application.properties");
        FILE.write(`./output/${project}/${project}/src/main/resources/application.properties`, STR.replace(config, patterns));
}

/**
 * Copy all nnotation files
 * 
 * @param {String} sourceFolder 
 * @param {String} targetFolder 
 * @param {String} project 
 */
function copyFolder(sourceFolder, targetFolder, project) {
        DIR.getFiles(sourceFolder).forEach(x => {
                copy(sourceFolder + "/" + x, targetFolder + "/" + x, project);
        });
}

/**
 * Generate confi item
 * 
 * @param {String} configRoot 
 * @param {String} tableName 
 */
function generateConfigItem(configRoot, table, pk) {
        let templates = new ConfigBuilderGenerator().generate(table, pk);
        let patterns = {
                "@name": STR.upperFirstLetter(table.name),
                "@sname": table.name,
        };

        templates = STR.replace(templates, patterns);
        FILE.write(`${configRoot}/${table.name}.js`,COMPYRIGHT+templates);
}

function copy(source, target, project) {
        let content=FILE.read(source).replace(/@project/g, project);
    
        if(source.endsWith(".js")||source.endsWith(".java"))
           content=COMPYRIGHT+content;

        FILE.write(target,content);
}

exports.init = init;