const { getColumn } = require("./column-getter")
const { generateExpression } = require("./expression-generator")
const CACHE = new Map();
/**
 * Get all codition columns
 * 
 * @returns {[Column]}
 */
function getConditions(config) {

        if (CACHE.has(config.id))
                return CACHE.get(config.id);

        let conditions = [];
        config.conditions.forEach(condition => {
                conditions.push(getColumn(config.table, condition,config.alias));
        });

        config.joins.forEach(join=>{
              join.conditions.forEach(condition=>{
                conditions.push(getColumn(join.table, condition,join.alias));
              });
        });

        // add expression properties if should
        generateExpression(conditions);

        CACHE.set(config.id, conditions);
        return conditions;
}

exports.getConditions = getConditions;