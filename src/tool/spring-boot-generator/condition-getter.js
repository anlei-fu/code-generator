const { getColumn } = require("./column-getter")
const { generateExpression } = require("./expression-generator")
const CACHE = new Map();
/**
 * Get all codition columns
 * 
 * @returns {[Column]}
 */
function getConditions(config) {

        // if (config.type == "insert")
        //         throw new Error("insert has no conditions");

        if (CACHE.has(config.id))
                return CACHE.get(config.id);

        let conditions = [];
        config.conditions.forEach(x => {
                conditions.push(getColumn(config.table, x,config.alias));
        });

        config.joins.forEach(x=>{
              x.conditions.forEach(y=>{
                conditions.push(getColumn(x.table, y,x.alias));
              });
        });

        // add expression property if should
        generateExpression(conditions);

        CACHE.set(config.id, conditions);
        return conditions;
}

exports.getConditions = getConditions;