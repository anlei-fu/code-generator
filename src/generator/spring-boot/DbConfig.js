const { DataSourceConfigBuilder, DataSourceConfig } = require("./DataSourceConfig");
class DbConfig {
        constructor () {
                this.generateDb = "";
                this.generateRelation = "";
                this.dataSourceConfig = new DataSourceConfig();

        }
}

exports.DbConfig = DbConfig;

/**
 * Builder for DbConfig
 */
class DbConfigBuilder {
        constructor () {
                this._config = new DbConfig();
        }

        /**
         * Set property generateDb
         * 
         * @param {boolean} generateDb
         * @returns {DbConfigBuilder}
         */
        generateDb(generateDb = true) {
                this._config.generateDb = generateDb;
                return this;
        }

        /**
         * Set property generateRelation
         * 
         * @param {boolean} generateRelation
         * @returns {DbConfigBuilder}
         */
        generateRelation(generateRelation = true) {
                this._config.generateRelation = generateRelation;
                return this;
        }

        /**
         * Set property dataSourceConfig
         * 
         * @param {(DataSourceConfigBuilder)=>void} configer
         * @returns {DbConfigBuilder}
         */
        configDataSource(configer) {
                let builder = new DataSourceConfigBuilder();
                configer(builder);
                this._config.dataSourceConfig = builder.build();
                return this;
        }


        /**
         * Build 
         * 
         * @returns {DbConfig}
         */
        build() {
                return this._config;
        }
}

exports.DbConfigBuilder = DbConfigBuilder;
