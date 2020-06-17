const { Initiable } = require("../Initiable");
const { FILE } = require("./../utils/file");

exports.FileManagerBase = class FileManagerBase extends Initiable {
        constructor (name, workDir) {
                super(name);
                this._workDir = workDir;
        }

        getFullPath(file) {
                return `${this._workDir}/${file}`
        }

        exists(file) {
                return FILE.exists(this.getFullPath(file));
        }
}