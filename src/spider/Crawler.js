const { FILE } = require("./utils/file");
const { TaskController } = require("./TaskController");
const { RestService } = require("./RestService");
const { CrawlerContext } = require("./model/CrawlerContext");
const { validateUtils } = require("./utils/validate-utils");
const { LoggerSurpport } = require("./LoggerSurpport");
class Crawler extends LoggerSurpport {
        constructor () {
                super("Crawler");
        }
        start(configFile) {
                let config = FILE.readJson(configFile);
                validateUtils.requireNotNull(
                        config,
                        "port",
                        "ip",
                        "uniqueId",
                        "scriptDir"
                );

                this._context = new CrawlerContext(config);
                this._restService = new RestService(config.port, [new TaskController()]);
                this._restService.init(this._context);
                this._restService.start();
                this.info(`crawler started id is ${config.uniqueId} and ip is ${config.ip}`);
        }
}

exports.Crawler = Crawler;