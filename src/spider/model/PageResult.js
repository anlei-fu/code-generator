const { URL } = require("./URL");
const { PageResult: PageCode } = require("./../constant/PageResult")

class PageResult {
        constructor() {
                /**
                 * The id of url
                 */
                this.id = 0;

                /**
                 * The result code of page @see {PageResultCode}
                 */
                this.pageResult = 1;

                /**
                 * The http status code of dowload page
                 */
                this.httpStatus = 200;

                /**
                 * The data extracted
                 */
                this.data = null;

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

        constructor(pageContext, url) {
                this.url = url;
                this.pageContext = pageContext;
                this._config = new PageResult();
                this._config.id = url.id;
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
         * Set page result to "Script Exception"
         * 
         * @returns {PageResultBuilder}
         */
        scriptException() {
                this._config.pageResult = PageCode.SCRIPT_INCORRECT;
                return this;
        }

        /**
         * Set page result to "Page Incorrect"
         * 
         * @returns {PageResultBuilder}
         */
        pageIncorrect() {
                this._config.pageResult = PageCode.PAGE_INCORRECT;
                return this;
        }

        /**
         * Set page result to "Success"
         */
        success() {
                this._config.pageResult = PageCode.SUCCESS;
                return this;
        }

        /**
         * Set page result to "Failed"
         * 
         * @returns {PageResultBuilder}
         */
        failed() {
                this._config.pageResult = PageCode.SCRIPT_INCORRECT;
                return this;
        }

        /**
         * Set page result to "Blocked"
         * 
         * @returns {PageResultBuilder}
         */
        blocked() {
                this._config.pageResult = PageCode.BLOCKED;
                return this;
        }

        /**
         * Set property status
         * 
         * @param {Number} httpStatus
         * @returns {PageResultBuilder}
         */
        httpStatus(httpStatus) {
                this._config.httpStatus = httpStatus;
                return this;
        }

        /**
         * Set property data
         * 
         * @param {Object} data
         * @returns {PageResultBuilder}
         */
        data(data) {
                if (data)
                        this._config.data = JSON.stringify({
                                id: this.url.id,
                                url: this.url.encodedUrl,
                                data
                        });
                return this;
        }

        /**
         * Set property newUrls
         * 
         * @param {URL} newUrl
         * @returns {PageResultBuilder}
         */
        newUrl(newUrl) {
                if (!newUrl || !newUrl.url)
                        return;

                this._config.newUrls.push({
                        url: this.pageContext.taskContext.urlEncoder.encode(newUrl.url),
                        referUrl: this.url.encodedUrl,
                        depth: this.url.depth + 1,
                        query: newUrl.query
                });

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

        findUrl() {

                this.pageContext.$("a").each((i, e) => {
                        let href = this.pageContext.$(e).attr("href");
                        let full = this.pageContext.urlResolver.resolve(href);
                        if (full && this.pageContext.taskContext.urlMatcher.match(full.url)) {
                               this.newUrl(full);
                        }
                });

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
