/**
 * Check giving matcher is match name
 * 
 * @param {String} name 
 * @param {String} type 
 * @param {String} matcherName 
 * @param {MatcherCollection} matchers 
 * @returns {boolean}
 */
function DEFAULT_MATCHER_METHOD(name, type, matcherName, matchers) {
        return matchers[type][matcherName].match
                ? matchers[type][matcherName].match(name)
                : name.toLowerCase().includes(matcherName.toLowerCase());
}


/**
 * Check item is match by giving matchers
 * 
 * @param {String} name 
 * @param {String} type 
 * @param {MatcherCollection} matchers 
 * @returns {boolean}
 */
function DEFAULT_MATCHER_COLLECTION_METHOD(name, type, matchers) {
        if (!matchers[type])
                return false;

        for (const item in matchers[type]) {
                let match = matchers[type][item].match
                        ? matchers[type][item].match(name)
                        : name.toLowerCase().includes(item.toLowerCase());

                if (match)
                        return true;
        }

        return false;
}

exports.DEFAULT_MATCHER_METHOD = DEFAULT_MATCHER_METHOD;
exports.DEFAULT_MATCHER_COLLECTION_METHOD = DEFAULT_MATCHER_COLLECTION_METHOD;