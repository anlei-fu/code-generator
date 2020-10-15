const { TimeoutCache } = require("./../cache");
const { HttpClient } = require("./../http");

exports.ScriptInfoManager = class ScriptInfoManager {
        constructor (expired, api) {
                this._expire = expired;
                this._api = api;
                this._cache = new TimeoutCache();
                this._request = new HttpClient();
        }

        async getScriptInfo(apiPath) {
                let info = this._cache.get(apiPath);
                if (info)
                        return info;

                try {
                        let resp = await this._request.get(api, { apiPath });
                        if (resp.code == 100)
                                this._cache.cache(apiPath, resp.data);

                        return resp.data;
                } catch (ex) {

                }

                return null;
        }
}