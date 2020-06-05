const { DeployContext } = require("../../DeployNode/DeployClientContext");
const { ExcutorBase } = require("./ExcutorBase");

/**
 * To excute js file
 */
exports.JsExcutor = class JsExcutor extends ExcutorBase {
        constructor () {
                super("js excutor");
        }

        async excute(jsFile, args) {
                let resultBuilder = this._context.factory.newResultBuilder(`Excute shell ${jsFile}`);

                // check file exists
                let jsExists = this._context.resourceManager
                        .jsManager.exists(jsFile);
                if (!jsExists)
                        return resultBuilder.jsNotFound(jsFile);

                try {
                        let main = require(jsFile).main;
                        if(!main)
                           return resultBuilder.mainNotFound(jsFile);

                } catch (ex) {
                        return resultBuilder.jsFileIncorrect(jsFile,ex);
                }

                try {
                        return await main(this._context, args);
                } catch (ex) {
                        return resultBuilder.jsExcuteFailed(jsFile, args, ex);
                }

        }
}