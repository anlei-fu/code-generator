const axios = require("axios");
const { Initiable } = require("./Initiable");
const { NodeContext } = require("./NodeContext");

/**
 * @BaseClass
 */
class HttpClient extends Initiable {
        constructor (name, baseConfig = { timeout: 10000 }) {
                super(name || "HttpClient");
                this._client = axios.default.create(baseConfig);
                this._baseConfig = baseConfig;
        }

        /**
         * Init
         * 
         * @param {NodeContext} context 
         */
        init(context) {
                if (this._baseConfig.requestInterceptor)
                        this._client.interceptors.request.use(this._baseConfig.requestInterceptor);

                if (this._baseConfig.responseInterceptor) {
                        this._client.interceptors.request.use(this._baseConfig.responseInterceptor);
                } else {
                        this._client.interceptors.response.use(
                                (resp) => {
                                        let result = typeof resp.data == "string" ? JSON.parse(resp.data) : resp.data;
                                        return result;
                                },
                                (error) => {
                                        return Promise.reject(error);
                                }
                        );
                }
        }

        /**
         * Do get request
         * 
         * @param {String} url 
         * @param {Object} params 
         * @returns {Promise<ApiResponse>}
         */
        get(url, params) {
                return this._request({ url, params, method: "get" });
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
        delete(url, params, data) {
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
                        this.info(`${method} ${url}`);
                        if (params) {
                                this.info("params:", JSON.stringify(params));
                        } else if (data) {
                                this.info("data:", JSON.stringify(data));
                        }

                        url = this._normalizeURL({ url, params, data });
                        let resp = await this._client({
                                method,
                                url,
                                params,
                                data
                        });

                        this.info("resp:", JSON.stringify(resp.data));

                        return resp.data;
                } catch (ex) {
                        this.error(`${method} ${url}`, ex);
                }
        }

        /**
         * Render path variable if has
         * 
         * @private
         * @param {*} param0 
         * @returns {String}
         */
        _normalizeURL({ url, params, data }) {
                params = params || data;
                let pathReg = /\{[a-zA-Z]*\}/g;
                let pathVariables = url.match(pathReg);
                if (pathVariables && pathVariables.length > 0) {

                        // clone ,cause will delete property
                        params = JSON.parse(JSON.stringify(params));
                        pathVariables.forEach(variable => {
                                let property = variable.replace(/(\{|\})/g, "");
                                if (!params[property]) {
                                        throw new Error(`url(${url})'s varible(${property}) not found in params`, params)
                                }

                                url = url.replace(new RegExp(variable, "g"), params[property]);
                        });
                }

                return url;
        }
}

exports.HttpClient = HttpClient;