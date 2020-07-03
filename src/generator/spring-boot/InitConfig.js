const { DbConfig, DbConfigBuilder } = require("./DbConfig");
const { MockConfigBuilder } = require("./MockConfig");
const { AnalyzeConfigBuilder } = require("./AnalyzerConfig")

class InitConfig {
        constructor () {
                this.generateDb = true;
                this.generateStructue = true;
                this.generateBuilder = true;
                this.targetFolder="";
                this.project = "";
                this.company = "";
                this.dbConfig = new DbConfig();
                this.mockConfig = {};
                this.analyzeConfig = {};
        }
}

exports.InitConfig = InitConfig;

/**
 * Builder for InitConfig
 */
class InitConfigBuilder {
        constructor () {
                this._config = new InitConfig();
        }

        /**
         * Set property generateDb
         * 
         * @param {boolean} generateDb
         * @returns {InitConfigBuilder}
         */
        generateDb(generateDb = true) {
                this._config.generateDb = generateDb;
                return this;
        }

        /**
         * Set property generateStructue
         * 
         * @param {boolean} generateStructue
         * @returns {InitConfigBuilder}
         */
        generateStructue(generateStructue = true) {
                this._config.generateStructue = generateStructue;
                return this;
        }

        /**
         * Set property generateBuilder
         * 
         * @param {boolean} generateBuilder
         * @returns {InitConfigBuilder}
         */
        generateBuilder(generateBuilder = true) {
                this._config.generateBuilder = generateBuilder;
                return this;
        }

        /**
         * Set property project
         * 
         * @param {string} project
         * @returns {InitConfigBuilder}
         */
        project(project) {
                this._config.project = project;
                return this;
        }

        /**
         * Set property company
         * 
         * @param {string} company
         * @returns {InitConfigBuilder}
         */
        company(company) {
                this._config.company = company;
                return this;
        }

        /**
         * 
         * @param {string} targetFolder 
         */
        targetFolder(targetFolder){
                this._config.targetFolder=targetFolder;
                return this;
        }

        /**
         * Config db
         * 
         * @param {(DbConfigBuilder)=>void} configer
         * @returns {InitConfigBuilder}
         */
        useDbConfig(configer) {
                let builder = new DbConfigBuilder();
                configer(builder);
                this._config.dbConfig = builder.build();
                return this;
        }

        /**
         * Config mock
         * 
         * @param {(MockConfigBuilder)=>void} configer
         * @returns {InitConfigBuilder}
         */
        useMockConfig(configer) {
                let builder = new MockConfigBuilder();
                configer(builder)
                this._config.mockConfig = builder.build();
                return this;
        }

        /**
         * Config analyze
         * 
         * @param {(AnalyzeConfigBuilder)=>void} configer
         * @returns {InitConfigBuilder}
         */
        useAnalyzeConfig(configer) {
                let builder = new AnalyzeConfigBuilder();
                configer(builder);
                this._config.analyzeConfig = builder.build();
                return this;
        }


        /**
         * Build 
         * 
         * @returns {InitConfig}
         */
        build() {
                return this._config;
        }
}

exports.InitConfigBuilder = InitConfigBuilder;
