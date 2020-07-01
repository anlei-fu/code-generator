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
         * @param {DbConfig} dataSourceConfig
         * @param {Boolean} generateDb
         * @param {boolean} generateRelation
         */
        async  init(project, company, dbConfig,generateConfig) {

                // generate all items config
                let tables = require(`${__dirname}/output/${project}/db/all.js`).all;
                let relations = require(`${__dirname}/output/${project}/db/relations.js`).relations;
                let root = `./output/${project}/config`;
                let generatorItems = Object.keys(generateConfig.items);
                generatorItems.forEach(item => {
                        let table = tables[item];
                        this._generateConfigBuilderItem(generateConfig.items,root, table, table.columns[table.primaryColumn], tables, relations);
                });

                // create all.js which integrated all config
                let allContent = "";
                generatorItems.forEach(x => {
                        allContent += `        require("./${x}.js").${x}Config,\r\n`;
                });
                
                FILE.write(`${root}/all.js`,
                        COMPYRIGHT + FILE.read("./templates/config-all.js").replace("@content", allContent.trimRight()));

                LOG.info(`project ${project} init finished!`);
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
        _generateConfigBuilderItem(config,configRoot, table, pkColumn, tables, relations) {
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


}

exports.SpringBootProjectInitializer = SpringBootProjectInitializer;