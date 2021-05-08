class Dictionary {
        constructor () {
                /**
                 * @type {String}
                 */
                this.name;              
                /**
                 * @type {Number}
                 */
                this.value;              
                /**
                 * @type {Number}
                 */
                this.order;              
                /**
                 * @type {String}
                 */
                this.color;              
 
        }
}

exports.Dictionary = Dictionary;

/**
 * Builder for Dictionary
 */
class DictionaryBuilder{
        constructor(){
                this._config =new Dictionary();
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {dictionaryBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

        /**
         * Set property value
         * 
         * @param {Number} value
         * @returns {dictionaryBuilder}
         */
        value(value){
                this._config.value = value;
                return this;
        }

        /**
         * Set property order
         * 
         * @param {Number} order
         * @returns {dictionaryBuilder}
         */
        order(order){
                this._config.order = order;
                return this;
        }

        /**
         * Set property color
         * 
         * @param {String} color
         * @returns {dictionaryBuilder}
         */
        color(color){
                this._config.color = color;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Dictionary}
         */
        build(){
                return this._config;
        }      
}

exports.DictionaryBuilder = DictionaryBuilder;
