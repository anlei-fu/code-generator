const { getColumn } = require("./column-getter");
const { generateUpdateExpression } = require("./expression-generator")
const CACHE = new Map();

/**
 * Get all select columns ,or update columns ,or insert columns
 * 
 * @private
 * @returns {[Column]}
 */
function getIncludes(config) {

        if (CACHE.has(config.id))
                return CACHE.get(config.id);

        // merge with column meta info
        let includes = [];
        config.includes.forEach(include => {
                includes.push(getColumn(config.table, include, config.alias));
        });

        // concat joins includes
        config.joins.forEach(join => {
                join.includes.forEach(include => {
                        includes.push(getColumn(join.table, include, join.table.alias));
                });
        });

        // set insert not null expression
        if (config.type == "insert") {
                includes.forEach(include => {
                        if (include.nullable)
                                include.ifExpression = `${include.name} != null`;
                });
        }

        // generate update mapper if expression
        if (config.type == "update")
                generateUpdateExpression(includes);

        CACHE.set(config.id, includes);
        return includes;
}

exports.getIncludes = getIncludes;