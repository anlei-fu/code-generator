class DeleteCheck {
        constructor () {
                /**
                 * @type {String}
                 */
                this.otherTable;              
                /**
                 * @type {String}
                 */
                this.field;              
                /**
                 * @type {String}
                 */
                this.msg;              
 
        }
}

exports.DeleteCheck = DeleteCheck;

/**
 * Builder for DeleteCheck
 */
class DeleteCheckBuilder{
        constructor(){
                this._config =new DeleteCheck();
        }

        /**
         * Set property otherTable
         * 
         * @param {String} otherTable
         * @returns {DeleteCheckBuilder}
         */
        otherTable(otherTable){
                this._config.otherTable = otherTable;
                return this;
        }

        /**
         * Set property field
         * 
         * @param {String} field
         * @returns {DeleteCheckBuilder}
         */
        field(field){
                this._config.field = field;
                return this;
        }

        /**
         * Set property msg
         * 
         * @param {String} msg
         * @returns {DeleteCheckBuilder}
         */
        msg(msg){
                this._config.msg = msg;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {DeleteCheck}
         */
        build(){
                return this._config;
        }      
}

exports.DeleteCheckBuilder = DeleteCheckBuilder;
