const axios = require("axios");
class HttpClient {
        constructor (baseConfig) {
                this._baseConfig = baseConfig;
        }

        async  get(url, params) {
                try {
                        return await axios.default.get(url, { params });
                } catch (ex) {

                }
        }

       async put(url, data, params) {
                try {
                        return await axios.default.put(url, { data, params });
                } catch (ex) {

                }
        }

      async  delete(url, params) {
                try {
                        return await axios.default.delete(url, { params });
                } catch (ex) {

                }
        }

       async post(url, data, params) {
                try {
                        return await axios.default.post(url, { data, params });
                } catch (ex) {

                }
        }
}

exports.HttpVisitor = HttpClient;