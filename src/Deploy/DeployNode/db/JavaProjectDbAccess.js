const {AccessBase} =require("./AcccessBase");

class JavaProjectAccess extends AccessBase {
        /**
         * 
         * @param {String} dbFile 
         */
        constructor (dbFile) {
                super("java_project",dbFile);
        }        
}

exports.JavaProjectAccess=JavaProjectAccess;