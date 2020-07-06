const axios = require("axios");

class WebClient {
        constructor (reqIntercepter, respInterceptor) {
                this._internalClient = axios.create();

                if (reqIntercepter)
                        this._internalClient.interceptors.request.use(reqIntercepter);

                if (respInterceptor)
                        this._internalClient.interceptors.response.use(respInterceptor);

        }

        request(url, method, params) {
                // 处理 path variable  e.g:
                //  url: /info/get/{id}, params {id:10} => /info/get/10   
                let pathReg = /\{[a-zA-Z]*\}/g;
                let pathVariables = url.match(pathReg);
                if (pathVariables && pathVariables.length > 0) {

                        // clone ,cause will delete property
                        params = JSON.parse(JSON.stringify(params));
                        pathVariables.forEach(variable => {
                                let property = variable.replace(/(\{|\})/g, "");
                                if (!params[property]) 
                                        throw new Error(`url(${url})'s varible(${property}) not found in params`, params)

                                url = url.replace(new RegExp(variable, "g"), params[property]);
                                delete params[variable]
                        });
                }

                let options = method == "get" ? { method, params, url } : { method, data, url }
                return new Promise((resolve, reject) => {
                        if (process.env.NODE_ENV == "development") {
                                console.log("request");
                                console.log(options)
                        }

                        this._internalClient(options)
                                .then((res) => {
                                        if (process.env.NODE_ENV == "development") {
                                                console.log("response")
                                                console.log(res.data);
                                        }
                                        resolve(res.data);
                                })
                                .catch((err) => {
                                        reject(err);
                                });
                });
        }

        download(url, method, params, encoding) {

        }

        upload(url, method, params, encoding) {

        }
}

exports.WebClient = WebClient


