const axios = require("axios");
let iconv = require('iconv-lite');

const { OBJECT } = require("./utils/utils");
const { STR } = require("./utils/str");
const { DownloadResult } = require("./model/DownloadResult");
const { UrlPair } = require("./model/UrlPair");
const { CrawlTaskContext } = require("./model/CrawlTaskContext");

const ErrorMap = {
        notExists: {
                matcher: message => message.includes("404"),
                resp: { status: 404 }
        },
        notAvailable: {
                matcher: message => STR.includesAny(message, [
                        "501",
                        "502",
                        "503",
                        "401",
                        "ECONNREFUSED"
                ]),
                resp: { status: 502 }
        },
        default: {
                matcher: message => true,
                resp: { status: 404 }
        }
}

class Downloader {
        /**
         * 
         * @param {CrawlTaskContext} context 
         */
        constructor (context) {
                this._context = context;
        }

        /**
         * Download page
         * 
         * @param {UrlPair} url 
         * @param {Object} headers 
         * @returns {Promise<DownloadResult>}
         */
        async download(url, headers) {
                try {
                        return await this._downloadCore(url, headers);
                } catch (ex) {
                        return this._getErrorResp(ex.message);
                }
        }

        /**
         * Download page
         * 
         * @private
         * @param {UrlPair} url 
         * @param {Object} headers 
         * @returns {Promise<DownloadResult>}
         */
        _downloadCore(url, headers) {
                return new Promise((resolve, reject) => {
                        let axiosConfig = this._createConfig(url, this._context, headers);
                        axios.default.get(url.target, axiosConfig)
                                .then(
                                        res => {
                                                let chunks = [];
                                                res.data.on('data', chunk => {
                                                        chunks.push(chunk);
                                                });
                                                res.data.on('end', () => {
                                                        let buffer = Buffer.concat(chunks);
                                                        let str = iconv.decode(buffer, this._context.config.encoding || "utf8");
                                                        resolve({ data: str, status: res.status })
                                                })
                                        }
                                ).catch(ex => reject(ex));
                })
        }

        /**
         * Create download config
         * 
         * @private
         * @param {UrlPair} url 
         * @param {Object} headers 
         * @returns {import("axios").AxiosRequestConfig}
         */
        _createConfig(url, headers) {
                headers = headers || {};

                OBJECT.setIfAbsent(headers, "Referer", url.referUrl);
                OBJECT.setIfAbsent(headers, "Accept", "*/*");
                OBJECT.setIfAbsent(
                        headers,
                        "User-Agent",
                        "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
                );

                if (context.cookie)
                        OBJECT.setIfAbsent(headers, "Set-Cookie", "");

                return {
                        timeout: this._context.config.timeout || 10000,
                        proxy: this._context.config.proxy,
                        maxContentLength: 1024 * 1024 * 1024, // 1mb
                        headers,
                        responseType: 'stream',
                }
        }

        /**
         * Get status code by error message
         * 
         * @private
         * @param {string} message 
         * @returns {DownloadResult}
         */
        _getErrorResp(message) {
                for (key in ErrorMap) {
                        if (ErrorMap[key].matcher(message))
                                return ErrorMap[key].resp;
                }
        }
}

exports.Downloader = Downloader;