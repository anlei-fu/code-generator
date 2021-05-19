class NewSiteGenerateConfig {
        constructor () {
                this.name = "";              
                this.domain = "";              
                this.siteId = "";              
                this.testUrl = "";              
                this.title = "";              
                this.author = "";              
                this.date = "";              
                this.content = "";              
                this.encoding = "";              
                this.navSelector = "";   
                this.urlMatchPattern="";           
                this.now = "";      
        }
}

exports.NewSiteGenerateConfig = NewSiteGenerateConfig;

/**
 * Builder for NewSiteGenerateConfig
 */
class NewSiteGenerateConfigBuilder{
        constructor(){
                this._config =new NewSiteGenerateConfig();
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {NewSiteGenerateConfigBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

        /**
         * Set property domain
         * 
         * @param {String} domain
         * @returns {NewSiteGenerateConfigBuilder}
         */
        domain(domain){
                this._config.domain = domain;
                return this;
        }

        /**
         * Set property siteId
         * 
         * @param {String} siteId
         * @returns {NewSiteGenerateConfigBuilder}
         */
        siteId(siteId){
                this._config.siteId = siteId;
                return this;
        }

        /**
         * Set property testUrl
         * 
         * @param {String} testUrl
         * @returns {NewSiteGenerateConfigBuilder}
         */
        testUrl(testUrl){
                this._config.testUrl = testUrl;
                return this;
        }

        /**
         * Set property title
         * 
         * @param {String} title
         * @returns {NewSiteGenerateConfigBuilder}
         */
        title(title){
                this._config.title = title;
                return this;
        }

        /**
         * Set property author
         * 
         * @param {String} author
         * @returns {NewSiteGenerateConfigBuilder}
         */
        author(author){
                this._config.author = author;
                return this;
        }

        /**
         * Set property date
         * 
         * @param {String} date
         * @returns {NewSiteGenerateConfigBuilder}
         */
        date(date){
                this._config.date = date;
                return this;
        }

        /**
         * Set property content
         * 
         * @param {String} content
         * @returns {NewSiteGenerateConfigBuilder}
         */
        content(content){
                this._config.content = content;
                return this;
        }

        /**
         * Set property encoding
         * 
         * @param {String} encoding
         * @returns {NewSiteGenerateConfigBuilder}
         */
        encoding(encoding){
                this._config.encoding = encoding;
                return this;
        }

        /**
         * Set property navSelector
         * 
         * @param {String} navSelector
         * @returns {NewSiteGenerateConfigBuilder}
         */
        navSelector(navSelector){
                this._config.navSelector = navSelector;
                return this;
        }

        /**
         * Set property now
         * 
         * @param {String} now
         * @returns {NewSiteGenerateConfigBuilder}
         */
        now(now){
                this._config.now = now;
                return this;
        }

        urlMatchPattern(pattern){
                this._config.urlMatchPattern=pattern;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {NewSiteGenerateConfig}
         */
        build(){
                return this._config;
        }      
}

exports.NewSiteGenerateConfigBuilder = NewSiteGenerateConfigBuilder;
