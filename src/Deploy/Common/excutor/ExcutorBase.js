const { LoggerSurpport } = require("../LoggerSurpport");
const { DeployContext } = require("../../DeployNode/DeployClientContext");

exports.ExcutorBase = class ExcutorBase extends LoggerSurpport {
        /**
         * 
         * @param {String} name 
         * @param {DeployContext} context 
         */
        constructor (name,context) {
                super(name);
                this._context=context;
        }
}