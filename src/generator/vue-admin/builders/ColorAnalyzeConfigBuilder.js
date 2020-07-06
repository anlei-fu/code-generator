class ColorAnalyzeConfig {
        constructor () {
                this.matcher = "";              
                this.generator = "";              
                this.type = "";              
 
        }
}

exports.ColorAnalyzeConfig = ColorAnalyzeConfig;

/**
 * Builder for ColorAnalyzeConfig
 */
class ColorAnalyzeConfigBuilder{
        constructor(){
                this._config =new ColorAnalyzeConfig();
        }

        /**
         * Set property matcher
         * 
         * @param {String} matcher
         * @returns {ColorAnalyzeConfigBuilder}
         */
        matcher(matcher){
                this._config.matcher = matcher;
                return this;
        }

        /**
         * Set property generator
         * 
         * @param {String} generator
         * @returns {ColorAnalyzeConfigBuilder}
         */
        generator(generator){
                this._config.generator = generator;
                return this;
        }

        /**
         * Set property type
         * 
         * @param {String} type
         * @returns {ColorAnalyzeConfigBuilder}
         */
        type(type){
                this._config.type = type;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {ColorAnalyzeConfig}
         */
        build(){
                return this._config;
        }      
}

exports.ColorAnalyzeConfigBuilder = ColorAnalyzeConfigBuilder;
