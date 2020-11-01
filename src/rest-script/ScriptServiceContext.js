const { JsManager } = require("./../file-manager");
const { ServiceProvider } = require("./../common");
const { ScriptInfoManager } = require("./ScriptInfoManager");
const { ScriptServiceConfig } = require("./ScriptServiceConfig");
const { LoggerFactory } = require("./../logging");

exports.ScriptServiceContext = class ScriptServiceContext {
        constructor () {

                /**
                 * @type {ScriptServiceConfig}
                 */
                this.config;

                /**
                 * @type {ServiceProvider}
                 */
                this.serviceProvider;

                /**
                 * @type {JsManager}
                 */
                this.jsManager;

                /**
                 * @type {ScriptInfoManager}
                 */
                this.scriptInfoManager;

        }

        /**
         * 
         * @param {ScriptServiceConfig} config 
         */
        init(config) {
                this.config = config;
                this.jsManager = new JsManager(config.scriptDir);
                this.scriptInfoManager = new ScriptInfoManager(config.scriptExpire, config.apiUrl);

                if (config.debug)
                        LoggerFactory.allowInfos(".*");

                LoggerFactory.useFileAppender(config.logDir);
                return this;
        }

        /**
         * 
         * @param {ServiceProvider} provider 
         */
        useServiceProvider(provider) {
                this.serviceProvider = provider;
                return this;
        }
}