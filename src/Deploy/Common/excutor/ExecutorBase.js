const { Initiable } = require("../Initiable");
const { validateUtils } = require("../utils/validate-utils");
const { NodeContext } = require("../NodeContext");

exports.ExecutorBase = class ExecutorBase extends Initiable {
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

        /**
         * Get task type
         */
        get taskType() {
                return this._taskType;
        }

        /**
         * Init
         * 
         * @param {NodeContext} context 
         */
        init(context) {
                this._context = context;
                validateUtils.requireNotNull(context.factories, "ExecuteResultFactory")
                this._excuteResultFactory = context.factories.ExcuteResultFactory;
        }
}