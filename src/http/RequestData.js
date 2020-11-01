class RequestData {
        constructor () {
                this.path = "";              
                this.query = "";              
                this.body = "";              
                this.params = "";              
 
        }
}

exports.RequestData = RequestData;

/**
 * Builder for RequestData
 */
class RequestDataBuilder{
        constructor(){
                this._config =new RequestData();
        }

        /**
         * Set property path
         * 
         * @param {String} path
         * @returns {RequestDataBuilder}
         */
        path(path){
                this._config.path = path;
                return this;
        }

        /**
         * Set property query
         * 
         * @param {String} query
         * @returns {RequestDataBuilder}
         */
        query(query){
                this._config.query = query;
                return this;
        }

        /**
         * Set property body
         * 
         * @param {String} body
         * @returns {RequestDataBuilder}
         */
        body(body){
                this._config.body = body;
                return this;
        }

        /**
         * Set property params
         * 
         * @param {String} params
         * @returns {RequestDataBuilder}
         */
        params(params){
                this._config.params = params;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {RequestData}
         */
        build(){
                return this._config;
        }      
}

exports.RequestDataBuilder = RequestDataBuilder;
