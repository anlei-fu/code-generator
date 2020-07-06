class Table {
        constructor () {
                this.name = "";              
                this.description = "";              
                this.columns = "";              
 
        }
}

exports.Table = Table;

/**
 * Builder for Table
 */
class TableBuilder{
        constructor(){
                this._config =new Table();
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {TableBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

        /**
         * Set property description
         * 
         * @param {String} description
         * @returns {TableBuilder}
         */
        description(description){
                this._config.description = description;
                return this;
        }

        /**
         * Set property columns
         * 
         * @param {String} columns
         * @returns {TableBuilder}
         */
        columns(columns){
                this._config.columns = columns;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Table}
         */
        build(){
                return this._config;
        }      
}

exports.TableBuilder = TableBuilder;
