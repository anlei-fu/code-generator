const { getColumn } = require("./column-getter")
const CACHE = new Map();
/**
 * Get all codition columns
 * 
 * @private
 * @returns {[Column]}
 */
function getConditions(config) {

        if (CACHE.has(config.id))
                return CACHE.get(config.id);

        let conditions = [];
        if (config.type != "insert") {
                config.conditions.forEach(x => {
                        let column = getColumn(config.table, x);
                });
        }

        CACHE.set(config.id, conditions);
        return conditions;
}

exports.getConditions = getConditions;