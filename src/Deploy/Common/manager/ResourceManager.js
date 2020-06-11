const {ShellManager} =require("./ShellManager");
const {JsManager} =require("./JsManager")

class ResourceManager {
        constructor (jsBaseFolder,shellBaseFolder) {
            this.shellManager =new ShellManager(shellBaseFolder);
            this.jsManager =new JsManager(jsBaseFolder);
        }

        init() {
             
        }
}

exports.ResourceManager = ResourceManager