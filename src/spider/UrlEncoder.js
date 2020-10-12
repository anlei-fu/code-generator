const { STR } = require("./../libs");
class UrlEncoder {
        constructor (patterns = {}) {
                this._patterns = patterns;
        }

        /**
         * Encode url
         * 
         * @param {String} url 
         * @returns {String}
         */
        encode(url) {
                return STR.replace(url, this._patterns);
        }
}

exports.UrlEncoder = UrlEncoder;