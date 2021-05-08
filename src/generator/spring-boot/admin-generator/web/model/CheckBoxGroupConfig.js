class CheckBoxGroupConfig {
        constructor () {
                /**
                 * @type {[Option]}
                 */
                this.options;              
                /**
                 * @type {[DefaultSelect]}
                 */
                this.defaultSelects;              
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

exports.CheckBoxGroupConfig = CheckBoxGroupConfig;

/**
 * Builder for CheckBoxGroupConfig
 */
class CheckBoxGroupConfigBuilder{
        constructor(){
                this._config =new CheckBoxGroupConfig();
        }

        /**
         * Set property options
         * 
         * @param {[Option]} options
         * @returns {CheckBoxGroupConfigBuilder}
         */
        options(options){
                this._config.options = options;
                return this;
        }

        /**
         * Set property defaultSelects
         * 
         * @param {[DefaultSelect]} defaultSelects
         * @returns {CheckBoxGroupConfigBuilder}
         */
        defaultSelects(defaultSelects){
                this._config.defaultSelects = defaultSelects;
                return this;
        }

        /**
         * Set property lable
         * 
         * @param {String} lable
         * @returns {CheckBoxGroupConfigBuilder}
         */
        lable(lable){
                this._config.lable = lable;
                return this;
        }

        /**
         * Set property width
         * 
         * @param {Number} width
         * @returns {CheckBoxGroupConfigBuilder}
         */
        width(width){
                this._config.width = width;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {CheckBoxGroupConfig}
         */
        build(){
                return this._config;
        }      
}

exports.CheckBoxGroupConfigBuilder = CheckBoxGroupConfigBuilder;
