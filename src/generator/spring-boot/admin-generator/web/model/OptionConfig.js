class OptionConfig {
        constructor () {
                this.name = "";              
                this.value = "";              
 
        }
}

exports.OptionConfig = OptionConfig;

/**
 * Builder for OptionConfig
 */
class OptionConfigBuilder{
        constructor(){
                this._config =new OptionConfig();
        }

        /**
         * Set property name
         * 
         * @param {*} name
         * @returns {OptionConfigBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

        /**
         * Set property value
         * 
         * @param {*} value
         * @returns {OptionConfigBuilder}
         */
        value(value){
                this._config.value = value;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {OptionConfig}
         */
        build(){
                return this._config;
        }      
}

exports.OptionConfigBuilder = OptionConfigBuilder;
