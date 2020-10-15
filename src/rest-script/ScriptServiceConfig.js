class ScriptServiceConfig {
        constructor () {
                /**
                 * @type {Number}
                 */
                this.port;

                /**
                 * @type {String}
                 */
                this.scriptDir;

                /**
                 * @type {String}
                 */
                this.logDir;

                /**
                 * @type {String}
                 */
                this.apiUrl;

                /**
                 * @type {String}
                 */
                this.fileHost;

                /**
                 * @type {boolean}
                 */
                this.debug;

                /**
                 * @type {Number}
                 */
                this.scriptExpire;

        }
}

exports.ScriptServiceConfig = ScriptServiceConfig;

/**
 * Builder for ScriptServiceConfig
 */
class ScriptServiceConfigBuilder {
        constructor () {
                this._config = new ScriptServiceConfig();
        }

        /**
         * Set property port
         * 
         * @param {Number} port
         * @returns {ScriptServiceConfigBuilder}
         */
        port(port) {
                this._config.port = port;
                return this;
        }

        /**
         * Set property scriptDir
         * 
         * @param {String} scriptDir
         * @returns {ScriptServiceConfigBuilder}
         */
        scriptDir(scriptDir) {
                this._config.scriptDir = scriptDir;
                return this;
        }

        /**
         * Set property logDir
         * 
         * @param {String} logDir
         * @returns {ScriptServiceConfigBuilder}
         */
        logDir(logDir) {
                this._config.logDir = logDir;
                return this;
        }

        /**
         * Set property apiUrl
         * 
         * @param {String} apiUrl
         * @returns {ScriptServiceConfigBuilder}
         */
        apiUrl(apiUrl) {
                this._config.apiUrl = apiUrl;
                return this;
        }

        /**
         * Set property fileHost
         * 
         * @param {String} fileHost
         * @returns {ScriptServiceConfigBuilder}
         */
        fileHost(fileHost) {
                this._config.fileHost = fileHost;
                return this;
        }


        /**
         * Build 
         * 
         * @returns {ScriptServiceConfig}
         */
        build() {
                return this._config;
        }
}

exports.ScriptServiceConfigBuilder = ScriptServiceConfigBuilder;
