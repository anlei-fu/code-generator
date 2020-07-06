class Control {
        constructor () {
                this.type = "";              
                this.name = "";              
                this.label = "";              
                this.defaultValue = "";              
                this.config = "";              
 
        }
}

exports.Control = Control;

/**
 * Builder for Control
 */
class ControlBuilder{
        constructor(){
                this._config =new Control();
        }

        /**
         * Set property type
         * 
         * @param {String} type
         * @returns {ControlBuilder}
         */
        type(type){
                this._config.type = type;
                return this;
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {ControlBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

        /**
         * Set property label
         * 
         * @param {String} label
         * @returns {ControlBuilder}
         */
        label(label){
                this._config.label = label;
                return this;
        }

        /**
         * Set property defaultValue
         * 
         * @param {String} defaultValue
         * @returns {ControlBuilder}
         */
        defaultValue(defaultValue){
                this._config.defaultValue = defaultValue;
                return this;
        }

        /**
         * Set property config
         * 
         * @param {String} config
         * @returns {ControlBuilder}
         */
        config(config){
                this._config.config = config;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Control}
         */
        build(){
                return this._config;
        }      
}

exports.ControlBuilder = ControlBuilder;
