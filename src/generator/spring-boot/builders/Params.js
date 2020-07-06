class Params {
        constructor () {
                this.name = "";              
                this.description = "";              
                this.req = "";              
                this.fields = "";  
                this.doCreate=false;            
 
        }
}

exports.Params = Params;

/**
 * Builder for Params
 */
class ParamsBuilder{
        constructor(){
                this._config =new Params();
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {ParamsBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

        /**
         * Set property doCreate
         * 
         * @param {String} doCreate
         * @returns {ParamsBuilder}
         */
        doCreate(doCreate){
                this._config.doCreate = doCreate;
                return this;
        }

        /**
         * Set property description
         * 
         * @param {String} description
         * @returns {ParamsBuilder}
         */
        description(description){
                this._config.description = description;
                return this;
        }

        /**
         * Set property req
         * 
         * @param {String} req
         * @returns {ParamsBuilder}
         */
        req(req){
                this._config.req = req;
                return this;
        }

        /**
         * Set property fields
         * 
         * @param {String} fields
         * @returns {ParamsBuilder}
         */
        fields(fields){
                this._config.fields = fields;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Params}
         */
        build(){
                return this._config;
        }      
}

exports.ParamsBuilder = ParamsBuilder;
