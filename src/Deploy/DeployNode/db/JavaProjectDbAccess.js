const { AccessBase } = require("../../Common/AcccessBase");

class JavaProjectAccess extends AccessBase {
        /**
         * 
         * @param {String} dbFile 
         */
        constructor (excutor) {
                super("JavaProjectAccess", {
                        table: "java_project",
                        excutor,
                });
        }
}

exports.JavaProjectAccess = JavaProjectAccess;