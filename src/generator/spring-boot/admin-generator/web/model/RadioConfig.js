class RadioConfig {
        constructor () {
                /**
                 * @type {[Option]}
                 */
                this.options;              
                /**
                 * @type {String}
                 */
                this.defaultSelect;              
                /**
                 * @type {Number}
                 */
                this.defaultValue;              
 
        }
}

exports.RadioConfig = RadioConfig;

/**
 * Builder for RadioConfig
 */
class RadioConfigBuilder{
        constructor(){
                this._config =new RadioConfig();
        }

        /**
         * Set property options
         * 
         * @param {[Option]} options
         * @returns {RadioConfigBuilder}
         */
        options(options){
                this._config.options = options;
                return this;
        }

        /**
         * Set property defaultSelect
         * 
         * @param {String} defaultSelect
         * @returns {RadioConfigBuilder}
         */
        defaultSelect(defaultSelect){
                this._config.defaultSelect = defaultSelect;
                return this;
        }

        /**
         * Set property defaultValue
         * 
         * @param {Number} defaultValue
         * @returns {RadioConfigBuilder}
         */
        defaultValue(defaultValue){
                this._config.defaultValue = defaultValue;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {RadioConfig}
         */
        build(){
                return this._config;
        }      
}

exports.RadioConfigBuilder = RadioConfigBuilder;
