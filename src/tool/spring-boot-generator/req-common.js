const { STR } = require("./../../libs/str");
const { getConditions } = require("./condition-getter");
const { getIncludes } = require("./includes-getter");
const { UserAnalyzer } = require("./analyzer");

const USER_ANALYZER = new UserAnalyzer();

const CACHE = new Map();

/**
 * Get req params with type 
 * 
 * @private
 * @param {Config} config 
 * @returns {String}
 */
function getReqParamsWithType(config) {
        return getReqParams(config, true);
}

/**
 * Get req params
 * 
 * @private
 * @param {Config} config 
 * @returns {String}
 */
function getReqParamsWithoutType(config) {
        return getReqParams(config, false);
}

/**
 * Get req params 
 * 
 * @param {Config} config 
 * @param {boolean} withType 
 * @returns {String}
 */
function getReqParams(config, withType) {
        let key = config.id + withType;
        if (CACHE.has(key))
                return CACHE.get(key)

        let params = "";
        config.reqs.forEach(x => {
                let item = "";
                if (withType) {
                        // batch with list
                        if (x.isBatch) {
                                item += `List<${x.type}>`
                        } else {
                                item += `${x.type}`
                        }
                        item += ` ${x.name}, `;
                } else {
                        item += `${x.name}, `;
                }
                params += item;

        });

        params = STR.removeLastComa(params);
        CACHE.set(key, params);
        return params;
}

/**
 * Generate Req entity
 * 
 * @param {Config} config 
 * @param {ReqConfig} req 
 */
function generateReq(config, req) {

        // excludes other reqs fields
        config.reqs.forEach(x => {
                if (!x.doCreate)
                        req.excludes.add(x.name);
        });

        // excludes user column fields
        let userColumn = USER_ANALYZER.findUserColumnByConfig(config);
        if (userColumn)
                req.excludes.add(userColumn.name);

        // get req by conditions
        let conditions;
        if (config.type == "select" || config.type == "delete") {
                conditions = getConditions(config);
        } else if (config.type == "insert") {
                conditions = getIncludes(config);
        } else {
                conditions = getIncludes(config).concat(getConditions(config));
        }

        let rets = [];

        // generate validates and expression reqs
        conditions.filter(x => !req.excludes.has(x.name))
                .forEach(condition => {

                        // set validate if name match and absent
                        if (req.validates.has(condition.name))
                                condition.validates = req.validates.get(condition.name);

                        // generate additional req fields by expression
                        let exp = condition.exp;
                        if (exp == "range") {
                                rets.push({ name: `${condition.name}Min`, type: condition.type, validates: condition.validates, description: `${condition.description} min` });
                                rets.push({ name: `${condition.name}Max`, type: condition.type, validates: condition.validates, description: `${condition.description} max` });
                        } else if (exp == "timeRange") {
                                rets.push({ name: `${condition.name}Start`, type: condition.type, validates: condition.validates, description: `${condition.description} start time` });
                                rets.push({ name: `${condition.name}End`, type: condition.type, validates: condition.validates, description: `${condition.description} end time` });
                        } else {
                                rets.push(condition);
                        }
                });

        return rets;
}

module.exports = {
        getReqParamsWithoutType,
        getReqParamsWithType,
        generateReq
}