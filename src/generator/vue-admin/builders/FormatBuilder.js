class Format {
        constructor () {
                this.type = "";              
                this.pattern = "";              
 
        }
}

exports.Format = Format;

/**
 * Builder for Format
 */
class FormatBuilder{
        constructor(){
                this._config =new Format();
        }

        /**
         * Set property type
         * 
         * @param {} type
         * @returns {FormatBuilder}
         */
        type(type){
                this._config.type = type;
                return this;
        }

        /**
         * Set property pattern
         * 
         * @param {} pattern
         * @returns {FormatBuilder}
         */
        pattern(pattern){
                this._config.pattern = pattern;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Format}
         */
        build(){
                return this._config;
        }      
}

exports.FormatBuilder = FormatBuilder;


class ColumnItem {
        constructor () {
                this.name = "";              
                this.format = "";              
                this.label = "";              
                this.format = "";              
                this.color = "";              
 
        }
}

exports.ColumnItem = ColumnItem;

/**
 * Builder for ColumnItem
 */
class ColumnItemBuilder{
        constructor(){
                this._config =new ColumnItem();
        }

        /**
         * Set property name
         * 
         * @param {} name
         * @returns {ColumnItemBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

        /**
         * Set property format
         * 
         * @param {} format
         * @returns {ColumnItemBuilder}
         */
        format(format){
                this._config.format = format;
                return this;
        }

        /**
         * Set property label
         * 
         * @param {} label
         * @returns {ColumnItemBuilder}
         */
        label(label){
                this._config.label = label;
                return this;
        }

        /**
         * Set property format
         * 
         * @param {} format
         * @returns {ColumnItemBuilder}
         */
        format(format){
                this._config.format = format;
                return this;
        }

        /**
         * Set property color
         * 
         * @param {} color
         * @returns {ColumnItemBuilder}
         */
        color(color){
                this._config.color = color;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {ColumnItem}
         */
        build(){
                return this._config;
        }      
}

exports.ColumnItemBuilder = ColumnItemBuilder;
