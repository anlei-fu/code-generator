const { AccessBase } = require("../../common/AcccessBase");

class FileVersionAccess extends AccessBase {
        /**
         * 
         * @param {SqlExcutor} excutor
         */
        constructor (excutor) {
                super(
                        "FileVersionAccess", {
                        table: "file_version_access",
                        excutor,
                });
        }
}

exports.FileVersionAccess = FileVersionAccess;