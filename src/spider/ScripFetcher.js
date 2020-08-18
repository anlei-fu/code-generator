
const axios = require("axios");
const iconv = require('iconv-lite');
const { FILE } = require("./utils/file");
const { LoggerSurpport } = require("./LoggerSurpport");

class ScriptFetcher extends LoggerSurpport {

        /**
         * Constructor of ScriptFetcher
         * 
         * @constructor
         * @param {String} scriptFolder 
         */
        constructor (scriptFolder) {
                super("ScriptFetcher")
                this._scriptFolder = scriptFolder;
        }

        /**
         * Download page and process download error
         * 
         * @param {String} host
         * @param {String} file
         */
        async fetch(host, file) {
                try {
                        this.info(`dowloading ${file}`);
                        let content = await this._download(`${host}/${file}`);
                        FILE.write(`${this._scriptFolder}/${file}`, content);
                        this.info(`dowload ${file} succeed`);
                } catch (ex) {
                        this.error(`dowload ${file} failed`, ex);
                        throw ex;
                }
        }

        /**
         * Download page core
         * 
         * @private
         * @param {String} url 
         * @param {Object} headers 
         * @returns {Promise<DownloadResult>}
         */
        _download(url) {
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
                                                        resolve(str)
                                                })
                                        }
                                ).catch(ex => reject(ex));
                })
        }

        /**
         * Create download config
         * 
         * @private
         * @param {URL} url 
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