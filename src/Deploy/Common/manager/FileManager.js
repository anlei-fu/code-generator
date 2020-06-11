const { LoggerSurpport } = require("./../LoggerSurpport");
const { FILE } = require("./../utils/file");

exports.FileManagerBase = class FileManagerBase extends LoggerSurpport {
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