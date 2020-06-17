const { ExcutorBase } = require("./ExcutorBase");
const { TaskType } = require("../po/constant/TaskType");

/**
 * To excute js file
 */
exports.JsExcutor = class JsExcutor extends ExcutorBase {
        constructor () {
                super("JsExcutor", TaskType.JS_FILE);
                this._jsManager = null;
        }

        /**
         * Init
         * 
         * @param {NodeContext} context 
         */
        init(context){
                super.init(context);
                this._jsManager=context.resourceManager.jsManager;
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
        async excute(jsFile, args) {
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