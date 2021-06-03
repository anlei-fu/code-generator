const { LoggerFactory } = require("./logger-factory");

/**
 * @Baseclass
 */
class LoggerSurpport {
        constructor (name) {
                this.name = name;
                this._logger = LoggerFactory.getLogger(name);
        }

        /**
         * 
         * @param {String} msg 
         * @param {Any} obj 
         */
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