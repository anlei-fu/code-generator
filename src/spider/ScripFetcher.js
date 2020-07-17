const { CLI } = require("./utils/cli");
class ScriptFeatcher {
        /**
         * Constructor of ScriptFeatcher , only work on linux
         * 
         * @constructor
         * @param {String} scriptDir 
         */
        constructor (scriptDir) {
                this._scriptDir = scriptDir;
        }

        /**
         * Download script into script folder
         * 
         * @param {String} fileHost 
         * @param {String} script 
         */
        fetch(fileHost, script) {
                CLI.excute(`wget -P ${this._scriptDir} http://${fileHost}/${script}  --no-check-certificate `)
        }
}

exports.ScriptFeatcher = ScriptFeatcher;