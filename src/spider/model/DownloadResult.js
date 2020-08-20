class DownloadResult {
        constructor () {
                /**
                 * Http status code of download @see {HttpStatus}
                 */
                this.status = 200;

                /**
                 * The downloaded html
                 */
                this.html = "";
        }
}

exports.DownloadResult = DownloadResult;

/**
 * Builder for DownloadResult
 */
class DownloadResultBuilder {
        constructor () {
                this._config = new DownloadResult();
        }

        /**
         * Set property statusCode
         * 
         * @param {String} statusCode
         * @returns {DownloadResultBuilder}
         */
        status(statusCode) {
                this._config.status = statusCode;
                return this;
        }

        /**
         * Set property html
         * 
         * @param {String} html
         * @returns {DownloadResultBuilder}
         */
        html(html) {
                this._config.html = html;
                return this;
        }

        /**
         * Build 
         * 
         * @returns {DownloadResult}
         */
        build() {
                return this._config;
        }
}

exports.DownloadResultBuilder = DownloadResultBuilder;
