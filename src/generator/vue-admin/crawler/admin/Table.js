
const {STR} =require("./libs/str");
class Table {
        constructor () {
                this.allColumns = [];              
                this.defaultShowingColumns =[];              
                this.showingColumns = [];              
 
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
         * Set property columns
         * 
         * @param {[String]} columns
         * @returns {TableBuilder}
         */
        columns(columns){
                columns.forEach(c=>{
                      this._config.allColumns.push({
                             title:STR.upperFirstLetter(c),
                             slot:c,
                             key:c
                      });
                });
                return this;
        }

        attr(name,value,columns){
                columns.forEach(c=>{
                        let column =this._findColumn(c);
                        if(!column){
                                throw new Error(`${c} is not exists`);
                        }
                        column[name]=value;
                    });
       
                    return this;
        }

        _findColumn(columnName){
             let columns =this._config.allColumns.filter(x=>x.slot==columnName);
             return columns.length==0?null:columns[0];
        }

        /**
         * Set property defaultShowingColumns
         * 
         * @param {[String]} defaultShowingColumns
         * @returns {TableBuilder}
         */
        defaultShowingColumns(defaultShowingColumns){
                defaultShowingColumns.forEach(c=>{
                        this._config.defaultShowingColumns.push({
                                title:STR.upperFirstLetter(c),
                               slot:c,
                               key:c
                        });
                  });
                  return this;
        }

        /**
         * Set property showingColumns
         * 
         * @param {[String]} showingColumns
         * @returns {TableBuilder}
         */
        showingColumns(showingColumns){
                this._config.showingColumns = showingColumns;
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
