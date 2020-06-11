const { ExcutorBase } = require("./ExcutorBase");
const {TaskType} =require("./../po/constant/TaskType");

/**
 * To excute js file
 */
exports.JsExcutor = class JsExcutor extends ExcutorBase {
        constructor (context) {
                super("JsExcutor",TaskType.JS_FILE);
                this._jsManager = context.resourceManager.jsManager;
                this._resultBuilderFactory = context.resultBuilderFactory;
                this._context=context;
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
                let resultBuilder = this._resultBuilderFactory.newResultBuilder(`Excute js ${jsFile}`);

                let main = this._jsManager.getMain(jsFile);
                if (!main)
                        return resultBuilder.mainNotFound(jsFile);

                try {
                        return await main(this._context, args);
                } catch (ex) {
                        return resultBuilder.jsExcuteFailed(jsFile, args, ex);
                }
        }
}