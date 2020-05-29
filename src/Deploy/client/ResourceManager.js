const {ShellManager} =require("./ShellManager");
const {JsManager} =require("./JsManager")

class ResourceManager {
        constructor () {
            this.shellManager =new ShellManager();
            this.jsManager =new JsManager();
        }

        init() {
             
        }
}

exports.ResourceManager = ResourceManager