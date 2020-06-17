const { AccessBase } = require("../../common/AcccessBase");

class AppAccess extends AccessBase {

        constructor (dbFile) {
                super("appAccess");
        }

        getAppStatus(appId){

        }
      
}

exports.AppAccess = AppAccess;