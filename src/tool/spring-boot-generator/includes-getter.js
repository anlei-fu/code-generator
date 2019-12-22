const { getColumn } = require("./column-getter")
const { generateExpression } = require("./expression-generator")
const CACHE = new Map();
/**
 * Get all select columns ,or update columns ,or insert columns
 * 
 * @private
 * @returns {[Column]}
 */
function getIncludes(config) {
        if (config.type == "insert")
                throw new Error("insert has no conditions");

        if (CACHE.has(config.id))
                return CACHE.get(config.id);

        let includes = [];
        config.includes.forEach(x => {
                includes.push(getColumn(config.table, x));
        });

        config.joins.forEach(x => {
                x.includes.forEach(y => {
                        includes.push(getColumn(x.table, y));
                });
        });

        CACHE.set(config.id, includes);
        return includes;
}

exports.getIncludes = getIncludes;