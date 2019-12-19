/**
 * Get req params with type field
 * 
 * @private
 * @param {Config} config 
 * @returns {String}
 */
function _getReqParamsWithType(config) {
        let params = "";
        config.reqs.forEach(x => {
                params += `${x.type} ${x.name}, `;
        });

        return this._removeLastComa(params);
}

/**
 * Get req params
 * 
 * @private
 * @param {Config} config 
 * @returns {String}
 */
function _getReqParamsWithoutType(config) {
        let params = "";
        config.reqs.forEach(x => {
                params += `${x.name}, `;
        });

        return this._removeLastComa(params);
}
