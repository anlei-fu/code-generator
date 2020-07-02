const { DataSourceConfig, DataSourceConfigBuilder } = require("./DataSourceConfig");

class DbConfig {
        constructor () {
                this.generateDb = false;
                this.generateRelation = false;
                this.dataSourceConfig = new DataSourceConfig();
        }
}

class DbConfigBuilder {
        constructor () {
                this.DbConfig = new DbConfig();
        }

        generateDb() {

        }

        generateRelation() {

        }

        configDataSource(configer) {

        }

        build() {

        }
}

exports.DbConfig = DbConfig;
exports.DataSourceConfig = DbConfigBuilder;