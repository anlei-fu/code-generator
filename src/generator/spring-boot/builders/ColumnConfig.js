class ColumnConfig {
        constructor () {
                this.property = "";              
                this.alias = "";              
                this.suffix = "";              
                this.prefix = "";              
 
        }
}

exports.ColumnConfig = ColumnConfig;

/**
 * Builder for ColumnConfig
 */
class ColumnConfigBuilder{
        constructor(){
                this._config =new ColumnConfig();
        }

        /**
         * Set property property
         * 
         * @param {String} property
         * @returns {ColumnConfigBuilder}
         */
        property(property){
                this._config.property = property;
                return this;
        }

        /**
         * Set property alias
         * 
         * @param {String} alias
         * @returns {ColumnConfigBuilder}
         */
        alias(alias){
                this._config.alias = alias;
                return this;
        }

        /**
         * Set property suffix
         * 
         * @param {String} suffix
         * @returns {ColumnConfigBuilder}
         */
        suffix(suffix){
                this._config.suffix = suffix;
                return this;
        }

        /**
         * Set property prefix
         * 
         * @param {String} prefix
         * @returns {ColumnConfigBuilder}
         */
        prefix(prefix){
                this._config.prefix = prefix;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {ColumnConfig}
         */
        build(){
                return this._config;
        }      
}

exports.ColumnConfigBuilder = ColumnConfigBuilder;
