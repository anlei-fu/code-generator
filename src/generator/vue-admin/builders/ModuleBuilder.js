class Module {
        constructor () {
                this.menus = "";              
                this.activeMenu = "";              
                this.enable = "";              
                this.icon = "";              
 
        }
}

exports.Module = Module;

/**
 * Builder for Module
 */
class ModuleBuilder{
        constructor(){
                this._config =new Module();
        }

        /**
         * Set property menus
         * 
         * @param {String} menus
         * @returns {ModuleBuilder}
         */
        menus(menus){
                this._config.menus = menus;
                return this;
        }

        /**
         * Set property activeMenu
         * 
         * @param {String} activeMenu
         * @returns {ModuleBuilder}
         */
        activeMenu(activeMenu){
                this._config.activeMenu = activeMenu;
                return this;
        }

        /**
         * Set property enable
         * 
         * @param {String} enable
         * @returns {ModuleBuilder}
         */
        enable(enable){
                this._config.enable = enable;
                return this;
        }

        /**
         * Set property icon
         * 
         * @param {String} icon
         * @returns {ModuleBuilder}
         */
        icon(icon){
                this._config.icon = icon;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Module}
         */
        build(){
                return this._config;
        }      
}

exports.ModuleBuilder = ModuleBuilder;
