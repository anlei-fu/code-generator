class OrderBy {
        constructor () {
                /**
                 * @type {String}
                 */
                this.field;              
                /**
                 * @type {String}
                 */
                this.orderByType;              
 
        }
}

exports.OrderBy = OrderBy;

/**
 * Builder for OrderBy
 */
class OrderByBuilder{
        constructor(){
                this._config =new OrderBy();
        }

        /**
         * Set property field
         * 
         * @param {String} field
         * @returns {OrderByBuilder}
         */
        field(field){
                this._config.field = field;
                return this;
        }

        /**
         * Set property orderByType
         * 
         * @param {String} orderByType
         * @returns {OrderByBuilder}
         */
        orderByType(orderByType){
                this._config.orderByType = orderByType;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {OrderBy}
         */
        build(){
                return this._config;
        }      
}

exports.OrderByBuilder = OrderByBuilder;
