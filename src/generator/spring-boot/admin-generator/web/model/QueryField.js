class QueryField {
        constructor () {
                /**
                 * @type {String}
                 */
                this.field;              
                /**
                 * @type {Number}
                 */
                this.defaultValue;              
                /**
                 * @type {String}
                 */
                this.type;              
                /**
                 * @type {String}
                 */
                this.changeBy;              
                /**
                 * @type {String}
                 */
                this.canEmpty;              
                /**
                 * @type {String}
                 */
                this.require;              
                /**
                 * @type {String}
                 */
                this.defaultShow;              
                /**
                 * @type {String}
                 */
                this.table;              
                /**
                 * @type {[Alia]}
                 */
                this.alias;              
 
        }
}

exports.QueryField = QueryField;

/**
 * Builder for QueryField
 */
class QueryFieldBuilder{
        constructor(){
                this._config =new QueryField();
        }

        /**
         * Set property field
         * 
         * @param {String} field
         * @returns {QueryFieldBuilder}
         */
        field(field){
                this._config.field = field;
                return this;
        }

        /**
         * Set property defaultValue
         * 
         * @param {Number} defaultValue
         * @returns {QueryFieldBuilder}
         */
        defaultValue(defaultValue){
                this._config.defaultValue = defaultValue;
                return this;
        }

        /**
         * Set property type
         * 
         * @param {String} type
         * @returns {QueryFieldBuilder}
         */
        type(type){
                this._config.type = type;
                return this;
        }

        /**
         * Set property changeBy
         * 
         * @param {String} changeBy
         * @returns {QueryFieldBuilder}
         */
        changeBy(changeBy){
                this._config.changeBy = changeBy;
                return this;
        }

        /**
         * Set property canEmpty
         * 
         * @param {String} canEmpty
         * @returns {QueryFieldBuilder}
         */
        canEmpty(canEmpty){
                this._config.canEmpty = canEmpty;
                return this;
        }

        /**
         * Set property require
         * 
         * @param {String} require
         * @returns {QueryFieldBuilder}
         */
        require(require){
                this._config.require = require;
                return this;
        }

        /**
         * Set property defaultShow
         * 
         * @param {String} defaultShow
         * @returns {QueryFieldBuilder}
         */
        defaultShow(defaultShow){
                this._config.defaultShow = defaultShow;
                return this;
        }

        /**
         * Set property table
         * 
         * @param {String} table
         * @returns {QueryFieldBuilder}
         */
        table(table){
                this._config.table = table;
                return this;
        }

        /**
         * Set property alias
         * 
         * @param {[Alia]} alias
         * @returns {QueryFieldBuilder}
         */
        alias(alias){
                this._config.alias = alias;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {QueryField}
         */
        build(){
                return this._config;
        }      
}

exports.QueryFieldBuilder = QueryFieldBuilder;
