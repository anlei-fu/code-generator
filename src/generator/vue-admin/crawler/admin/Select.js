const {STR} =require("./libs/str")

class Select {
        constructor () {
                this.model = "";              
                this.enum = "";  
                this.upperModelName="";
                this.title="";            
 
        }
}

exports.Select = Select;

/**
 * Builder for Select
 */
class SelectBuilder{
        constructor(){
                this._config =new Select();
        }

        /**
         * Set property model
         * 
         * @param {String} model
         * @returns {SelectBuilder}
         */
        model(model){
                this._config.model = model;
                this._config.upperModelName=STR.upperFirstLetter(model);
                this._config.enum=model;
                return this;
        }

        /**
         * Set property _enum
         * 
         * @param {String} _enum
         * @returns {SelectBuilder}
         */
        _enum(_enum){
                this._config.enum = _enum;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Select}
         */
        build(){
                return this._config;
        }      
}

exports.SelectBuilder = SelectBuilder;
