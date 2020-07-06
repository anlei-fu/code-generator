class Menu {
        constructor () {
                this.isActive = "";              
                this.path = "";              
                this.label = "";              
                this.name = "";              
 
        }
}

exports.Menu = Menu;

/**
 * Builder for Menu
 */
class MenuBuilder{
        constructor(){
                this._config =new Menu();
        }

        /**
         * Set property isActive
         * 
         * @param {String} isActive
         * @returns {MenuBuilder}
         */
        isActive(isActive){
                this._config.isActive = isActive;
                return this;
        }

        /**
         * Set property path
         * 
         * @param {String} path
         * @returns {MenuBuilder}
         */
        path(path){
                this._config.path = path;
                return this;
        }

        /**
         * Set property label
         * 
         * @param {String} label
         * @returns {MenuBuilder}
         */
        label(label){
                this._config.label = label;
                return this;
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {MenuBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Menu}
         */
        build(){
                return this._config;
        }      
}

exports.MenuBuilder = MenuBuilder;
