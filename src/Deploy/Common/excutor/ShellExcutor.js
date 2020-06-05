
const child = require('child_process');
const { ExcutorBase } = require("./ExcutorBase");
const { OBJECT } = require("./../utils/utils");

/**
 * To execute shell file
 */
class ShellExcutor extends ExcutorBase {

        /**
         * 
         * @param {DeployContext} context 
         */
        constructor (context) {
                super("ShellExcutor");
                this._context = context;
        }

        /**
         * Execute shell file 
         * to regulate shell execute result, obey the rule:
         * if a shell excute succssfully
         * must echo '100' ahead shell exit, or will be regard as a failure
         * 
         * @param {String} shellFile 
         * @param {[String]} params 
         * @returns {Result}
         */
        async excute(shellFile, params) {
                let resultBuilder = this._context.factory.newResultBuilder(`Excute shell ${shellFile}`);

                // check file exists
                let shellExists = this._context.resourceManager
                        .shellManager.exists(shellFile);
                if (!shellExists)
                        return resultBuilder.shellNotFound(shellFile);

                let { error, stdout, stderr } = await this._executeCore(shellFile, params);
                if (error
                        || (stdout || "").endsWith("100")
                        || stderr) {
                        let info = `Execute shell failed`;
                        info += `stdout:\r\n${stdout || ""}`;
                        info += `stderr:\r\n${stderr || ""}`;
                        return resultBuilder.excuteShellFailed(shellFile, info);
                }

                return resultBuilder.excuteShellSuccess(shellFile, executeResult.stdout);
        }

        /**
         * Promisefy child_process.excuteFile
         * 
         * @private
         * @param {String} shellFile 
         * @param {Object|Array} params 
         */
        _executeCore(shellFile, params) {
                params=OBJECT.toArray(params);
                return new Promise((resolve) => {
                        child.execFile("sh", params.unshift(shellFile), (error, stdout, stderr) => {
                                resolve({ error, stdout, stderr });
                        })
                });
        }
}

exports.ShellExcutor = ShellExcutor