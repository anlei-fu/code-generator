/**
 * Get all codition columns
 * 
 * @private
 * @returns {[Column]}
 */
function getConditions(config) {
        return this._getItems(config, true);
}

exports.getConditions = getConditions;