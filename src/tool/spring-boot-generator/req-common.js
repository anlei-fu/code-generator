const { STR } = require("./../../libs/str")
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

function getReqParams(config, type) {
        let key = config.id + type;
        if (CACHE.has(key))
                return CACHE.get(key)

        let params = "";
        config.reqs.forEach(x => {
                params += type ? `${x.type} ${x.name}, ` : `${x.name}, `;
        });

        params = STR.removeLastComa(params);
        CACHE.set(key, params);
        return params;
}


module.exports = {
        getReqParamsWithoutType,
        getReqParamsWithType
}