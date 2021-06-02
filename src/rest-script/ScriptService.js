const { Service } = require("./../common");
const { RestService } = require("./../http");
const { ScriptExctorController } = require("./ScriptExcutorController");
const { ScriptServiceContext } = require("./ScriptServiceContext");
const { FILE } = require("./../libs")

exports.ScriptService = class ScriptService extends Service {
        constructor () {
                super("ScriptService");
        }

        /**
         * 
         * @param {String} configPath 
         */
        start(configPath) {
                let context = new ScriptServiceContext();
                let config = FILE.readJson(configPath);
                context.init(config);
                let rest = new RestService(
                        config.port,
                        [
                                new ScriptExctorController(),
                        ]
                );
                rest.init(context);
                rest.start();
        }
}