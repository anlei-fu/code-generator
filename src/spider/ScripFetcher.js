
const axios = require("axios");
const iconv = require('iconv-lite');
const { FILE } = require("./utils/file");
const { LoggerSurpport } = require("./LoggerSurpport");

class ScriptFetcher extends LoggerSurpport {

        constructor (scriptFolder) {
                super("ScriptFetcher")
                this._scriptFolder = scriptFolder;
        }

        /**
         * Download page and process download error
         * 
         * @param {String} url
         */
        async fetch(host, file) {
                try {
                        this.info(`dowloading ${file}`);
                        let content = await this._downloadCore(`${host}/${file}`);
                        FILE.write(`${this._scriptFolder}/${file}`, content.html);
                        this.info(`dowloading ${file} success`);
                } catch (ex) {
                        this.error(`dowloading ${file} failed`, ex);
                        throw ex;
                }
        }

        /**
         * Download page core
         * 
         * @private
         * @param {UrlPair} url 
         * @param {Object} headers 
         * @returns {Promise<DownloadResult>}
         */
        _downloadCore(url) {
                return new Promise((resolve, reject) => {
                        axios.default.get(url, this._createConfig())
                                .then(
                                        res => {
                                                let chunks = [];
                                                res.data.on('data', chunk => {
                                                        chunks.push(chunk);
                                                });
                                                res.data.on('end', () => {
                                                        let buffer = Buffer.concat(chunks);
                                                        let str = iconv.decode(buffer, "utf8");
                                                        resolve({ html: str, status: res.status })
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
        _createConfig() {
                return {
                        timeout: 10000,
                        // proxy: this._context.config.proxy,
                        maxContentLength: 1024 * 1024 * 1024 * 10, // 1mb
                        responseType: 'stream',
                }
        }
}

exports.ScriptFetcher = ScriptFetcher;