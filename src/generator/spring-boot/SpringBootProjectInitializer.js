const { DbInfoGenerator } = require("./DbInfoGenerator");
const { ProjectStructreGenerator } = require("./ProjectStructureGenerator");
const { GenerateConfigGenerator } = require("./BuilderConfigGenerator");
const { InitConfig } = require("./builders/InitConfig");


const { LoggerFactory } = require("../common/logging/logger-factory");


const LOG = LoggerFactory.getLogger("spring-boot-web-CRUD-project-initializer");

class SpringBootProjectInitializer {
        constructor () {
                this._dbGenerator = new DbInfoGenerator();
                this._projectStructureGenerator = new ProjectStructreGenerator();
                this._builderConfigGenerator = new GenerateConfigGenerator();
              
        }

        /**
         * Initialize a spring boot CRUD web project 
         * 
         * @param {InitConfig} config
         */
        async  init(config) {

                if (config.generateStructure) {
                        this._projectStructureGenerator.generate(
                                config.targetFolder,
                                config.libPath,
                                config.project,
                                config.company,
                                config.dbConfig.dataSourceConfig
                        );
                }

                if (config.generateDb) {
                        await this._dbGenerator.generate(
                                config.targetFolder + "/" + config.project,
                                config.dbConfig
                        );
                }

                // generate all items config
                let tables = require(`${config.targetFolder}/${config.project}/db/all.js`).all;
                if (config.generateBuilder) {
                        this._builderConfigGenerator.generate(
                                config.targetFolder,
                                tables,
                                config.project
                        );
                }

                LOG.info(`project ${config.project} init finished!`);
        }
}

exports.SpringBootProjectInitializer = SpringBootProjectInitializer;