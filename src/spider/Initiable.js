const { LoggerSurpport } = require("./LoggerSurpport");

/**
 * @BaseClass of component that need init
 */
exports.Initiable = class Initiable extends LoggerSurpport {
        /**
         * Contructor of Initiable
         * 
         * @constructor
         * @param {String} name 
         */
        constructor (name) {
                super(name);
        }

        /**
         * To init component
         * 
         * @virtual
         * @param {Any} context 
         */
        init(context) {

        }
}