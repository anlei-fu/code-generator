const { STR } = require("../../libs/str");
const { UserColumnAnalyzer } = require("./analyzer");

const USER_ANALYZER = new UserColumnAnalyzer();

const CACHE = new Map();

/**
 * Get req params with type 
 * 
 * @private
 * @param {Config} config 
 * @returns {String}
 */
function generateReqParamsWithType(config) {
        return _generateReqParamsCore(config, true);
}

/**
 * Get req params
 * 
 * @private
 * @param {Config} config 
 * @returns {String}
 */
function generateReqParamsWithoutType(config) {
        return _generateReqParamsCore(config, false);
}

/**
 * Generate Req entity fields
 * 
 * @param {Config} config 
 * @param {ReqConfig} req 
 * @returns {[ColumnConfig]}
 */
function generateReqFields(config, req) {

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
                conditions = config.context.columnAnalyzer.getConditions(config);
        } else if (config.type == "insert") {

                // insert case: fields =includes
                conditions = config.context.columnAnalyzer.getIncludes(config);
        } else {

                // update case: fields = includes + conditions
                conditions = config.context.columnAnalyzer.getIncludes(config).concat(config.context.columnAnalyzer.getConditions(config));
        }

        let result = [];

        // generate validates and expression reqs
        conditions.filter(x => !req.excludes.has(x.name))
                .forEach(condition => {

                        // set validate if name match and absent
                        if (req.validates.has(condition.name))
                                condition.validates = req.validates.get(condition.name);

                        // generate additional req fields by expression, and excludes sourece field
                        let exp = condition.exp;
                        if (exp == "range") {
                                result.push({ name: `${condition.name}Min`, type: condition.type, validates: condition.validates, description: `${condition.description} min` });
                                result.push({ name: `${condition.name}Max`, type: condition.type, validates: condition.validates, description: `${condition.description} max` });
                        } else if (exp == "timeRange") {
                                result.push({ name: `${condition.name}Start`, type: condition.type, validates: condition.validates, description: `${condition.description} start time` });
                                result.push({ name: `${condition.name}End`, type: condition.type, validates: condition.validates, description: `${condition.description} end time` });
                        } else {
                                result.push(condition);
                        }
                });

        return result;
}

/**
 * Check is there any batch req of config
 * 
 * @param {GeneratorConfig} config 
 * @returns {Boolean}
 */
function hasBatchReq(config) {
        for (const req of config.reqs) {
                if (req.isBatch)
                        return true;
        }

        return false;
}

/**
 * Get main req's 'type' and 'name' properties from config
 * 
 * @param {GeneratorConfi} config 
 * @returns {CoreReqTypeAndNameResult}
 */
function getCoreReqNameAndType(config) {

}

/**
 * Get req params 
 * 
 * @private
 * @param {Config} config 
 * @param {boolean} withType 
 * @returns {String}
 */
function _generateReqParamsCore(config, withType) {
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

exports.ReqUtils = {
        generateReqParamsWithoutType,
        generateReqParamsWithType,
        analyzeReqFields: generateReqFields,
        hasBatchReq,
        getCoreReqNameAndType
}