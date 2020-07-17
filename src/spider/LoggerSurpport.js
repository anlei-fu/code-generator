const { LoggerFactory } = require("./logging/logger-factory");

/**
 * @Baseclass of the component that need log sth
 */
class LoggerSurpport {

        /**
         * Constructor
         * 
         * @constructor
         * @param {String} logName 
         */
        constructor (logName) {
                this.name = logName || "anonymous";
                this._logger = LoggerFactory.getLogger(logName);
        }

        /**
         * Warning level log
         * 
         * @param {String} msg 
         * @param {Object} obj 
         */
        warn(msg, obj) {
                this._logger.warn(msg, obj);
        }

        /**
         * Error level log
         * 
         * @param {String} msg 
         * @param {Error} error 
         * @param {Object} obj 
         */
        error(msg, error, obj) {
                this._logger.error(msg, error, obj);
        }

        /**
         * Info level log
         * 
         * @param {String} msg 
         * @param {Object} obj 
         */
        info(msg, obj) {
                this._logger.info(msg, obj);
        }
}

exports.LoggerSurpport = LoggerSurpport;