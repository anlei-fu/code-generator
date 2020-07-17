var url = require('url');

/**
 * @CrawlTaskContext component
 */
class UrlResolver {

        /**
         * Resolve and merge url
         * 
         * @param {String} source 
         * @param {String} target 
         * @returns {String}
         */
        resolve(source, target) {
                target = trim(target);
                if (!target || startsWith(target, '#'))
                        return null;

                const { protocol } = url.parse(target);
                if (protocol.includes(['http:', 'https:'])) {
                        return target.split('#')[0];
                } else if (!protocol) { // eslint-disable-line no-else-return
                        return url.resolve(source, target).split('#')[0];
                }

                return null;
        }
}

exports.UrlResolver = UrlResolver