const { ExecutorBase } = require("./ExecutorBase");
const { TaskType } = require("../po/constant/TaskType");
const { validateUtils } = require("./../utils/validate-utils");
const { NodeContext } = require("./../NodeContext");

/**
 * To excute js file
 */
exports.JsExecutor = class JsExecutor extends ExecutorBase {
        constructor () {
                super("JsExecutor", TaskType.JS_FILE);
                this._jsManager = null;
        }

        /**
         * Init
         * 
         * @param {NodeContext} context 
         */
        init(context) {
                super.init(context);
                validateUtils.requireNotNull(context.resourceManager, "JsManager");
                this._jsManager = context.resourceManager.JsManager;
        }

        /**
         * Excute a js file by given args and context
         * the file exports a main async function which return 
         * a @see ExcuteResult
         * 
         * @param {String} jsFile 
         * @param {Any?} args 
         * @returns {ExcuteResult}
         */
        async execute(jsFile, args) {
                let main = this._jsManager.getMain(jsFile);
                if (!main)
                        return this._excuteResultFactory.mainNotFound(jsFile);

                try {
                        return await main(this._context, args);
                } catch (ex) {
                        return this._excuteResultFactory.jsExcuteFailed(jsFile, args, ex);
                }
        }
}