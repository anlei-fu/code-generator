class PageGroup {
        constructor () {
                this.listPage = "";              
                this.updatePage = "";              
 
        }
}

exports.PageGroup = PageGroup;

/**
 * Builder for PageGroup
 */
class PageGroupBuilder{
        constructor(){
                this._config =new PageGroup();
        }

        /**
         * Set property listPage
         * 
         * @param {String} listPage
         * @returns {PageGroupBuilder}
         */
        listPage(listPage){
                this._config.listPage = listPage;
                return this;
        }

        /**
         * Set property updatePage
         * 
         * @param {String} updatePage
         * @returns {PageGroupBuilder}
         */
        updatePage(updatePage){
                this._config.updatePage = updatePage;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {PageGroup}
         */
        build(){
                return this._config;
        }      
}

exports.PageGroupBuilder = PageGroupBuilder;
