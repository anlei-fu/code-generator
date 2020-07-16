class UrlPair {
        constructor () {
                this.target = "";              
                this.refferUrl = "";              
        }
}

exports.UrlPair = UrlPair;

/**
 * Builder for UrlPair
 */
class UrlPairBuilder{
        constructor(){
                this._config =new UrlPair();
        }

        /**
         * Set property url
         * 
         * @param {String} target
         * @returns {UrlPairBuilder}
         */
        targe(target){
                this._config.target = target;
                return this;
        }

        /**
         * Set property refferUrlPair
         * 
         * @param {String} refferUrl
         * @returns {UrlPairBuilder}
         */
        refferUrl(refferUrl){
                this._config.refferUrl = refferUrl;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {UrlPair}
         */
        build(){
                return this._config;
        }      
}

exports.UrlPairBuilder = UrlPairBuilder;
