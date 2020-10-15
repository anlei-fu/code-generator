class ScriptInfo {
        constructor () {
                this.scriptPath = "";
                this.version = "";
                this.apiPath = "";

        }
}

exports.ScriptInfo = ScriptInfo;

/**
 * Builder for ScriptInfo
 */
class ScriptInfoBuilder {
        constructor () {
                this._config = new ScriptInfo();
        }

        /**
         * Set property scriptPath
         * 
         * @param {String} scriptPath
         * @returns {ScriptInfoBuilder}
         */
        scriptPath(scriptPath) {
                this._config.scriptPath = scriptPath;
                return this;
        }

        /**
         * Set property version
         * 
         * @param {String} version
         * @returns {ScriptInfoBuilder}
         */
        version(version) {
                this._config.version = version;
                return this;
        }

        /**
         * Set property apiPath
         * 
         * @param {String} apiPath
         * @returns {ScriptInfoBuilder}
         */
        apiPath(apiPath) {
                this._config.apiPath = apiPath;
                return this;
        }


        /**
         * Build 
         * 
         * @returns {ScriptInfo}
         */
        build() {
                return this._config;
        }
}

exports.ScriptInfoBuilder = ScriptInfoBuilder;
