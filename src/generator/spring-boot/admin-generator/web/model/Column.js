class Column {
        constructor () {
                /**
                 * @type {String}
                 */
                this.name;              
                /**
                 * @type {String}
                 */
                this.label;              
                /**
                 * @type {String}
                 */
                this.description;              
                /**
                 * @type {String}
                 */
                this.javaType;              
                /**
                 * @type {String}
                 */
                this.nullable;              
                /**
                 * @type {Number}
                 */
                this.defaultValue;              
                /**
                 * @type {String}
                 */
                this.isPk;              
 
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
         * Set property label
         * 
         * @param {String} label
         * @returns {ColumnBuilder}
         */
        label(label){
                this._config.label = label;
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
         * Set property javaType
         * 
         * @param {String} javaType
         * @returns {ColumnBuilder}
         */
        javaType(javaType){
                this._config.javaType = javaType;
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
         * Set property defaultValue
         * 
         * @param {Number} defaultValue
         * @returns {ColumnBuilder}
         */
        defaultValue(defaultValue){
                this._config.defaultValue = defaultValue;
                return this;
        }

        /**
         * Set property isPk
         * 
         * @param {String} isPk
         * @returns {ColumnBuilder}
         */
        isPk(isPk){
                this._config.isPk = isPk;
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
