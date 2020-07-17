class PageResult {
        constructor () {
                /**
                 * the result code of page @see {}
                 */
                this.pageResultCode = 0;     
                
                /**
                 * the url of page
                 */
                this.url = "";        
                
                /**
                 * the status code of dowload page
                 */
                this.status = 200; 
                
                /**
                 * the data extracted
                 */
                this.data = {};       
                
                /**
                 * new matched urls @type {UrlPair}
                 */
                this.newUrls = [];   
                
                /**
                 * not required
                 */
                this.msg="";
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
         * Set property msg
         * 
         * @param {String} newUrls
         * @returns {PageResultBuilder}
         */
        msg(msg){
                this._config.msg = msg;
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
