const {AccessBase} =require("../../Common/AcccessBase");

class JavaProjectAccess extends AccessBase {
        /**
         * 
         * @param {String} dbFile 
         */
        constructor (name) {
                super(name,{table:"java_project"});
        }        
}

exports.JavaProjectAccess=JavaProjectAccess;