class Validate {
        constructor () {
                this.name = "";              
                this.require = "";              
                this.email = "";              
                this.number = "";              
                this.phone = "";              
                this.idCard = "";              
                this.emit = "";              
                this.expression = "";              
                this.min = "";              
                this.max = "";              
 
        }
}

exports.Validate = Validate;

/**
 * Builder for Validate
 */
class ValidateBuilder{
        constructor(){
                this._config =new Validate();
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {ValidateBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

        /**
         * Set property require
         * 
         * @param {String} require
         * @returns {ValidateBuilder}
         */
        require(require){
                this._config.require = require;
                return this;
        }

        /**
         * Set property email
         * 
         * @param {String} email
         * @returns {ValidateBuilder}
         */
        email(email){
                this._config.email = email;
                return this;
        }

        /**
         * Set property number
         * 
         * @param {String} number
         * @returns {ValidateBuilder}
         */
        number(number){
                this._config.number = number;
                return this;
        }

        /**
         * Set property phone
         * 
         * @param {String} phone
         * @returns {ValidateBuilder}
         */
        phone(phone){
                this._config.phone = phone;
                return this;
        }

        /**
         * Set property idCard
         * 
         * @param {String} idCard
         * @returns {ValidateBuilder}
         */
        idCard(idCard){
                this._config.idCard = idCard;
                return this;
        }

        /**
         * Set property emit
         * 
         * @param {String} emit
         * @returns {ValidateBuilder}
         */
        emit(emit){
                this._config.emit = emit;
                return this;
        }

        /**
         * Set property expression
         * 
         * @param {String} expression
         * @returns {ValidateBuilder}
         */
        expression(expression){
                this._config.expression = expression;
                return this;
        }

        /**
         * Set property min
         * 
         * @param {String} min
         * @returns {ValidateBuilder}
         */
        min(min){
                this._config.min = min;
                return this;
        }

        /**
         * Set property max
         * 
         * @param {String} max
         * @returns {ValidateBuilder}
         */
        max(max){
                this._config.max = max;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Validate}
         */
        build(){
                return this._config;
        }      
}

exports.ValidateBuilder = ValidateBuilder;
