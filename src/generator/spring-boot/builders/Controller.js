class Controller {
        constructor () {
                this.path = "";              
                this.description = "";              
 
        }
}

exports.Controller = Controller;

/**
 * Builder for Controller
 */
class ControllerBuilder{
        constructor(){
                this._config =new Controller();
        }

        /**
         * Set property path
         * 
         * @param {String} path
         * @returns {ControllerBuilder}
         */
        path(path){
                this._config.path = path;
                return this;
        }

        /**
         * Set property description
         * 
         * @param {String} description
         * @returns {ControllerBuilder}
         */
        description(description){
                this._config.description = description;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Controller}
         */
        build(){
                return this._config;
        }      
}

exports.ControllerBuilder = ControllerBuilder;
