const { DeployContext } = require("./DeployClientContext");
const { ExcuteResult } = require("./ExcuteResult");

class ShellExcuter {

        /**
         * 
         * @param {DeployContext} context 
         */
        constructor (context) {
                this._context = context;
        }

        async excute(shellFile, params) {
                let shellExists = this._context.resourceManager.shellManager.exists(shellFile);
                if(!shellExists)
                    return new ExcuteResult();

               let result= await this.excuteCore(shellFile,params);

        }

        async excuteCore(shellFile,params){

        }
}

exports.ShellExcuter=ShellExcuter