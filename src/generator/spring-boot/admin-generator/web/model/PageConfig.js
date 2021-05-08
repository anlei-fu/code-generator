class PageConfig {
        constructor () {
                /**
                 * @type {[QueryField]}
                 */
                this.queryFields;              
                /**
                 * @type {[Column]}
                 */
                this.columns;              
                /**
                 * @type {String}
                 */
                this.pkField;              
                /**
                 * @type {String}
                 */
                this.mutitleEdit;              
                /**
                 * @type {String}
                 */
                this.mutipleDelete;              
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
                this.canDelete;              
                /**
                 * @type {String}
                 */
                this.apiPrefix;              
                /**
                 * @type {String}
                 */
                this.pageResult;              
                /**
                 * @type {Number}
                 */
                this.pageSize;              
                /**
                 * @type {String}
                 */
                this.table;              
                /**
                 * @type {[TableAlia]}
                 */
                this.tableAlias;              
                /**
                 * @type {String}
                 */
                this.menuName;              
                /**
                 * @type {String}
                 */
                this.routePath;              
                /**
                 * @type {[DeleteCheck]}
                 */
                this.deleteChecks;              
                /**
                 * @type {String}
                 */
                this.parentMenu;              
                /**
                 * @type {String}
                 */
                this.icon;              
                /**
                 * @type {[JoinConfig]}
                 */
                this.joinConfigs;              
                /**
                 * @type {String}
                 */
                this.nameField;              
                /**
                 * @type {String}
                 */
                this.exportCsv;              
                /**
                 * @type {String}
                 */
                this.importCsv;              
                /**
                 * @type {[OrderBy]}
                 */
                this.orderBys;              
 
        }
}

exports.PageConfig = PageConfig;

/**
 * Builder for PageConfig
 */
class PageConfigBuilder{
        constructor(){
                this._config =new PageConfig();
        }

        /**
         * Set property queryFields
         * 
         * @param {[QueryField]} queryFields
         * @returns {PageConfigBuilder}
         */
        queryFields(queryFields){
                this._config.queryFields = queryFields;
                return this;
        }

        /**
         * Set property columns
         * 
         * @param {[Column]} columns
         * @returns {PageConfigBuilder}
         */
        columns(columns){
                this._config.columns = columns;
                return this;
        }

        /**
         * Set property pkField
         * 
         * @param {String} pkField
         * @returns {PageConfigBuilder}
         */
        pkField(pkField){
                this._config.pkField = pkField;
                return this;
        }

        /**
         * Set property mutitleEdit
         * 
         * @param {String} mutitleEdit
         * @returns {PageConfigBuilder}
         */
        mutitleEdit(mutitleEdit){
                this._config.mutitleEdit = mutitleEdit;
                return this;
        }

        /**
         * Set property mutipleDelete
         * 
         * @param {String} mutipleDelete
         * @returns {PageConfigBuilder}
         */
        mutipleDelete(mutipleDelete){
                this._config.mutipleDelete = mutipleDelete;
                return this;
        }

        /**
         * Set property canEdit
         * 
         * @param {String} canEdit
         * @returns {PageConfigBuilder}
         */
        canEdit(canEdit){
                this._config.canEdit = canEdit;
                return this;
        }

        /**
         * Set property canAdd
         * 
         * @param {String} canAdd
         * @returns {PageConfigBuilder}
         */
        canAdd(canAdd){
                this._config.canAdd = canAdd;
                return this;
        }

        /**
         * Set property canDelete
         * 
         * @param {String} canDelete
         * @returns {PageConfigBuilder}
         */
        canDelete(canDelete){
                this._config.canDelete = canDelete;
                return this;
        }

        /**
         * Set property apiPrefix
         * 
         * @param {String} apiPrefix
         * @returns {PageConfigBuilder}
         */
        apiPrefix(apiPrefix){
                this._config.apiPrefix = apiPrefix;
                return this;
        }

        /**
         * Set property pageResult
         * 
         * @param {String} pageResult
         * @returns {PageConfigBuilder}
         */
        pageResult(pageResult){
                this._config.pageResult = pageResult;
                return this;
        }

        /**
         * Set property pageSize
         * 
         * @param {Number} pageSize
         * @returns {PageConfigBuilder}
         */
        pageSize(pageSize){
                this._config.pageSize = pageSize;
                return this;
        }

        /**
         * Set property table
         * 
         * @param {String} table
         * @returns {PageConfigBuilder}
         */
        table(table){
                this._config.table = table;
                return this;
        }

        /**
         * Set property tableAlias
         * 
         * @param {[TableAlia]} tableAlias
         * @returns {PageConfigBuilder}
         */
        tableAlias(tableAlias){
                this._config.tableAlias = tableAlias;
                return this;
        }

        /**
         * Set property menuName
         * 
         * @param {String} menuName
         * @returns {PageConfigBuilder}
         */
        menuName(menuName){
                this._config.menuName = menuName;
                return this;
        }

        /**
         * Set property routePath
         * 
         * @param {String} routePath
         * @returns {PageConfigBuilder}
         */
        routePath(routePath){
                this._config.routePath = routePath;
                return this;
        }

        /**
         * Set property deleteChecks
         * 
         * @param {[DeleteCheck]} deleteChecks
         * @returns {PageConfigBuilder}
         */
        deleteChecks(deleteChecks){
                this._config.deleteChecks = deleteChecks;
                return this;
        }

        /**
         * Set property parentMenu
         * 
         * @param {String} parentMenu
         * @returns {PageConfigBuilder}
         */
        parentMenu(parentMenu){
                this._config.parentMenu = parentMenu;
                return this;
        }

        /**
         * Set property icon
         * 
         * @param {String} icon
         * @returns {PageConfigBuilder}
         */
        icon(icon){
                this._config.icon = icon;
                return this;
        }

        /**
         * Set property joinConfigs
         * 
         * @param {[JoinConfig]} joinConfigs
         * @returns {PageConfigBuilder}
         */
        joinConfigs(joinConfigs){
                this._config.joinConfigs = joinConfigs;
                return this;
        }

        /**
         * Set property nameField
         * 
         * @param {String} nameField
         * @returns {PageConfigBuilder}
         */
        nameField(nameField){
                this._config.nameField = nameField;
                return this;
        }

        /**
         * Set property exportCsv
         * 
         * @param {String} exportCsv
         * @returns {PageConfigBuilder}
         */
        exportCsv(exportCsv){
                this._config.exportCsv = exportCsv;
                return this;
        }

        /**
         * Set property importCsv
         * 
         * @param {String} importCsv
         * @returns {PageConfigBuilder}
         */
        importCsv(importCsv){
                this._config.importCsv = importCsv;
                return this;
        }

        /**
         * Set property orderBys
         * 
         * @param {[OrderBy]} orderBys
         * @returns {PageConfigBuilder}
         */
        orderBys(orderBys){
                this._config.orderBys = orderBys;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {PageConfig}
         */
        build(){
                return this._config;
        }      
}

exports.PageConfigBuilder = PageConfigBuilder;
