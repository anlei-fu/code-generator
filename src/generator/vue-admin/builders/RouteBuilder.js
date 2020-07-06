class Route {
        constructor () {
                this.children = "";              
                this.child = "";              
                this.companent = "";              
                this.path = "";              
                this.name = "";              
 
        }
}

exports.Route = Route;

/**
 * Builder for Route
 */
class RouteBuilder{
        constructor(){
                this._config =new Route();
        }

        /**
         * Set property children
         * 
         * @param {String} children
         * @returns {RouteBuilder}
         */
        children(children){
                this._config.children = children;
                return this;
        }

        /**
         * Set property child
         * 
         * @param {String} child
         * @returns {RouteBuilder}
         */
        child(child){
                this._config.child = child;
                return this;
        }

        /**
         * Set property companent
         * 
         * @param {String} companent
         * @returns {RouteBuilder}
         */
        companent(companent){
                this._config.companent = companent;
                return this;
        }

        /**
         * Set property path
         * 
         * @param {String} path
         * @returns {RouteBuilder}
         */
        path(path){
                this._config.path = path;
                return this;
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {RouteBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Route}
         */
        build(){
                return this._config;
        }      
}

exports.RouteBuilder = RouteBuilder;
