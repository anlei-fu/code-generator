class DataSourceConfig {
        constructor () {
                this.host = "";
                this.port = "";
                this.db = "";
                this.user = "";
                this.password = "";

        }
}

exports.DataSourceConfig = DataSourceConfig;

/**
 * Builder for DataSourceConfig
 */
class DataSourceConfigBuilder {
        constructor () {
                this._config = new DataSourceConfig();
        }

        /**
         * Set property host
         * 
         * @param {} host
         * @returns {DataSourceConfigBuilder}
         */
        host(host) {
                this._config.host = host;
                return this;
        }

        /**
         * Set property port
         * 
         * @param {} port
         * @returns {DataSourceConfigBuilder}
         */
        port(port) {
                this._config.port = port;
                return this;
        }

        /**
         * Set property db
         * 
         * @param {} db
         * @returns {DataSourceConfigBuilder}
         */
        db(db) {
                this._config.db = db;
                return this;
        }

        /**
         * Set property user
         * 
         * @param {} user
         * @returns {DataSourceConfigBuilder}
         */
        user(user) {
                this._config.user = user;
                return this;
        }

        /**
         * Set property password
         * 
         * @param {} password
         * @returns {DataSourceConfigBuilder}
         */
        password(password) {
                this._config.password = password;
                return this;
        }


        /**
         * Build 
         * 
         * @returns {DataSourceConfig}
         */
        build() {
                return this._config;
        }
}

exports.DataSourceConfigBuilder = DataSourceConfigBuilder;
