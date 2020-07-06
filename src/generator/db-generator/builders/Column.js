class Column {
        constructor () {
                this.name = "";              
                this.type = "";              
                this.nullable = "";              
                this.pk = "";              
                this.defaultValue = "";              
                this.autoIncrement = "";              
                this.description = "";              
 
        }
}

exports.Column = Column;

/**
 * Builder for Column
 */
class ColumnBuilder{
        constructor(){
                this._config =new Column();
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {ColumnBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

        /**
         * Set property type
         * 
         * @param {String} type
         * @returns {ColumnBuilder}
         */
        type(type){
                this._config.type = type;
                return this;
        }

        /**
         * Set property nullable
         * 
         * @param {String} nullable
         * @returns {ColumnBuilder}
         */
        nullable(nullable){
                this._config.nullable = nullable;
                return this;
        }

        /**
         * Set property pk
         * 
         * @param {String} pk
         * @returns {ColumnBuilder}
         */
        pk(pk){
                this._config.pk = pk;
                return this;
        }

        /**
         * Set property defaultValue
         * 
         * @param {String} defaultValue
         * @returns {ColumnBuilder}
         */
        defaultValue(defaultValue){
                this._config.defaultValue = defaultValue;
                return this;
        }

        /**
         * Set property autoIncrement
         * 
         * @param {String} autoIncrement
         * @returns {ColumnBuilder}
         */
        autoIncrement(autoIncrement){
                this._config.autoIncrement = autoIncrement;
                return this;
        }

        /**
         * Set property description
         * 
         * @param {String} description
         * @returns {ColumnBuilder}
         */
        description(description){
                this._config.description = description;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Column}
         */
        build(){
                return this._config;
        }      
}

exports.ColumnBuilder = ColumnBuilder;
