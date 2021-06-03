const { JsManager } = require("./../file-manager");
const { ServiceProvider } = require("./../common");
const { LoggerFactory } = require("./../logging");
const { FileManagerGroup } = require("../file-manager/FileManagerGroup");

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
                 * @type {FileManagerGroup}
                 */
                this.fileManagerGroup;

        }

        /**
         * 
         * @param {ScriptServiceConfig} config 
         */
        init(config) {
                this.config = config;
                if (config.debug) {
                        LoggerFactory.allowInfos(".*");
                }

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