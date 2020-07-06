const {Column} =require("./Column");

class Table {
        constructor () {
                this.description = "";              
                this.columns = {};              
                this.primaryColumn = "";              
                this.nameColumn = "";              
                this.rawName = "";              
                this.columnArray = [""];              
 
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
         * Set property primaryColumn
         * 
         * @param {String} primaryColumn
         * @returns {TableBuilder}
         */
        primaryColumn(primaryColumn){
                this._config.primaryColumn = primaryColumn;
                return this;
        }

        /**
         * Set property nameColumn
         * 
         * @param {String} nameColumn
         * @returns {TableBuilder}
         */
        nameColumn(nameColumn){
                this._config.nameColumn = nameColumn;
                return this;
        }

        /**
         * Set property rawName
         * 
         * @param {String} rawName
         * @returns {TableBuilder}
         */
        rawName(rawName){
                this._config.rawName = rawName;
                return this;
        }

        /**
         * Set property columnArray
         * 
         * @param {String} columnArray
         * @returns {TableBuilder}
         */
        columnArray(columnArray){
                this._config.columnArray = columnArray;
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
