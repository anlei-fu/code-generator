const { FileManagerBase } = require(".");
const { DIR } = require("../libs");

class FileManagerGroup {
        constructor (root, map) {
                this._root = root;
                this._managers = {};
                Object.keys(map).forEach(key => {
                        DIR.create(`${this._root}/${map[key]}`);
                        this._managers[key] = new FileManagerBase("upload", `${this._root}/${map[key]}`);
                })

        }

        getManager(key) {
                return this._managers[key];
        }

}

exports.FileManagerGroup = FileManagerGroup