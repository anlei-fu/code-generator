const { STR } = require("./../../../libs/str")
/**
 * 
 * @param {String} additional 
 * @param {String} target 
 * @returns {String}
 */
function mergeMethod(additional, target) {
        target = target.trim();
        var pos = target.lastIndexOf("}");
        pos = target.lastIndexOf("\r\n", pos);

        return STR.insert(target, additional, pos);
}

exports.mergeMethod=mergeMethod;