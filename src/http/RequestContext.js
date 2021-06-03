class RequestContext {
        constructor () {
                this.path = "";
                this.query = {};
                this.body = {};
                this.params = {};
                this.req = {};
                this.resp = {};

        }
}

exports.RequestContext = RequestContext;

/**
 * Builder for RequestContext
 */
class RequestContextBuilder {
        constructor () {
                this._config = new RequestContext();
        }

        /**
         * Set property path
         * 
         * @param {String} path
         * @returns {RequestContextBuilder}
         */
        path(path) {
                this._config.path = path;
                return this;
        }

        /**
         * Set property query
         * 
         * @param {String} query
         * @returns {RequestContextBuilder}
         */
        query(query) {
                this._config.query = query;
                return this;
        }

        /**
         * Set property body
         * 
         * @param {String} body
         * @returns {RequestContextBuilder}
         */
        body(body) {
                this._config.body = body;
                return this;
        }

        /**
         * Set property params
         * 
         * @param {String} params
         * @returns {RequestContextBuilder}
         */
        params(params) {
                this._config.params = params;
                return this;
        }


        /**
         * Build 
         * 
         * @returns {RequestContext}
         */
        build() {
                return this._config;
        }
}

exports.RequestContextBuilder = RequestContextBuilder;
