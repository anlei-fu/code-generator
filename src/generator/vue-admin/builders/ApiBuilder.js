class Api {
        constructor () {
                this.method = "";              
                this.url = "";              
                this.pathVarible = "";              
 
        }
}

exports.Api = Api;

/**
 * Builder for Api
 */
class ApiBuilder{
        constructor(){
                this._config =new Api();
        }

        /**
         * Set property method
         * 
         * @param {String} method
         * @returns {ApiBuilder}
         */
        method(method){
                this._config.method = method;
                return this;
        }

        /**
         * Set property url
         * 
         * @param {String} url
         * @returns {ApiBuilder}
         */
        url(url){
                this._config.url = url;
                return this;
        }

        /**
         * Set property pathVarible
         * 
         * @param {String} pathVarible
         * @returns {ApiBuilder}
         */
        pathVarible(pathVarible){
                this._config.pathVarible = pathVarible;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Api}
         */
        build(){
                return this._config;
        }      
}

exports.ApiBuilder = ApiBuilder;
