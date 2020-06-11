const { FileManagerBase } = require("./FileManager");
class ShellManager extends FileManagerBase {
        constructor (workDir) {
                super("ShellManager", workDir);
        }
}

exports.ShellManager = ShellManager;