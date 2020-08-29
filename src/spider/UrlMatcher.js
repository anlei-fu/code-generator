class UrlMatcher {
        constructor (exps = []) {
                this.exps = [];
                exps.forEach(x => {
                        this.exps.push(new RegExp(x));
                })
        }

        /**
         * Check is url matched with regexes
         * 
         * @param {String} url 
         * @returns {Boolean}
         */
        match(url) {
                if(!url)
                  return false;

                if (this.exps.length == 0)
                        return true;

                for (const exp of this.exps) {
                        if (exp.test(url))
                                return true;
                }

                return false;
        }
}

exports.UrlMatcher = UrlMatcher;