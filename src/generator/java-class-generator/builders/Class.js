class Class {
        constructor () {
                this.name = "";              
                this.accesity = "";              
                this.description = "";              
                this.annotations = "";              
                this.final = "";              
                this.static = "";              
                this.methods = "";              
                this.defaultContructor = "";              
 
        }
}

exports.Class = Class;

/**
 * Builder for Class
 */
class ClassBuilder{
        constructor(){
                this._config =new Class();
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {ClassBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

        /**
         * Set property accesity
         * 
         * @param {String} accesity
         * @returns {ClassBuilder}
         */
        accesity(accesity){
                this._config.accesity = accesity;
                return this;
        }

        /**
         * Set property description
         * 
         * @param {String} description
         * @returns {ClassBuilder}
         */
        description(description){
                this._config.description = description;
                return this;
        }

        /**
         * Set property annotations
         * 
         * @param {String} annotations
         * @returns {ClassBuilder}
         */
        annotations(annotations){
                this._config.annotations = annotations;
                return this;
        }

        /**
         * Set property final
         * 
         * @param {String} final
         * @returns {ClassBuilder}
         */
        final(final){
                this._config.final = final;
                return this;
        }

        /**
         * Set property static
         * 
         * @param {String} static
         * @returns {ClassBuilder}
         */
        static(static){
                this._config.static = static;
                return this;
        }

        /**
         * Set property methods
         * 
         * @param {String} methods
         * @returns {ClassBuilder}
         */
        methods(methods){
                this._config.methods = methods;
                return this;
        }

        /**
         * Set property defaultContructor
         * 
         * @param {String} defaultContructor
         * @returns {ClassBuilder}
         */
        defaultContructor(defaultContructor){
                this._config.defaultContructor = defaultContructor;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Class}
         */
        build(){
                return this._config;
        }      
}

exports.ClassBuilder = ClassBuilder;
