const { Initiable } = require("./Initiable");
const { FILE } = require("./utils/file");
const { DIR } = require("./utils/dir");

exports.FileManagerBase = class FileManagerBase extends Initiable {
        constructor (name, workDir) {
                super(name);
                this._workDir = workDir;
        }

        init() {
                DIR.create(this._workDir);
        }

        getFullPath(file) {
                return `${this._workDir}/${file}`
        }

        exists(file) {
                return FILE.exists(this.getFullPath(file));
        }
}