const { PageResultCode } = require("./../constant/PageResultCode");
const { UrlPair } = require("./UrlPair");

class PageResult {
        constructor () {
                /**
                 * The result code of page @see {PageResultCode}
                 */
                this.pageResultCode = PageResultCode.SUCCCESS;

                /**
                 * The url of page
                 */
                this.url = "";

                /**
                 * The http status code of dowload page
                 */
                this.status = 200;

                /**
                 * The data extracted
                 */
                this.data = {};

                /**
                 * The newly detected matched urls @type {UrlPair}
                 */
                this.newUrls = [];

                /**
                 * The page msg, not required
                 */
                this.msg = "";
        }
}

exports.PageResult = PageResult;

/**
 * Builder for PageResult
 */
class PageResultBuilder {
        constructor () {
                this._config = new PageResult();
        }

        /**
         * Set property pageResultCode
         * 
         * @param {Number} pageResultCode
         * @returns {PageResultBuilder}
         */
        pageResultCode(pageResultCode) {
                this._config.pageResultCode = pageResultCode;
                return this;
        }

        /**
         * Set property url
         * 
         * @param {String} url
         * @returns {PageResultBuilder}
         */
        url(url) {
                this._config.url = url;
                return this;
        }

        /**
         * Set property status
         * 
         * @param {Number} status
         * @returns {PageResultBuilder}
         */
        status(status) {
                this._config.status = status;
                return this;
        }

        /**
         * Set property data
         * 
         * @param {Object} data
         * @returns {PageResultBuilder}
         */
        data(data) {
                this._config.data = data;
                return this;
        }

        /**
         * Set property newUrls
         * 
         * @param {[UrlPair]} newUrls
         * @returns {PageResultBuilder}
         */
        newUrls(newUrls) {
                this._config.newUrls = newUrls;
                return this;
        }

        /**
         * Set property msg
         * 
         * @param {String} newUrls
         * @returns {PageResultBuilder}
         */
        msg(msg) {
                this._config.msg = msg;
                return this;
        }

        /**
         * Build 
         * 
         * @returns {PageResult}
         */
        build() {
                return this._config;
        }
}

exports.PageResultBuilder = PageResultBuilder;
