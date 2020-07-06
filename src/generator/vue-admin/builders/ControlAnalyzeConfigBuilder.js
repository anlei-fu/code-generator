class ControlAnalyzeConfig {
        constructor () {
                this.matcher = "";              
                this.generator = "";              
                this.type = "";              
 
        }
}

exports.ControlAnalyzeConfig = ControlAnalyzeConfig;

/**
 * Builder for ControlAnalyzeConfig
 */
class ControlAnalyzeConfigBuilder{
        constructor(){
                this._config =new ControlAnalyzeConfig();
        }

        /**
         * Set property matcher
         * 
         * @param {String} matcher
         * @returns {ControlAnalyzeConfigBuilder}
         */
        matcher(matcher){
                this._config.matcher = matcher;
                return this;
        }

        /**
         * Set property generator
         * 
         * @param {String} generator
         * @returns {ControlAnalyzeConfigBuilder}
         */
        generator(generator){
                this._config.generator = generator;
                return this;
        }

        /**
         * Set property type
         * 
         * @param {String} type
         * @returns {ControlAnalyzeConfigBuilder}
         */
        type(type){
                this._config.type = type;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {ControlAnalyzeConfig}
         */
        build(){
                return this._config;
        }      
}

exports.ControlAnalyzeConfigBuilder = ControlAnalyzeConfigBuilder;
