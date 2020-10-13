const { Initiable } = require("./../common");
const { FILE,DIR } = require("./../libs");

/**
 * @BaseClass
 */
exports.
FileManagerBase = class FileManagerBase extends Initiable {

        /**
         * Constructor of FileManagerBase
         * 
         * @constructor
         * @param {String} name 
         * @param {String} workDir 
         */
        constructor (name, workDir) {
                super(name);
                this._workDir = workDir;
        }

        /**
         * Create folder if not exist
         */
        init() {
                DIR.create(this._workDir);
        }

        /**
         * Get full path of file
         * 
         * @param {String} file 
         * @returns {String}
         */
        getFullPath(file) {
                return `${this._workDir}/${file}`
        }

        /**
         * To check is file exist
         * 
         * @param {String} file 
         * @returns {boolean}
         */
        exists(file) {
                return FILE.exists(this.getFullPath(file));
        }
}