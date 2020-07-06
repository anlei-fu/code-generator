class SqlType {
        constructor () {
                this.name = "";              
                this.length = "";              
 
        }
}

exports.SqlType = SqlType;

/**
 * Builder for SqlType
 */
class SqlTypeBuilder{
        constructor(){
                this._config =new SqlType();
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {SqlTypeBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

        /**
         * Set property length
         * 
         * @param {String} length
         * @returns {SqlTypeBuilder}
         */
        length(length){
                this._config.length = length;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {SqlType}
         */
        build(){
                return this._config;
        }      
}

exports.SqlTypeBuilder = SqlTypeBuilder;
