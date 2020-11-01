var child = require('child_process');

function excute(commond) {
     return   child.execSync(commond).toString();
}

exports.CLI = {
        excute
}
