const { columnBuilder } = require("./columnBuilder");
exports.joinBuilder = function (table, type, joinCondition) {
        this.includes = new columnBuilder();
        this.conditions = new columnBuilder();
        this.table = table;
        this.type = type;
        this.joinCondition = joinCondition;

        /**
         * Config includes
         * 
         * @param {any => void} configer 
         */
        function includes(configer) {
                configer(this.includes);
                return this;
        }

        /**
         * Config conditions
         * 
         * @param {any => void} configer 
         * @returns {joinBuilder}
         */
        function conditions(configer) {
                configer(this.conditions);
                return this;
        }

        /***
         * Set alias
         * @returns {joinBuilder}
         */
        function alias(alias) {
                this.alias = alias;
                return this;
        }

        function build(){
                this.includes.build();
                this.conditions.build();
        }

        
}