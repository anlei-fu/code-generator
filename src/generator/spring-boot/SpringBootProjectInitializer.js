const { DIR } = require("../../libs/dir");
const { STR } = require("../../libs/str");
const { FILE } = require("../../libs/file");
const { resolve } = require("./../common/table-analyze/table-info-resolvers/mysql-table-info-resolver/resolve");
const { ConfigItemBuilderGenerator } = require("./ConfigItemBuilderGenerator");
const { LoggerFactory } = require("../common/logging/logger-factory");
const LOG = LoggerFactory.getLogger("spring-boot-web-CRUD-project-initializer");
const COMPYRIGHT = FILE.read("./templates/copyright.java").replace("@date", new Date().toLocaleString());

class SpringBootProjectInitializer {
        /**
         * Initialize a spring boot CRUD web project 
         * 
         * @param {String} project 
         * @param {String} company
         * @param {DbConfig} dbConfig
         * @param {Boolean} generateDb
         * @param {boolean} generateRelation
         */
        async  init(project, company, dbConfig, generateDb = true, generateRelation = true) {

                // create project required folders
                this._makeFoldersAndCoopyFiles(project, company, dbConfig);

                if (generateDb)
                        await resolve(dbConfig, dbConfig.db, `${__dirname}/output/${project}/db`, generateRelation);

                // generate all items config
                let tables = require(`${__dirname}/output/${project}/db/all.js`).all;
                let relations = require(`${__dirname}/output/${project}/db/relations.js`).relations;
                let root = `./output/${project}/config`;
                let tableNames = Object.keys(tables);
                tableNames.forEach(tableName => {
                        let table = tables[tableName];
                        this._generateConfigBuilderItem(root, table, table.columns[table.primaryColumn], tables, relations);
                });

                // create all.js which integrated all config
                let allContent = "";
                tableNames.forEach(x => {
                        allContent += `        require("./${x}.js").${x}Config,\r\n`;
                });
                
                FILE.write(`${root}/all.js`,
                        COMPYRIGHT + FILE.read("./templates/config-all.js").replace("@content", allContent.trimRight()));

                LOG.info(`project ${project} init finished!`);
        }

        /**
         * Create all folders and files of project structure
         * 
         * @private
         * @param {String} project 
         * @param {String} company
         * @param {DbConfig} dbConfig
         */
        _makeFoldersAndCoopyFiles(project, company, dbConfig) {

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

                DIR.create(`./output/${project}/${project}/src/test/java/com/${company}/${project}/service/impl`)

                // resource items
                DIR.create(`./output/${project}/${project}/src/main/resources`);
                DIR.create(`./output/${project}/${project}/src/main/resources/mapper`);

                // test items
                DIR.create(`./output/${project}/${project}/src/test`);
                DIR.create(`./output/${project}/${project}/src/test/java`);
                DIR.create(`./output/${project}/${project}/src/test/java/com`);

                // this._copy('./templates/dictionary.js', `./output/${project}/db/dictionary.js`);

                // all default files
                this._copy("./templates/R.java", `${root}/pojo/resp/R.java`, project, company);
                this._copy("./templates/PageResult.java", `${root}/pojo/resp/PageResult.java`, project, company);
                this._copy("./templates/WebConfig.java", `${root}/config/WebConfig.java`, project, company);
                this._copy("./templates/SwaggerConfig.java", `${root}/config/SwaggerConfig.java`, project, company);
                this._copy("./templates/ValidatorConfig.java", `${root}/config/ValidatorConfig.java`, project, company);
                this._copy("./templates/logback.xml", `./output/${project}/${project}/src/main/resources/logback.xml`, project, company);

                // page req
                this._copy("./templates/PageReq.java", `${root}/pojo/req/PageReq.java`, project, company);

                // page helper util
                this._copy("./templates/PageHelperUtils.java", `${root}/utils/PageHelperUtils.java`, project, company);

                // build.gradle
                this._copy("./templates/build.gradle", `./output/${project}/${project}/build.gradle`, project, company);

                this._copy("./templates/Application.java", `./output/${project}/${project}/src/main/java/com/${company}/${project}/Application.java`, project, company);

                // create index.js
                this._copy1("./templates/build.js", `./output/${project}/build.js`, project, company);
                this._copy('./templates/packages.js', `./output/${project}/packages.js`, project, company);

                // annotation
                this._copyFolder("./templates/annotation", `${root}/validate/annotation`, project, company);

                // validator
                this._copyFolder("./templates/validator", `${root}/validate/validator`, project, company);

                this._copy(
                        "./templates/TestUtils.java",
                        `./output/${project}/${project}/src/test/java/com/${company}/${project}/TestUtils.java`,
                        project,
                        company
                );

                // application.properties
                let replacePatternPairs = {
                        "@dbHost": dbConfig.host,
                        "@dbPort": dbConfig.port,
                        "@dbName": dbConfig.db,
                        "@dbUser": dbConfig.user,
                        "@dbPassword": dbConfig.password,
                        "@project": `${company}.${project}`,
                        "@date": new Date().toLocaleString()
                };
                let configTemplate = FILE.read("./templates/application.properties");
                FILE.write(`./output/${project}/${project}/src/main/resources/application.properties`,
                        STR.replace(configTemplate, replacePatternPairs));
        }

        /**
         * Copy all annotation files
         * 
         * @private
         * @param {String} sourceFolder 
         * @param {String} targetFolder 
         * @param {String} project 
         * @param {String} company
         */
        _copyFolder(sourceFolder, targetFolder, project, company) {
                DIR.getFiles(sourceFolder).forEach(file => {
                        this._copy(sourceFolder + "/" + file, targetFolder + "/" + file, project, company);
                });
        }

        /**
         * Generate config item
         * 
         * @private
         * @param {String} configRoot 
         * @param {String} tableName 
         * @param {Column} pkColumn
         * @param {Tables} tables
         * @param {Relations} relations
         */
        _generateConfigBuilderItem(configRoot, table, pkColumn, tables, relations) {
                let template = new ConfigItemBuilderGenerator().generate(table, pkColumn, tables, relations);
                let replacePatternPairs = {
                        "@name": STR.upperFirstLetter(table.name),
                        "@sname": table.name,
                };

                template = STR.replace(template, replacePatternPairs);
                FILE.write(`${configRoot}/${table.name}.js`, COMPYRIGHT + template);
        }

        /**
         * Copy file and replace '@project' pattern
         * 
         * @private
         * @param {String} source 
         * @param {String} target 
         * @param {String} project 
         * @param {String} company
         */
        _copy(source, target, project, company) {
                let content = FILE.read(source).replace(/@project/g, `${company}.${project}`);
                if (source.endsWith(".js") || source.endsWith(".java"))
                        content = COMPYRIGHT + content;

                FILE.write(target, content);
        }

        /**
         * 
         * @private
         * @param {String} source  file
         * @param {String} target  file
         * @param {String} project  name
         * @param {String} company name
         */
        _copy1(source, target, project, company) {
                let content = FILE.read(source).replace(/@project/g, project)
                        .replace(/@company/g, company);

                if (source.endsWith(".js") || source.endsWith(".java"))
                        content = COMPYRIGHT + content;

                FILE.write(target, content);
        }
}

exports.SpringBootProjectInitializer = SpringBootProjectInitializer;