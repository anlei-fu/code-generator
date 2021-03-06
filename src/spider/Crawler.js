const { FILE } = require("./../libs");
const { TaskController } = require("./TaskController");
const { RestService } = require("./../http");
const { CrawlerContext } = require("./CrawlerContext");
const { validateUtils } = require("./../libs");
const { LoggerSurpport ,LoggerFactory} = require("./../logging");

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

                if(config.debug)
                    LoggerFactory.allowInfos(".*");

                LoggerFactory.useFileAppender(config.logDir);

                this._context = new CrawlerContext(config);
                this._restservice = new RestService(config.port, [new TaskController()]);
                this._restservice.init(this._context);
                this._restservice.start();
                this.info(`crawler started id is ${config.uniqueId} and ip is ${config.ip}`);
        }
}

exports.Crawler = Crawler;