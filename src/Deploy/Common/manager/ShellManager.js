const fs = require("fs");
const {DeployContext} =require("../DeployClientContext");
class ShellManager {
        constructor (basePath) {
                if (!fs.existsSync(basePath)
                        || fs.lstatSync(basePath).isDirectory()) {
                        fs.mkdirSync(basePath);
                }

                this._basePath = basePath;
                this._context=new DeployContext();
        }

        exists(file) {
                if(!file||!file.endsWith(".sh"))
                   return false;

                return fs.existsSync(this.getFullPath(file));
        }

        deploy(params) {

        }

        rollback(){
                
        }

        getFullPath(relatived){
                return `${this._basePath}/${relatived}`;
        }


}

exports.ShellManager = ShellManager;