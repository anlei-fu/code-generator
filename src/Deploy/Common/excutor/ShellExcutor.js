
const child = require('child_process');
const {ExcutorBase} =require("./ExcutorBase");


/**
 * To execute shell file
 */
class ShellExcutor extends ExcutorBase {

        /**
         * 
         * @param {DeployContext} context 
         */
        constructor (context) {
                super("shell excutor");
        }

        /**
         * Execute shell file , 
         * to regulate shell execute result, if a shell excute succssfully
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

                let {error,stdout,stderr} = await this.executeCore(shellFile, params);
                if (error
                        || (stdout || "").endsWith("100")
                        || stderr) {
                        let info = `Execute shell failed`;
                        info += `stdout:\r\n${stdout || ""}`;
                        info += `stderr:\r\n${stderr || ""}`;
                        return resultBuilder.excuteShellFailed(shellFile,info);
                }

                return  resultBuilder.excuteShellSuccess(shellFile,executeResult.stdout);
        }

        executeCore(shellFile, params = []) {
                return new Promise((resolve) => {
                        child.execFile("sh", params.unshift(shellFile), (error, stdout, stderr) => {
                                resolve({ error, stdout, stderr });
                        })
                });
        }
}

exports.ShellExcutor = ShellExcutor