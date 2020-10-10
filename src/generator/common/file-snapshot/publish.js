const { DIR } = require("../../../libs/dir");
const { FILE } = require("../../../libs/file");
const fs = require("fs");
class Publisher {

        constructor (matcher) {
                this._matcher = matcher;
        }

        removeFolder(path, interval = 5 * 24 * 60 * 60 * 1000) {
                this.removeFolderFile(path, interval);
        }

        removeFolderFile(folder, interval) {
                DIR.getFiles(folder).forEach(f => {

                        if (this._matcher && this._matcher(f)) {
                                FILE.remove(`${folder}/${f}`);
                                return;
                        }

                        var lastmodify = fs.statSync(`${folder}/${f}`).mtime

                        if (lastmodify.getTime() + interval < new Date().getTime())
                                FILE.remove(`${folder}/${f}`);

                })

                DIR.getFolders(folder).forEach(fd => {
                        this.removeFolderFile(`${folder}/${fd}`, interval);
                });

                if (DIR.getFiles(folder).length == 0 && DIR.getFolders(folder).length == 0)
                        DIR.remove(folder);
        }
}

exports.Publisher = Publisher

