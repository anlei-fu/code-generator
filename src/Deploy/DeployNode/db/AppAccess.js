const { AccessBase } = require("../../common/AcccessBase");

class AppAccess extends AccessBase {
        constructor () {
                super("AppAccess", "app");
        }
}

exports.AppAccess = AppAccess;