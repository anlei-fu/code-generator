class DataSourceConfig {
        constructor () {
                this.host = "";
                this.port = 3306;
                this.db = "";
                this.user = "";
                this.password = "";
        }
}

class DataSourceConfigBuilder {
        constructor () {
                this._config = new DataSourceConfig();
        }

        host() {

        }

        port() {

        }

        db() {

        }

        user() {

        }

        password() {

        }

        build() {

        }
}

exports.DataSourceConfig = DataSourceConfig;
exports.DataSourceConfigBuilder = DataSourceConfigBuilder;