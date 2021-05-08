class SelectConfig {
        constructor () {
                this.options = "";              
                this.width = "";              
                this.lable = "";              
                this.icon = "";              
                this.placeHolder = "";              
                this.mutiple = "";              
 
        }
}

exports.SelectConfig = SelectConfig;

/**
 * Builder for SelectConfig
 */
class SelectConfigBuilder{
        constructor(){
                this._config =new SelectConfig();
        }

        /**
         * Set property options
         * 
         * @param {*} options
         * @returns {SelectConfigBuilder}
         */
        options(options){
                this._config.options = options;
                return this;
        }

        /**
         * Set property width
         * 
         * @param {*} width
         * @returns {SelectConfigBuilder}
         */
        width(width){
                this._config.width = width;
                return this;
        }

        /**
         * Set property lable
         * 
         * @param {*} lable
         * @returns {SelectConfigBuilder}
         */
        lable(lable){
                this._config.lable = lable;
                return this;
        }

        /**
         * Set property icon
         * 
         * @param {*} icon
         * @returns {SelectConfigBuilder}
         */
        icon(icon){
                this._config.icon = icon;
                return this;
        }

        /**
         * Set property placeHolder
         * 
         * @param {*} placeHolder
         * @returns {SelectConfigBuilder}
         */
        placeHolder(placeHolder){
                this._config.placeHolder = placeHolder;
                return this;
        }

        /**
         * Set property mutiple
         * 
         * @param {*} mutiple
         * @returns {SelectConfigBuilder}
         */
        mutiple(mutiple){
                this._config.mutiple = mutiple;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {SelectConfig}
         */
        build(){
                return this._config;
        }      
}

exports.SelectConfigBuilder = SelectConfigBuilder;
