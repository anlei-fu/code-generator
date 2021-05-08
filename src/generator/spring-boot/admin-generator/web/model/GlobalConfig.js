class GlobalConfig {
        constructor () {
                this.add = "";              
                this.edit = "";              
                this.sequencePattern = "";              
                this.defaultSelectAll = "";              
                this.addText = "";              
                this.deleteMsg = "";              
                this.editText = "";              
                this.deleteText = "";              
                this.customerTheme = "";              
                this.loginTheme = "";              
                this.optionMaxCount = "";              
 
        }
}

exports.GlobalConfig = GlobalConfig;

/**
 * Builder for GlobalConfig
 */
class GlobalConfigBuilder{
        constructor(){
                this._config =new GlobalConfig();
        }

        /**
         * Set property add
         * 
         * @param {@type} add
         * @returns {GlobalConfigBuilder}
         */
        add(add){
                this._config.add = add;
                return this;
        }

        /**
         * Set property edit
         * 
         * @param {@type} edit
         * @returns {GlobalConfigBuilder}
         */
        edit(edit){
                this._config.edit = edit;
                return this;
        }

        /**
         * Set property sequencePattern
         * 
         * @param {@type} sequencePattern
         * @returns {GlobalConfigBuilder}
         */
        sequencePattern(sequencePattern){
                this._config.sequencePattern = sequencePattern;
                return this;
        }

        /**
         * Set property defaultSelectAll
         * 
         * @param {@type} defaultSelectAll
         * @returns {GlobalConfigBuilder}
         */
        defaultSelectAll(defaultSelectAll){
                this._config.defaultSelectAll = defaultSelectAll;
                return this;
        }

        /**
         * Set property addText
         * 
         * @param {@type} addText
         * @returns {GlobalConfigBuilder}
         */
        addText(addText){
                this._config.addText = addText;
                return this;
        }

        /**
         * Set property deleteMsg
         * 
         * @param {@type} deleteMsg
         * @returns {GlobalConfigBuilder}
         */
        deleteMsg(deleteMsg){
                this._config.deleteMsg = deleteMsg;
                return this;
        }

        /**
         * Set property editText
         * 
         * @param {@type} editText
         * @returns {GlobalConfigBuilder}
         */
        editText(editText){
                this._config.editText = editText;
                return this;
        }

        /**
         * Set property deleteText
         * 
         * @param {@type} deleteText
         * @returns {GlobalConfigBuilder}
         */
        deleteText(deleteText){
                this._config.deleteText = deleteText;
                return this;
        }

        /**
         * Set property customerTheme
         * 
         * @param {@type} customerTheme
         * @returns {GlobalConfigBuilder}
         */
        customerTheme(customerTheme){
                this._config.customerTheme = customerTheme;
                return this;
        }

        /**
         * Set property loginTheme
         * 
         * @param {@type} loginTheme
         * @returns {GlobalConfigBuilder}
         */
        loginTheme(loginTheme){
                this._config.loginTheme = loginTheme;
                return this;
        }

        /**
         * Set property optionMaxCount
         * 
         * @param {@type} optionMaxCount
         * @returns {GlobalConfigBuilder}
         */
        optionMaxCount(optionMaxCount){
                this._config.optionMaxCount = optionMaxCount;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {GlobalConfig}
         */
        build(){
                return this._config;
        }      
}

exports.GlobalConfigBuilder = GlobalConfigBuilder;
