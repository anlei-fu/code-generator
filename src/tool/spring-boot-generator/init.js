const { DIR } = require("./../../libs/dir");
const { STR } = require("./../../libs/str");
const { FILE } = require("./../../libs/file");
const { resolve } = require("./../mysql-table-info-resolver/resolve");
const { ConfigBuilderGenerator } = require("./config-template-generator");
const { LoggerFactory } = require("./../logging/logger-factory");
const LOG = LoggerFactory.getLogger("spring-boot-web-CRUD-project-initializer");
const COMPYRIGHT = FILE.read("./templates/copyright.java").replace("@date", new Date().toLocaleString());

/**
 * Initialize a spring boot CRUD web project 
 * 
 * @param {String} project 
 * @param {{host:String,port:number,db:String,user:String,password:String}} dbConfig 
 */
async function init(project, company, dbConfig, generateDb = true) {

        // create project required folders
        makeAllFolders(project, company, dbConfig);

        if (generateDb)
                await resolve(dbConfig, dbConfig.db, `${__dirname}/output/${project}/db`);

        // generate all items config
        let tables = require(`${__dirname}/output/${project}/db/all.js`).all;
        let relations = require(`${__dirname}/output/${project}/db/relations.js`).relations;
        let root = `./output/${project}/config`;
        let tableNames = Object.keys(tables);
        tableNames.forEach(tableName => {
                let table = tables[tableName];
                generateConfigItem(root, table, table.columns[table.primaryColumn], tables, relations);
        });

        // create all.js
        let allContent = "";
        tableNames.forEach(x => {
                allContent += `        require("./${x}.js").${x}Config,\r\n`;
        });
        FILE.write(`${root}/all.js`, COMPYRIGHT + FILE.read("./templates/config-all.js").replace("@content", allContent.trimRight()));

        // create index.js
        copy1("./templates/generator.js", `./output/${project}/build.js`, project, company);
        copy('./templates/packages.js', `./output/${project}/packages.js`, project, company);
        copy('./templates/dictionary.js',`./output/${project}/db/dictionary.js`)

        LOG.info(`project ${project} init finished!`);
}

/**
 * Create all folders and files of project structure
 * 
 * @param {String} project 
 */
function makeAllFolders(project, company, dbConfig) {

        // base structure
        DIR.create(`./output/`);
        DIR.create(`./output/${project}`);
        DIR.create(`./output/${project}/db`);
        DIR.create(`./output/${project}/config`);
        DIR.create(`./output/${project}/${project}`);

        // project folders
        DIR.create(`./output/${project}/${project}/src`);
        DIR.create(`./output/${project}/${project}/src`);
        DIR.create(`./output/${project}/${project}/src/main`);
        DIR.create(`./output/${project}/${project}/src/main/java`);
        DIR.create(`./output/${project}/${project}/src/main/java/com`);
        DIR.create(`./output/${project}/${project}/src/main/java/com/${company}`);

        let root = `./output/${project}/${project}/src/main/java/com/${company}/${project}`;
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
        copy("./templates/R.java", `${root}/pojo/resp/R.java`, project, company);
        copy("./templates/WebConfig.java", `${root}/config/WebConfig.java`, project, company);
        copy("./templates/SwaggerConfig.java", `${root}/config/SwaggerConfig.java`, project, company);
        copy("./templates/ValidatorConfig.java", `${root}/config/ValidatorConfig.java`, project, company);
        copy("./templates/logback.xml", `./output/${project}/${project}/src/main/resources/logback.xml`, project, company);

        // page req
        copy("./templates/PageReq.java", `${root}/pojo/req/PageReq.java`, project, company);

        // page helper util
        copy("./templates/PageHelperUtils.java", `${root}/utils/PageHelperUtils.java`, project, company);

        // build.gradle
        copy("./templates/build.gradle", `./output/${project}/${project}/build.gradle`, project, company);

        copy("./templates/Application.java", `./output/${project}/${project}/src/main/java/com/${company}/${project}/Application.java`, project, company);

        // annotation
        copyFolder("./templates/annotation", `${root}/validate/annotation`, project, company);

        // validator
        copyFolder("./templates/validator", `${root}/validate/validator`, project, company);

        // application.properties
        let patterns = {
                "@dbHost": dbConfig.host,
                "@dbPort": dbConfig.port,
                "@dbName": dbConfig.db,
                "@dbUser": dbConfig.user,
                "@dbPassword": dbConfig.password,
                "@project": `${company}.${project}`,
                "@date": new Date().toLocaleString()
        };
        let config = FILE.read("./templates/application.properties");
        FILE.write(`./output/${project}/${project}/src/main/resources/application.properties`, STR.replace(config, patterns));
}

/**
 * Copy all annotation files
 * 
 * @param {String} sourceFolder 
 * @param {String} targetFolder 
 * @param {String} project 
 */
function copyFolder(sourceFolder, targetFolder, project, company) {
        DIR.getFiles(sourceFolder).forEach(x => {
                copy(sourceFolder + "/" + x, targetFolder + "/" + x, project, company);
        });
}

/**
 * Generate config item
 * 
 * @param {String} configRoot 
 * @param {String} tableName 
 */
function generateConfigItem(configRoot, table, pk, tables, relations) {
        let templates = new ConfigBuilderGenerator().generate(table, pk, tables, relations);
        let patterns = {
                "@name": STR.upperFirstLetter(table.name),
                "@sname": table.name,
        };

        templates = STR.replace(templates, patterns);
        FILE.write(`${configRoot}/${table.name}.js`, COMPYRIGHT + templates);
}

/**
 * Copy file and replace '@project' pattern
 * 
 * @param {String} source 
 * @param {String} target 
 * @param {String} project 
 */
function copy(source, target, project, company) {
        let content = FILE.read(source).replace(/@project/g, `${company}.${project}`);
        if (source.endsWith(".js") || source.endsWith(".java"))
                content = COMPYRIGHT + content;

        FILE.write(target, content);
}

function copy1(source, target, project, company) {
        let content = FILE.read(source).replace(/@project/g, project)
                .replace(/@company/g, company);

        if (source.endsWith(".js") || source.endsWith(".java"))
                content = COMPYRIGHT + content;

        FILE.write(target, content);
}

exports.init = init;