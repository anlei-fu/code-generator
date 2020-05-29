

const { WebClient } = require("./WebClient");

class ApiConfig {
        constructor () {
                this.method = "";
                this.path = "";
                this.timeot = "";
        }
}

class ApiClientOptions {
        constructor () {
                this.reqInterceptor;
                this.respInterceptor;
                this.resultHandler;
        }
}

class ApiClientFactory {
        /**
         * Create api client
         * 
         * @param {ApiConfigs} apiConfigs 
         * @param {ApiClientOptions} options 
         */
        static create(apiConfigs, options) {
                let apiClient = {};
                let client = new WebClient(options.reqInterceptor, options.respInterceptor);
                Object.keys(apiConfigs).forEach(key => {
                        let group = apiConfigs[key];
                        apiClient[key] = {};
                        Object.keys(group).forEach(item => {
                                apiClient[key][item] = async (params) => {
                                        let resp = await client.request(group[item].url, group[item].method, params);
                                        if (options.resultHandler)
                                               options.resultHandler(resp,group[item].url,group[item].method);

                                        return resp;
                                }
                        });
                });

                return apiClient;
        }
}

module.exports = {
        ApiClientFactory,
        ApiClientOptions,
        ApiConfig
}


