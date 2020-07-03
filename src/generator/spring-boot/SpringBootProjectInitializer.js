const { DbInfoGenerator } = require("./DbInfoGenerator");
const { ProjectStructreGenerator } = require("./ProjectStructureGenerator");
const { GenerateConfigGenerator } = require("./BuilderConfigGenerator");

const { STR } = require("../../libs/str");
const { FILE } = require("../../libs/file");
const { ConfigBuilderGenerator } = require("./ConfigBuilderGenerator");
const { LoggerFactory } = require("../common/logging/logger-factory");


const LOG = LoggerFactory.getLogger("spring-boot-web-CRUD-project-initializer");
const COMPYRIGHT = FILE.read(`${__dirname}/templates/copyright.java`).replace("@date", new Date().toLocaleString());

class SpringBootProjectInitializer {
        constructor () {
                this._dbGenerator = new DbInfoGenerator();
                this._projectStructureGenerator = new ProjectStructreGenerator();
                this._builderConfigGenerator = new GenerateConfigGenerator();
                this._configBuilderGenerator = new ConfigBuilderGenerator();
        }

        /**
         * Initialize a spring boot CRUD web project 
         * 
         * @param {String} project 
         * @param {String} company
         * @param {DbConfig} dataSourceConfig
         * @param {Boolean} generateDb
         * @param {boolean} generateRelation
         */
        async  init(config, dbConfig) {

                if (config.generateStructure) {
                        this._projectStructureGenerator.generate(
                                config.project,
                                config.company,
                                dbConfig.dataSourceConfig
                        );
                }

                if (config.generateDb) {
                        await this._dbGenerator.generate(config.project, dbConfig);
                }

                // generate all items config
                let tables = require(`${config.targetFolder}/${config.project}/db/all.js`).all;

                if (config.generateBuilder) {
                        this._builderConfigGenerator.generate(tables, config.project);
                }

                let relations = require(`${config.targetFolder}/${config.project}/db/relations.js`).relations;
                let root = `${config.targetFolder}/${config.project}/config`;
                let builderConfigs = require(`${config.targetFolder}/${config.project}/generateConfig.js`).config;
                let generatorItems = Object.keys(builderConfigs);
                generatorItems.forEach(item => {
                        let table = tables[item];
                        this._generateConfigBuilderItem(
                                builderConfigs[item],
                                root,
                                table,
                                table.columns[table.primaryColumn],
                                tables,
                                relations
                        );
                });

                // create all.js which integrated all config
                let allContent = "";
                generatorItems.forEach(x => {
                        allContent += `        require("./${x}.js").${x}Config,\r\n`;
                });

                FILE.write(`${root}/all.js`,
                        COMPYRIGHT + FILE.read(`${__dirname}/templates/config-all.js`).replace("@content", allContent.trimRight()));

                LOG.info(`project ${config.project} init finished!`);
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
        _generateConfigBuilderItem(config, configRoot, table, pkColumn, tables, relations) {
                let template = this._configBuilderGenerator.generate(
                        config,
                        table,
                        pkColumn,
                        tables,
                        relations
                );

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