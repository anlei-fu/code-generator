class ListColumn {
        constructor () {
                /**
                 * @type {String}
                 */
                this.field;              
                /**
                 * @type {String}
                 */
                this.lable;              
                /**
                 * @type {String}
                 */
                this.format;              
                /**
                 * @type {String}
                 */
                this.defaultShow;              
                /**
                 * @type {String}
                 */
                this.show;              
                /**
                 * @type {String}
                 */
                this.canExport;              
                /**
                 * @type {String}
                 */
                this.canImport;              
                /**
                 * @type {String}
                 */
                this.nullValuePlaceHolder;              
                /**
                 * @type {Number}
                 */
                this.maxWidth;              
                /**
                 * @type {Number}
                 */
                this.minWidth;              
                /**
                 * @type {String}
                 */
                this.sotable;              
                /**
                 * @type {String}
                 */
                this.fixed;              
                /**
                 * @type {String}
                 */
                this.fixedPosition;              
                /**
                 * @type {String}
                 */
                this.otherTable;              
                /**
                 * @type {String}
                 */
                this.otherTableField;              
                /**
                 * @type {String}
                 */
                this.table;              
                /**
                 * @type {[Alia]}
                 */
                this.alias;              
                /**
                 * @type {String}
                 */
                this.javaType;              
 
        }
}

exports.ListColumn = ListColumn;

/**
 * Builder for ListColumn
 */
class ListColumnBuilder{
        constructor(){
                this._config =new ListColumn();
        }

        /**
         * Set property field
         * 
         * @param {String} field
         * @returns {ListColumnBuilder}
         */
        field(field){
                this._config.field = field;
                return this;
        }

        /**
         * Set property lable
         * 
         * @param {String} lable
         * @returns {ListColumnBuilder}
         */
        lable(lable){
                this._config.lable = lable;
                return this;
        }

        /**
         * Set property format
         * 
         * @param {String} format
         * @returns {ListColumnBuilder}
         */
        format(format){
                this._config.format = format;
                return this;
        }

        /**
         * Set property defaultShow
         * 
         * @param {String} defaultShow
         * @returns {ListColumnBuilder}
         */
        defaultShow(defaultShow){
                this._config.defaultShow = defaultShow;
                return this;
        }

        /**
         * Set property show
         * 
         * @param {String} show
         * @returns {ListColumnBuilder}
         */
        show(show){
                this._config.show = show;
                return this;
        }

        /**
         * Set property canExport
         * 
         * @param {String} canExport
         * @returns {ListColumnBuilder}
         */
        canExport(canExport){
                this._config.canExport = canExport;
                return this;
        }

        /**
         * Set property canImport
         * 
         * @param {String} canImport
         * @returns {ListColumnBuilder}
         */
        canImport(canImport){
                this._config.canImport = canImport;
                return this;
        }

        /**
         * Set property nullValuePlaceHolder
         * 
         * @param {String} nullValuePlaceHolder
         * @returns {ListColumnBuilder}
         */
        nullValuePlaceHolder(nullValuePlaceHolder){
                this._config.nullValuePlaceHolder = nullValuePlaceHolder;
                return this;
        }

        /**
         * Set property maxWidth
         * 
         * @param {Number} maxWidth
         * @returns {ListColumnBuilder}
         */
        maxWidth(maxWidth){
                this._config.maxWidth = maxWidth;
                return this;
        }

        /**
         * Set property minWidth
         * 
         * @param {Number} minWidth
         * @returns {ListColumnBuilder}
         */
        minWidth(minWidth){
                this._config.minWidth = minWidth;
                return this;
        }

        /**
         * Set property sotable
         * 
         * @param {String} sotable
         * @returns {ListColumnBuilder}
         */
        sotable(sotable){
                this._config.sotable = sotable;
                return this;
        }

        /**
         * Set property fixed
         * 
         * @param {String} fixed
         * @returns {ListColumnBuilder}
         */
        fixed(fixed){
                this._config.fixed = fixed;
                return this;
        }

        /**
         * Set property fixedPosition
         * 
         * @param {String} fixedPosition
         * @returns {ListColumnBuilder}
         */
        fixedPosition(fixedPosition){
                this._config.fixedPosition = fixedPosition;
                return this;
        }

        /**
         * Set property otherTable
         * 
         * @param {String} otherTable
         * @returns {ListColumnBuilder}
         */
        otherTable(otherTable){
                this._config.otherTable = otherTable;
                return this;
        }

        /**
         * Set property otherTableField
         * 
         * @param {String} otherTableField
         * @returns {ListColumnBuilder}
         */
        otherTableField(otherTableField){
                this._config.otherTableField = otherTableField;
                return this;
        }

        /**
         * Set property table
         * 
         * @param {String} table
         * @returns {ListColumnBuilder}
         */
        table(table){
                this._config.table = table;
                return this;
        }

        /**
         * Set property alias
         * 
         * @param {[Alia]} alias
         * @returns {ListColumnBuilder}
         */
        alias(alias){
                this._config.alias = alias;
                return this;
        }

        /**
         * Set property javaType
         * 
         * @param {String} javaType
         * @returns {ListColumnBuilder}
         */
        javaType(javaType){
                this._config.javaType = javaType;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {ListColumn}
         */
        build(){
                return this._config;
        }      
}

exports.ListColumnBuilder = ListColumnBuilder;
