class Manage {
        constructor () {
                /**
                 * @type {String}
                 */
                this.tableManage;              
                /**
                 * @type {String}
                 */
                this.dictionaryManage;              
                /**
                 * @type {String}
                 */
                this.pageConfigManage;              
                /**
                 * @type {String}
                 */
                this.menuManage;              
                /**
                 * @type {GlobalConfig}
                 */
                this.globalConfig;              
 
        }
}

exports.Manage = Manage;

/**
 * Builder for Manage
 */
class ManageBuilder{
        constructor(){
                this._config =new Manage();
        }

        /**
         * Set property tableManage
         * 
         * @param {String} tableManage
         * @returns {manageBuilder}
         */
        tableManage(tableManage){
                this._config.tableManage = tableManage;
                return this;
        }

        /**
         * Set property dictionaryManage
         * 
         * @param {String} dictionaryManage
         * @returns {manageBuilder}
         */
        dictionaryManage(dictionaryManage){
                this._config.dictionaryManage = dictionaryManage;
                return this;
        }

        /**
         * Set property pageConfigManage
         * 
         * @param {String} pageConfigManage
         * @returns {manageBuilder}
         */
        pageConfigManage(pageConfigManage){
                this._config.pageConfigManage = pageConfigManage;
                return this;
        }

        /**
         * Set property menuManage
         * 
         * @param {String} menuManage
         * @returns {manageBuilder}
         */
        menuManage(menuManage){
                this._config.menuManage = menuManage;
                return this;
        }

        /**
         * Set property globalConfig
         * 
         * @param {GlobalConfig} globalConfig
         * @returns {manageBuilder}
         */
        globalConfig(globalConfig){
                this._config.globalConfig = globalConfig;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Manage}
         */
        build(){
                return this._config;
        }      
}

exports.ManageBuilder = ManageBuilder;
