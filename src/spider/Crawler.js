const { FILE } = require("./utils/file");
const { TaskController } = require("./TaskController");
const { RestService } = require("./RestService");
const { CrawlerContext } = require("./CrawlerContext");
const { validateUtils } = require("./utils/validate-utils");
const { LoggerSurpport } = require("./LoggerSurpport");

class Crawler extends LoggerSurpport {
        constructor () {
                super("Crawler");
        }

        /**
         * To start a crawler client with a config file
         * 
         * @param {String} configFile 
         */
       async start(configFile) {
                let config = FILE.readJson(configFile);
                validateUtils.requireNotNull(
                        config,
                        "port",
                        "ip",
                        "uniqueId",
                        "scriptDir"
                );

                this._context = new CrawlerContext(config);
                this._restservice = new RestService(config.port, [new TaskController()]);
                this._restservice.init(this._context);55
                this._restservice.start();
                this.info(`crawler started id is ${config.uniqueId} and ip is ${config.ip}`);
        }
}

exports.Crawler = Crawler;