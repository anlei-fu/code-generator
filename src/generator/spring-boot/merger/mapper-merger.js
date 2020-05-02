const { STR } = require("./../../../libs/str")

/**
 * 
 * @param {String} additional 
 * @param {String} target
 * @returns {String} 
 */
function mergeMapper(additional, target) {
        target = target.trim();
        let pos = target.lastIndexOf("</");
        pos = target.lastIndexOf("\r\n", pos);

        return STR.insert(target, additional, pos);
}

exports.mergeMapper = mergeMapper;

