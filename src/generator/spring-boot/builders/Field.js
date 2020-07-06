class Field {
        constructor () {
                this.name = "";              
                this.type = "";              
                this.description = "";              
                this.validates = [""];              
 
        }
}

exports.Field = Field;

/**
 * Builder for Field
 */
class FieldBuilder{
        constructor(){
                this._config =new Field();
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {FieldBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

        /**
         * Set property type
         * 
         * @param {String} type
         * @returns {FieldBuilder}
         */
        type(type){
                this._config.type = type;
                return this;
        }

        /**
         * Set property description
         * 
         * @param {String} description
         * @returns {FieldBuilder}
         */
        description(description){
                this._config.description = description;
                return this;
        }

        /**
         * Set property validates
         * 
         * @param {String} validates
         * @returns {FieldBuilder}
         */
        validates(validates){
                this._config.validates = validates;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Field}
         */
        build(){
                return this._config;
        }      
}

exports.FieldBuilder = FieldBuilder;
