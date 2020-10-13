const axios = require("axios");
const iconv = require('iconv-lite');
const { OBJECT,STR } = require("./../libs");
const { DownloadResult } = require("./model/DownloadResult");
const { URL } = require("./model/URL");
const { CrawlTaskContext } = require("./CrawlTaskContext");
const { LoggerSurpport } = require("./../logging");

const ERROR_MAP = {
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

/**
 * @CrawlTaskContext component ,wrap of lib 'axios' and 'iconv'
 */
class Downloader extends LoggerSurpport {
        /**
         * Constructor of Downloader
         * 
         * @constructor
         * @param {CrawlTaskContext} context 
         */
        constructor(context) {
                super("Downloader");
                this._context = context;
        }

        /**
         * Download page and process download error
         * 
         * @param {URL} url 
         * @param {Object} headers 
         * @returns {Promise<DownloadResult>}
         */
        async download(url, headers,encoding) {
                try {
                        if (!url.url || !(url.url.startsWith("http://") || url.url.startsWith("https://"))) {
                                return {
                                        status: 404,
                                };
                        }

                        return await this._downloadCore(url, headers,encoding);
                } catch (ex) {
                        console.log(ex);
                        this.error(`download ${url.url} failed`, ex);
                        return this._getErrorResp(ex.message);
                }
        }

        /**
         * Download page core
         * 
         * @private
         * @param {URL} url 
         * @param {Object} headers 
         * @returns {Promise<DownloadResult>}
         */
        _downloadCore(url, headers,encoding) {
                encoding=encoding||this._context.taskConfig.encoding;

                return new Promise((resolve, reject) => {
                        let axiosConfig = this._createConfig(url, headers);
                        let path = url.query ? `${url.url}?${url.query}` : url.url;
                        path = this._encodeUrl(path);
                        axios.default.get(path, axiosConfig)
                                .then(
                                        res => {
                                                let chunks = [];
                                                res.data.on('data', chunk => {
                                                        chunks.push(chunk);
                                                });
                                                res.data.on('end', () => {
                                                        let buffer = Buffer.concat(chunks);
                                                        let content= res.headers["content-type"];
                                                        if(content&&content.toLowerCase().includes("charset")){
                                                            encoding=this._getEncoding(encoding,content);
                                                        }
                                                        let str = iconv.decode(buffer,  encoding || "utf8");
                                                        resolve({ html: str, status: res.status })
                                                })
                                        }
                                ).catch(ex => reject(ex));
                })
        }

        _encodeUrl(url) {
                url = unescape(url);
                url = encodeURI(url);
                return url;
        }

        _getEncoding(encoding,content){
                content=content.toLowerCase();
                if (content.includes("utf")) {
                        encoding = "utf8";
                } else if (content.includes("gbk")) {
                        encoding = "gbk";
                } else if (content.includes("gb2312")) {
                        encoding = "gb2312";
                }

                return encoding;
        }

        /**
         * Create download config
         * 
         * @private
         * @param {URL} url 
         * @param {Object} headers 
         * @returns {import("axios").AxiosRequestConfig}
         */
        _createConfig(url, headers) {
                headers = headers || {};

                // header referer 
                if (url.referUrl) {
                        url.referUrl = this._encodeUrl(url.referUrl);
                        OBJECT.setIfAbsent(headers, "Referer", url.referUrl);
                }

                // header accept
                OBJECT.setIfAbsent(headers, "Accept", "*/*");

                // header user agent
                OBJECT.setIfAbsent(
                        headers,
                        "User-Agent",
                        "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
                );

                if (this._context.taskConfig.cookie)
                        OBJECT.setIfAbsent(headers, "Set-Cookie", this._context.taskConfig.cookie);

                return {
                        timeout: this._context.taskConfig.downloadTimeout || 10000,
                        // proxy: this._context.config.proxy,
                        maxContentLength: 1024 * 1024 * 1024, // 1mb
                        headers,
                        responseType: 'stream',
                }
        }

        /**
         * Get status code by error message from @see {ErrorMap}
         * 
         * @private
         * @param {string} message 
         * @returns {DownloadResult}
         */
        _getErrorResp(message) {
                for (const key in ERROR_MAP) {
                        if (ERROR_MAP[key].matcher(message))
                                return ERROR_MAP[key].resp;
                }
        }
}

exports.Downloader = Downloader;