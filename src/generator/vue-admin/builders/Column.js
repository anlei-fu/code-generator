class Column {
        constructor () {
                this.name = "";              
                this.label = "";              
                this.title = "";              
                this.format = "";              
                this.type = "";              
                this.color = "";              
                this.render = "";              
                this.defaultShow = "";              
 
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
         * Set property title
         * 
         * @param {String} title
         * @returns {ColumnBuilder}
         */
        title(title){
                this._config.title = title;
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
         * Set property color
         * 
         * @param {String} color
         * @returns {ColumnBuilder}
         */
        color(color){
                this._config.color = color;
                return this;
        }

        /**
         * Set property render
         * 
         * @param {String} render
         * @returns {ColumnBuilder}
         */
        render(render){
                this._config.render = render;
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
         * Build 
         * 
         * @returns {Column}
         */
        build(){
                return this._config;
        }      
}

exports.ColumnBuilder = ColumnBuilder;
