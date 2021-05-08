class Casscader {
        constructor () {
                /**
                 * @type {String}
                 */
                this.filterField;              
                /**
                 * @type {String}
                 */
                this.name;              
                /**
                 * @type {String}
                 */
                this.valuefield;              
                /**
                 * @type {String}
                 */
                this.nameField;              
 
        }
}

exports.Casscader = Casscader;

/**
 * Builder for Casscader
 */
class CasscaderBuilder{
        constructor(){
                this._config =new Casscader();
        }

        /**
         * Set property filterField
         * 
         * @param {String} filterField
         * @returns {CasscaderBuilder}
         */
        filterField(filterField){
                this._config.filterField = filterField;
                return this;
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {CasscaderBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

        /**
         * Set property valuefield
         * 
         * @param {String} valuefield
         * @returns {CasscaderBuilder}
         */
        valuefield(valuefield){
                this._config.valuefield = valuefield;
                return this;
        }

        /**
         * Set property nameField
         * 
         * @param {String} nameField
         * @returns {CasscaderBuilder}
         */
        nameField(nameField){
                this._config.nameField = nameField;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Casscader}
         */
        build(){
                return this._config;
        }      
}

exports.CasscaderBuilder = CasscaderBuilder;
