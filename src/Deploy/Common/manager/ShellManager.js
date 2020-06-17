const { FileManagerBase } = require("./FileManager");
class ShellManager extends FileManagerBase {
        constructor (workDir) {
                super("ShellManager", workDir);
        }

        init(context){

        }
}

exports.ShellManager = ShellManager;