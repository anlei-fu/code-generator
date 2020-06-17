const { Initiable } = require("../Initiable");

exports.ExcutorBase = class ExcutorBase extends Initiable {
        /**
         * 
         * @param {String} name 
         * @param {DeployContext} context 
         */
        constructor (name, taskType) {
                super(name);
                this._taskType = taskType;

                // init by context
                this._excuteResultFactory = null;
                this._context = null;
        }

        get taskType() {
                return this._taskType;
        }

        init(context) {
                this._context = context;
                this._excuteResultFactory = context.fatory.excuteResultFactory;
        }
}