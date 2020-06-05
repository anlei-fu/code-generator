const { LoggerSurpport } = require("./LoggerSurpport");
/**
 * @abstract
 */
class Service extends LoggerSurpport {
        constructor () {
                this._status = 1;
        }

        /**
         * @abstract
         */
        init() {
            throw new Error("method has not been implemented");
        }

        /**
         * @abstract
         */
        pause() {
                throw new Error("method has not been implemented");
        }

        /**
         * @abstract
         */
        start() {
                throw new Error("method has not been implemented");
        }

        /**
         * @abstract
         */
        stop() {
                throw new Error("method has not been implemented");
        }
}

exports.Service = Service;