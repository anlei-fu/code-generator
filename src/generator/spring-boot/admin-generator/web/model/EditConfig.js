class EditConfig {
        constructor () {
                /**
                 * @type {Number}
                 */
                this.lableWidth;              
                /**
                 * @type {Number}
                 */
                this.rowColumnCount;              
 
        }
}

exports.EditConfig = EditConfig;

/**
 * Builder for EditConfig
 */
class EditConfigBuilder{
        constructor(){
                this._config =new EditConfig();
        }

        /**
         * Set property lableWidth
         * 
         * @param {Number} lableWidth
         * @returns {EditConfigBuilder}
         */
        lableWidth(lableWidth){
                this._config.lableWidth = lableWidth;
                return this;
        }

        /**
         * Set property rowColumnCount
         * 
         * @param {Number} rowColumnCount
         * @returns {EditConfigBuilder}
         */
        rowColumnCount(rowColumnCount){
                this._config.rowColumnCount = rowColumnCount;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {EditConfig}
         */
        build(){
                return this._config;
        }      
}

exports.EditConfigBuilder = EditConfigBuilder;
