class Column {
        constructor () {
                this.name = "";              
                this.label = "";              
                this.format = "";              
                this.type = "";              
                this.defaultShow = "";
                this.radioField=false;
                this.nullable=false;              
 
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
         * Set property format
         * 
         * @param {String} format
         * @returns {ColumnBuilder}
         */
        format(format){
                this._config.format = format;
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
         * Set property defaultShow
         * 
         * @param {String} defaultShow
         * @returns {ColumnBuilder}
         */
        defaultShow(defaultShow){
                this._config.defaultShow = defaultShow;
                return this;
        }

        /**
         * Set property defaultShow
         * 
         * @param {boolean} value
         * @returns {ColumnBuilder}
         */
        nullable(value=true){
                this._config.nullable = value;
                return this;
        }

        /**
         * Set property radioField
         * 
         * @param {boolean} value
         * @returns {ColumnBuilder}
         */
        radioField(value=true){
                this._config.radioField = value;
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
