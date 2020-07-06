class Field {
        constructor () {
                this.name = "";              
                this.accesity = "";              
                this.description = "";              
                this.annotations = "";              
                this.final = "";              
                this.static = "";              
                this.type = "";              
                this.defaultValue = "";              
 
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
         * Set property accesity
         * 
         * @param {String} accesity
         * @returns {FieldBuilder}
         */
        accesity(accesity){
                this._config.accesity = accesity;
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
         * Set property annotations
         * 
         * @param {String} annotations
         * @returns {FieldBuilder}
         */
        annotations(annotations){
                this._config.annotations = annotations;
                return this;
        }

        /**
         * Set property final
         * 
         * @param {String} final
         * @returns {FieldBuilder}
         */
        final(final){
                this._config.final = final;
                return this;
        }

        /**
         * Set property static
         * 
         * @param {String} static
         * @returns {FieldBuilder}
         */
        static(static){
                this._config.static = static;
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
         * Set property defaultValue
         * 
         * @param {String} defaultValue
         * @returns {FieldBuilder}
         */
        defaultValue(defaultValue){
                this._config.defaultValue = defaultValue;
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
