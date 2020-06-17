const { ShellManager } = require("./ShellManager");
const { JsManager } = require("./JsManager")

exports.ResourceManager = class {
    constructor (jsBaseFolder, shellBaseFolder) {
        this.shellManager = new ShellManager(shellBaseFolder);
        this.jsManager = new JsManager(jsBaseFolder);
    }
}