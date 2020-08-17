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
         * @returns {String}
         */
        resolve(target) {
                target = trim(target);
                if (!target || startsWith(target, '#'))
                        return null;

                const { protocol } = url.parse(target);
                if (protocol.includes(['http:', 'https:'])) {
                        return target.split('#')[0];
                } else if (!protocol) { // eslint-disable-line no-else-return
                        return url.resolve(this._sourece, target).split('#')[0];
                }

                return null;
        }
}

exports.UrlResolver = UrlResolver