const { STR } = require("./../libs/str");
class UrlEncoder {
        constructor (patterns = {}) {
                this._patterns = patterns;
        }

        encode(url) {
                return STR.replace(url, this._patterns);
        }
}

exports.UrlEncoder = UrlEncoder;