const { Job } = require("./Job");
const { validateUtils } = require("./../utils/validate-utils");
const { NodeContext } = require("./../NodeContext");

class JsJob extends Job {

        constructor ({ id, name, jsFile, args, expression, description = "" }) {
                super({
                        name,
                        expression,
                        id,
                        description
                });

                validateUtils.requireNotNull(jsFile);
                this._jsFile = jsFile;
                this._args = args;
                this._excutor = null;
        }

        /**
         * Init
         * 
         * @param {NodeContext} context 
         * @override
         */
        init(context) {
                validateUtils.requireNotNull(context.excutors, "JsExecutor");
                this._excutor = context.excutors.JsExcutor;
        }

        /**
         * 
         * @override
         * @param {NodeContex} context 
         */
        execute(context) {
                this._excutor.execute(this._jsFile, this._args);
        }
}

exports.JsJob = JsJob;