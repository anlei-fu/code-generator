class Method {
        constructor () {
                this.name = "";              
                this.accesity = "";              
                this.returnType = "";              
                this.args = "";              
                this.annotations = "";              
                this.final = "";              
                this.static = "";              
                this.description = "";              
                this.constructor = "";              
 
        }
}

exports.Method = Method;

/**
 * Builder for Method
 */
class MethodBuilder{
        constructor(){
                this._config =new Method();
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {MethodBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

        /**
         * Set property accesity
         * 
         * @param {String} accesity
         * @returns {MethodBuilder}
         */
        accesity(accesity){
                this._config.accesity = accesity;
                return this;
        }

        /**
         * Set property returnType
         * 
         * @param {String} returnType
         * @returns {MethodBuilder}
         */
        returnType(returnType){
                this._config.returnType = returnType;
                return this;
        }

        /**
         * Set property args
         * 
         * @param {String} args
         * @returns {MethodBuilder}
         */
        args(args){
                this._config.args = args;
                return this;
        }

        /**
         * Set property annotations
         * 
         * @param {String} annotations
         * @returns {MethodBuilder}
         */
        annotations(annotations){
                this._config.annotations = annotations;
                return this;
        }

        /**
         * Set property final
         * 
         * @param {String} final
         * @returns {MethodBuilder}
         */
        final(final){
                this._config.final = final;
                return this;
        }

        /**
         * Set property static
         * 
         * @param {String} static
         * @returns {MethodBuilder}
         */
        static(static){
                this._config.static = static;
                return this;
        }

        /**
         * Set property description
         * 
         * @param {String} description
         * @returns {MethodBuilder}
         */
        description(description){
                this._config.description = description;
                return this;
        }

        /**
         * Set property constructor
         * 
         * @param {String} constructor
         * @returns {MethodBuilder}
         */
        constructor(constructor){
                this._config.constructor = constructor;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Method}
         */
        build(){
                return this._config;
        }      
}

exports.MethodBuilder = MethodBuilder;
