const { LoggerSurpport } = require("../LoggerSurpport");
const { DeployContext } = require("../../DeployNode/DeployContext");

exports.ExcutorBase = class ExcutorBase extends LoggerSurpport {
        /**
         * 
         * @param {String} name 
         * @param {DeployContext} context 
         */
        constructor (name, taskType) {
                super(name);
                this._taskType = taskType;
                this._resultBuilderFactory = resultBuilderFactory;
        }

        get taskType() {
                return this._taskType;
        }
}