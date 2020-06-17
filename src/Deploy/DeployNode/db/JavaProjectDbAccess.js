const { AccessBase } = require("../../common/AcccessBase");

class JavaProjectAccess extends AccessBase {
        /**
         * 
         * @param {String} dbFile 
         */
        constructor (excutor) {
                super(
                        "JavaProjectAccess",
                        "java_project",
                        excutor,
                );
        }
}

exports.JavaProjectAccess = JavaProjectAccess;