const { LoggerSurpport } = require("./LoggerSurpport");

/**
 * @interface
 */
exports.Initiable = class Initiable extends LoggerSurpport {
        constructor (name) {
                super(name);
        }

        init(context) {

        }
}