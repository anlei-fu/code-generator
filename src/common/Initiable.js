const { LoggerSurpport } = require("./../logging");

/**
 * @interface
 */
exports.Initiable = class Initiable extends LoggerSurpport {
        constructor (name) {
                super(name);
        }

        /**
         * 
         * @param {import("./ServiceContext").ServiceContext} context 
         */
        init(context) {

        }
}