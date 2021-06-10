
const axios = require("axios");
const iconv = require('iconv-lite');
const { FILE } = require("./../libs");
const { LoggerSurpport } = require("./../logging");

class FileDownloader extends LoggerSurpport {

        /**
         * Constructor of FileDownloader
         * 
         * @constructor
         * @param {String} downloadFolder 
         */
        constructor (downloadFolder) {
                super("FileDownloader")
                this._scriptFolder = downloadFolder;
        }

        /**
         * Download page and process download error
         * 
         * @param {String} host
         * @param {String} file
         */
        async download(url, file, { headers = {}, timeout = 10 * 1000, encoding = "utf8" }) {
                try {
                        this.info(`downloading ${file}`);
                        let content = await this._downloadCore(url, { headers, timeout, encoding });
                        FILE.write(`${this._scriptFolder}/${file}`, content);
                        this.info(`download ${file} succeed`);
                } catch (ex) {
                        this.error(`download ${file} failed`, ex);
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
        _downloadCore(url, { headers, timeout, encoding }) {
                return new Promise((resolve, reject) => {
                        axios.default.get(url, this._createConfig({ headers, timeout }))
                                .then(
                                        res => {
                                                let chunks = [];
                                                res.data.on('data', chunk => {
                                                        chunks.push(chunk);
                                                });
                                                res.data.on('end', () => {
                                                        let buffer = Buffer.concat(chunks);
                                                        let str = iconv.decode(buffer, encoding);
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
        _createConfig({ headers, timeout }) {
                return {
                        timeout,
                        // proxy: this._context.config.proxy,
                        maxContentLength: 1024 * 1024 * 1024 * 10, // 1mb
                        responseType: 'stream',
                        headers
                }
        }
}

exports.FileDownloader = FileDownloader;