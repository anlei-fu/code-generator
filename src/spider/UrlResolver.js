var url = require('url');

/**
 * @CrawlTaskContext component
 */
class UrlResolver {

        constructor (source) {
                this._sourece = source;
        }
        /**
         * Resolve and merge url
         * 
         * @param {String} source 
         * @param {String} target 
         * @returns {{url:String,query:String}}
         */
        resolve(target) {
                if (!target || target.startsWith('#') || target.trim() == "")
                        return null;

                target =decodeURI(target);
                const { protocol } = url.parse(target);
                if (!protocol) {
                        let u = url.resolve(this._sourece, target).split('#')[0];
                        if (!u)
                                return null;

                        return {
                                url: u.split("?")[0],
                                query: u.includes("?") ? u.split("?")[1] : ""
                        }
                }
                else if (protocol=="http:"||protocol=="https") {
                        let u = target.split('#')[0]
                        if (!u)
                                return null;

                        return {
                                url: u.split("?")[0],
                                query: u.includes("?") ? u.split("?")[1] : ""
                        }
                }
                
                return null;
        }
}

exports.UrlResolver = UrlResolver