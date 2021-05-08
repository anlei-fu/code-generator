class CheckBoxConfig {
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
                 * @type {String}
                 */
                this.lable;              
                /**
                 * @type {Number}
                 */
                this.width;              
 
        }
}

exports.CheckBoxConfig = CheckBoxConfig;

/**
 * Builder for CheckBoxConfig
 */
class CheckBoxConfigBuilder{
        constructor(){
                this._config =new CheckBoxConfig();
        }

        /**
         * Set property options
         * 
         * @param {[Option]} options
         * @returns {CheckBoxConfigBuilder}
         */
        options(options){
                this._config.options = options;
                return this;
        }

        /**
         * Set property defaultSelect
         * 
         * @param {String} defaultSelect
         * @returns {CheckBoxConfigBuilder}
         */
        defaultSelect(defaultSelect){
                this._config.defaultSelect = defaultSelect;
                return this;
        }

        /**
         * Set property lable
         * 
         * @param {String} lable
         * @returns {CheckBoxConfigBuilder}
         */
        lable(lable){
                this._config.lable = lable;
                return this;
        }

        /**
         * Set property width
         * 
         * @param {Number} width
         * @returns {CheckBoxConfigBuilder}
         */
        width(width){
                this._config.width = width;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {CheckBoxConfig}
         */
        build(){
                return this._config;
        }      
}

exports.CheckBoxConfigBuilder = CheckBoxConfigBuilder;
