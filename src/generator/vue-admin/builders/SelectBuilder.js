class Select {
        constructor () {
                this.label = "";              
                this.value = "";              
                this.enum = "";              
                this.title = "";              
                this.model = "";              
 
        }
}

exports.Select = Select;

/**
 * Builder for Select
 */
class SelectBuilder{
        constructor(){
                this._config =new Select();
        }

        /**
         * Set property label
         * 
         * @param {String} label
         * @returns {SelectBuilder}
         */
        label(label){
                this._config.label = label;
                return this;
        }

        /**
         * Set property value
         * 
         * @param {String} value
         * @returns {SelectBuilder}
         */
        value(value){
                this._config.value = value;
                return this;
        }

        /**
         * Set property enum
         * 
         * @param {String} enum
         * @returns {SelectBuilder}
         */
        enum(_enum){
                this._config.enum = _enum;
                return this;
        }

        /**
         * Set property title
         * 
         * @param {String} title
         * @returns {SelectBuilder}
         */
        title(title){
                this._config.title = title;
                return this;
        }

        /**
         * Set property model
         * 
         * @param {String} model
         * @returns {SelectBuilder}
         */
        model(model){
                this._config.model = model;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Select}
         */
        build(){
                return this._config;
        }      
}

exports.SelectBuilder = SelectBuilder;
