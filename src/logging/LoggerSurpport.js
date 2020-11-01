const { LoggerFactory } = require("./logger-factory");

/**
 * @Baseclass
 */
class LoggerSurpport {
        constructor(logName) {
                this.name = logName;
                this._logger = LoggerFactory.getLogger(logName);
        }

        warn(msg, obj) {
                this._logger.warn(msg, obj);
        }

        error(msg, error, obj) {
                this._logger.error(msg, error, obj);
        }

        info(msg, obj) {
                this._logger.info(msg, obj);
        }

        fatal(msg, error, obj) {
                this._logger.fatal(msg, error, obj);
        }
}

exports.LoggerSurpport = LoggerSurpport;