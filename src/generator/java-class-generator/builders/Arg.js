class Arg {
        constructor () {
                this.name = "";              
                this.annotations = "";              
                this.final = "";              
                this.type = "";              
 
        }
}

exports.Arg = Arg;

/**
 * Builder for Arg
 */
class ArgBuilder{
        constructor(){
                this._config =new Arg();
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {ArgBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

        /**
         * Set property annotations
         * 
         * @param {String} annotations
         * @returns {ArgBuilder}
         */
        annotations(annotations){
                this._config.annotations = annotations;
                return this;
        }

        /**
         * Set property final
         * 
         * @param {String} final
         * @returns {ArgBuilder}
         */
        final(final){
                this._config.final = final;
                return this;
        }

        /**
         * Set property type
         * 
         * @param {String} type
         * @returns {ArgBuilder}
         */
        type(type){
                this._config.type = type;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Arg}
         */
        build(){
                return this._config;
        }      
}

exports.ArgBuilder = ArgBuilder;
