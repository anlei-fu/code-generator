const { URL } = require("./URL");

class PageResult {
        constructor () {
                /**
                 * The result code of page @see {PageResultCode}
                 */
                this.pageResult = 1;

                /**
                 * The url of page
                 * 
                 * @type {URL}
                 */
                this.url;

                /**
                 * The id of url
                 */
                this.id=0;

                /**
                 * The http status code of dowload page
                 */
                this.status = 200;

                /**
                 * The data extracted
                 */
                this.data="";

                /**
                 * The newly detected matched urls element type @type {URL}
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

        constructor (pageContext, url) {
                this.url=url;
                this.pageContext = pageContext;
                this._config = new PageResult();
                this._config.url = url;
        }

        /**
         * Set property pageResultCode
         * 
         * @param {Number} pageResult
         * @returns {PageResultBuilder}
         */
        pageResult(pageResult) {
                this._config.pageResult = pageResult;
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
                if(data)
                this._config.data = JSON.stringify({
                        url: this.url,
                        data
                });
                return this;
        }

        /**
         * Set property newUrls
         * 
         * @param {[URL]} newUrls
         * @returns {PageResultBuilder}
         */
        newUrls(newUrls) {
                newUrls.forEach(x => {
                        this._config.newUrls.push({
                                url: this.pageContext.taskContext.urlEncoder.encode(x),
                                refer: this.url.url,
                                depth: this.url.depth + 1
                        });
                })
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
