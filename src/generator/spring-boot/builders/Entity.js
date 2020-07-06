const {Field} =require("./Field");

class Entity {
        constructor () {
                this.name = "";              
                this.type = "";              
                this.description = "";              
                this.fields = [new Field()];              
 
        }
}

exports.Entity = Entity;

/**
 * Builder for Entity
 */
class EntityBuilder{
        constructor(){
                this._config =new Entity();
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {EntityBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

        /**
         * Set property type
         * 
         * @param {String} type
         * @returns {EntityBuilder}
         */
        type(type){
                this._config.type = type;
                return this;
        }

        /**
         * Set property description
         * 
         * @param {String} description
         * @returns {EntityBuilder}
         */
        description(description){
                this._config.description = description;
                return this;
        }

        /**
         * Set property fields
         * 
         * @param {[Field]} fields
         * @returns {EntityBuilder}
         */
        fields(fields){
                this._config.fields = fields;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Entity}
         */
        build(){
                return this._config;
        }      
}

exports.EntityBuilder = EntityBuilder;
