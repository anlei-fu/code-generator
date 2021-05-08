class Table {
        constructor () {
                /**
                 * @type {[Column]}
                 */
                this.columns;              
                /**
                 * @type {String}
                 */
                this.name;              
                /**
                 * @type {String}
                 */
                this.lable;              
                /**
                 * @type {String}
                 */
                this.description;              
                /**
                 * @type {String}
                 */
                this.pkField;              
                /**
                 * @type {String}
                 */
                this.nameField;              
                /**
                 * @type {[Relation]}
                 */
                this.relations;              
 
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
         * @param {[Column]} columns
         * @returns {tableBuilder}
         */
        columns(columns){
                this._config.columns = columns;
                return this;
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {tableBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

        /**
         * Set property lable
         * 
         * @param {String} lable
         * @returns {tableBuilder}
         */
        lable(lable){
                this._config.lable = lable;
                return this;
        }

        /**
         * Set property description
         * 
         * @param {String} description
         * @returns {tableBuilder}
         */
        description(description){
                this._config.description = description;
                return this;
        }

        /**
         * Set property pkField
         * 
         * @param {String} pkField
         * @returns {tableBuilder}
         */
        pkField(pkField){
                this._config.pkField = pkField;
                return this;
        }

        /**
         * Set property nameField
         * 
         * @param {String} nameField
         * @returns {tableBuilder}
         */
        nameField(nameField){
                this._config.nameField = nameField;
                return this;
        }

        /**
         * Set property relations
         * 
         * @param {[Relation]} relations
         * @returns {tableBuilder}
         */
        relations(relations){
                this._config.relations = relations;
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
