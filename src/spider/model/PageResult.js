class PageResult {
        constructor () {
                this.pageResultCode = 0;              
                this.url = "";              
                this.status = "";              
                this.data = {};              
                this.newUrls = [];              
        }
}

exports.PageResult = PageResult;

/**
 * Builder for PageResult
 */
class PageResultBuilder{
        constructor(){
                this._config =new PageResult();
        }

        /**
         * Set property pageResultCode
         * 
         * @param {String} pageResultCode
         * @returns {PageResultBuilder}
         */
        pageResultCode(pageResultCode){
                this._config.pageResultCode = pageResultCode;
                return this;
        }

        /**
         * Set property url
         * 
         * @param {String} url
         * @returns {PageResultBuilder}
         */
        url(url){
                this._config.url = url;
                return this;
        }

        /**
         * Set property status
         * 
         * @param {String} status
         * @returns {PageResultBuilder}
         */
        status(status){
                this._config.status = status;
                return this;
        }

        /**
         * Set property data
         * 
         * @param {String} data
         * @returns {PageResultBuilder}
         */
        data(data){
                this._config.data = data;
                return this;
        }

        /**
         * Set property newUrls
         * 
         * @param {String} newUrls
         * @returns {PageResultBuilder}
         */
        newUrls(newUrls){
                this._config.newUrls = newUrls;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {PageResult}
         */
        build(){
                return this._config;
        }      
}

exports.PageResultBuilder = PageResultBuilder;
