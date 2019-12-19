/**
 * Get all select columns ,or update columns ,or insert columns
 * 
 * @private
 * @returns {[Column]}
 */
function getIncludes(config) {
        return this._getItems(config, false);
}

exports.getIncludes = getIncludes;