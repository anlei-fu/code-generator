const axios = require("axios");
const { LoggerSurpport } = require("./LoggerSurpport");
class HttpClient extends LoggerSurpport {
        constructor (name, baseConfig = { timeout: 10000 }) {
                super(name || "HttpClient");
                this._client = axios.default.create(baseConfig);
        }

        /**
         * Do get request
         * 
         * @param {String} url 
         * @param {Object} params 
         * @returns {Promise<ApiResponse>}
         */
        get(url, params) {
                return this._request({ url, data, params, method: "get" });
        }

        /**
         * Do put request
         * 
         * @param {String} url 
         * @param {Object} params 
         * @returns {Promise<ApiResponse<boolean>>}
         */
        put(url, data, params) {
                return this._request({ url, data, params, method: "put" });
        }

        /**
         * Do delete request
         * 
         * @param {String} url 
         * @param {Object} params 
         * @returns {Promise<ApiResponse<boolean>>}
         */
        delete(url, params) {
                return this._request({ url, data, params, method: "delete" });
        }

        /**
         * Do post request
         * 
         * @param {String} url 
         * @param {Object} params 
         * @returns {Promise<ApiResponse<boolean>>}
         */
        post(url, data, params) {
                return this._request({ url, data, params, method: "post" });
        }

        /**
         * Do request core
         * 
         * @private
         * @param {*} param0 
         * @returns {Promise<ApiResponse>}
         */
        async _request({ url, params, data, method }) {
                try {
                        return await this._client[method](
                                this._normalizeUrl({ url, params, data },
                                        { params, data }));
                } catch (ex) {

                }
        }

        /**
         * Render path variable if has
         * 
         * @private
         * @param {*} param0 
         * @returns {String}
         */
        _normalizeUrl({ url, params, data }) {

        }
}

exports.HttpVisitor = HttpClient;