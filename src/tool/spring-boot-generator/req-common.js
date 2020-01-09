const { STR } = require("./../../libs/str");
const { getConditions } = require("./condition-getter");
const { getIncludes } = require("./includes-getter");
const {UserAnalyzer} =require("./analyzer");

const USER_ANALYZER=new UserAnalyzer();

const CACHE = new Map();

/**
 * Get req params with type field
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
 * Get req params core
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
                params += withType ? `${x.type} ${x.name}, ` : `${x.name}, `;
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

        config.reqs.forEach(x=>{
             if(!x.doCreate)
                 req.excludes.add(x.name);
        });

        let userColumn=USER_ANALYZER.findUserColumn(config);
        if(userColumn)
           req.excludes.add(userColumn);


        let conditions;
        if (config.type == "select" || config.type == "delete") {
                conditions = getConditions(config);
        } else if (config.type == "insert") {
                conditions = getIncludes(config);
        } else {
                conditions = getIncludes(config).concat(getConditions(config));
        }
        conditions = conditions.filter(x => !req.excludes.has(x.name));
        let rets = [];

        conditions.forEach(x => {

                if (req.validates.has(x.name))
                        x.validates = req.validates.get(x.name);

                if(x.expression){
                        console.log(x.expression);
                }
                let exp = x.exp;
                if (exp == "range") {
                        rets.push({ name: `${x.name}Min`, type: x.type, validates: x.validates, description: `${x.description} min` });
                        rets.push({ name: `${x.name}Max`, type: x.type, validates: x.validates, description: `${x.description} max` });
                } else if (exp == "timeRange") {
                        rets.push({ name: `${x.name}Start`, type: x.type, validates: x.validates, description: `${x.description} start time` });
                        rets.push({ name: `${x.name}End`, type: x.type, validates: x.validates, description: `${x.description} end time` });
                } else {
                        rets.push(x);
                }
        });

        return rets;
}

module.exports = {
        getReqParamsWithoutType,
        getReqParamsWithType,
        generateReq
}