const {CLI} =require("./utils/cli");
class ScriptFeatcher {
        constructor (workDir) {
                this._workDir = workDir;
        }
        fetch(file) {
             CLI.excute(`wget -P ${this._workDir} http://gateway/${file}  --no-check-certificate `)
        }
}

exports.ScriptFeatcher = ScriptFeatcher;