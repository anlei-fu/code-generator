const { Initiable } = require("./../common");
const { FILE, DIR } = require("./../libs");
const fs = require("fs");

/**
 * @BaseClass
 */
exports.FileManagerBase = class FileManagerBase extends Initiable {

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

        /**
         * Write a file
         * 
         * @param {String} file 
         * @param {String|Buffer} buffer 
         */
        write(file, buffer) {
                fs.writeFileSync(this.getFullPath(file), buffer);
        }

        /**
         * Read a file
         * 
         * @param {String} file 
         * @returns {String}
         */
        read(file) {
                return fs.readFileSync(this.getFullPath(file)).toString();
        }
}