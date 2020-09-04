const { STR } = require("./utils/str");
class UrlDecoder {
        constructor (patterns = {}) {
                this._patterns = {};
                Object.keys(patterns).forEach(key => {
                        if (patterns[key])
                                this._patterns[patterns[key]] = key;
                })
        }

        /**
         * Decode url
         * 
         * @param {String} url 
         * @returns {String}
         */
        decode(url) {
                return STR.replace(url, this._patterns);
        }
}

exports.UrlDecoder = UrlDecoder;