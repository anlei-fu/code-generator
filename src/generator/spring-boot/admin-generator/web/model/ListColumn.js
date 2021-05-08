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
                this.queryField;              
                /**
                 * @type {String}
                 */
                this.selectField;              
                /**
                 * @type {String}
                 */
                this.mutipleSelect;              
                /**
                 * @type {String}
                 */
                this.timeRangeField;              
                /**
                 * @type {String}
                 */
                this.radioField;              
                /**
                 * @type {String}
                 */
                this.canEdit;              
                /**
                 * @type {String}
                 */
                this.canAdd;              
                /**
                 * @type {String}
                 */
                this.isPkField;              
                /**
                 * @type {RadioConfig}
                 */
                this.radioConfig;              
                /**
                 * @type {SelectConfig}
                 */
                this.selectConfig;              
                /**
                 * @type {TimeRangeConfig}
                 */
                this.timeRangeConfig;              
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
                this.nullValuePlaceHolder;              
                /**
                 * @type {Number}
                 */
                this.addDefaultValue;              
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
                this.otherTable;              
                /**
                 * @type {String}
                 */
                this.otherTableField;              
                /**
                 * @type {String}
                 */
                this.changeByField;              
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
                /**
                 * @type {String}
                 */
                this.exportField;              
                /**
                 * @type {String}
                 */
                this.importField;              
 
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
         * Set property queryField
         * 
         * @param {String} queryField
         * @returns {ListColumnBuilder}
         */
        queryField(queryField){
                this._config.queryField = queryField;
                return this;
        }

        /**
         * Set property selectField
         * 
         * @param {String} selectField
         * @returns {ListColumnBuilder}
         */
        selectField(selectField){
                this._config.selectField = selectField;
                return this;
        }

        /**
         * Set property mutipleSelect
         * 
         * @param {String} mutipleSelect
         * @returns {ListColumnBuilder}
         */
        mutipleSelect(mutipleSelect){
                this._config.mutipleSelect = mutipleSelect;
                return this;
        }

        /**
         * Set property timeRangeField
         * 
         * @param {String} timeRangeField
         * @returns {ListColumnBuilder}
         */
        timeRangeField(timeRangeField){
                this._config.timeRangeField = timeRangeField;
                return this;
        }

        /**
         * Set property radioField
         * 
         * @param {String} radioField
         * @returns {ListColumnBuilder}
         */
        radioField(radioField){
                this._config.radioField = radioField;
                return this;
        }

        /**
         * Set property canEdit
         * 
         * @param {String} canEdit
         * @returns {ListColumnBuilder}
         */
        canEdit(canEdit){
                this._config.canEdit = canEdit;
                return this;
        }

        /**
         * Set property canAdd
         * 
         * @param {String} canAdd
         * @returns {ListColumnBuilder}
         */
        canAdd(canAdd){
                this._config.canAdd = canAdd;
                return this;
        }

        /**
         * Set property isPkField
         * 
         * @param {String} isPkField
         * @returns {ListColumnBuilder}
         */
        isPkField(isPkField){
                this._config.isPkField = isPkField;
                return this;
        }

        /**
         * Set property radioConfig
         * 
         * @param {RadioConfig} radioConfig
         * @returns {ListColumnBuilder}
         */
        radioConfig(radioConfig){
                this._config.radioConfig = radioConfig;
                return this;
        }

        /**
         * Set property selectConfig
         * 
         * @param {SelectConfig} selectConfig
         * @returns {ListColumnBuilder}
         */
        selectConfig(selectConfig){
                this._config.selectConfig = selectConfig;
                return this;
        }

        /**
         * Set property timeRangeConfig
         * 
         * @param {TimeRangeConfig} timeRangeConfig
         * @returns {ListColumnBuilder}
         */
        timeRangeConfig(timeRangeConfig){
                this._config.timeRangeConfig = timeRangeConfig;
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
         * Set property addDefaultValue
         * 
         * @param {Number} addDefaultValue
         * @returns {ListColumnBuilder}
         */
        addDefaultValue(addDefaultValue){
                this._config.addDefaultValue = addDefaultValue;
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
         * Set property changeByField
         * 
         * @param {String} changeByField
         * @returns {ListColumnBuilder}
         */
        changeByField(changeByField){
                this._config.changeByField = changeByField;
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
         * Set property exportField
         * 
         * @param {String} exportField
         * @returns {ListColumnBuilder}
         */
        exportField(exportField){
                this._config.exportField = exportField;
                return this;
        }

        /**
         * Set property importField
         * 
         * @param {String} importField
         * @returns {ListColumnBuilder}
         */
        importField(importField){
                this._config.importField = importField;
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
