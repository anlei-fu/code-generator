class BrowserPage {
        constructor () {
                this.page = "";              
                this.available = false;              
        }
}

exports.BrowserPage = BrowserPage;

/**
 * Builder for Page
 */
class BrowserPageBuilder{
        constructor(){
                this._config =new BrowserPage();
        }

        /**
         * Set property page
         * 
         * @param {String} page
         * @returns {BrowserPageBuilder}
         */
        page(page){
                this._config.page = page;
                return this;
        }

        /**
         * Set property available
         * 
         * @param {String} available
         * @returns {BrowserPageBuilder}
         */
        available(available){
                this._config.available = available;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {BrowserPage}
         */
        build(){
                return this._config;
        }      
}

exports.BrowserPageBuilder = BrowserPageBuilder;
