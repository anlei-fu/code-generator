class JoinConfig {
        constructor () {
                /**
                 * @type {String}
                 */
                this.simpleJoin;              
                /**
                 * @type {String}
                 */
                this.condition;              
                /**
                 * @type {String}
                 */
                this.selfField;              
                /**
                 * @type {String}
                 */
                this.selfTable;              
                /**
                 * @type {String}
                 */
                this.otherTable;              
                /**
                 * @type {String}
                 */
                this.otherField;              
                /**
                 * @type {String}
                 */
                this.joinType;              
 
        }
}

exports.JoinConfig = JoinConfig;

/**
 * Builder for JoinConfig
 */
class JoinConfigBuilder{
        constructor(){
                this._config =new JoinConfig();
        }

        /**
         * Set property simpleJoin
         * 
         * @param {String} simpleJoin
         * @returns {JoinConfigBuilder}
         */
        simpleJoin(simpleJoin){
                this._config.simpleJoin = simpleJoin;
                return this;
        }

        /**
         * Set property condition
         * 
         * @param {String} condition
         * @returns {JoinConfigBuilder}
         */
        condition(condition){
                this._config.condition = condition;
                return this;
        }

        /**
         * Set property selfField
         * 
         * @param {String} selfField
         * @returns {JoinConfigBuilder}
         */
        selfField(selfField){
                this._config.selfField = selfField;
                return this;
        }

        /**
         * Set property selfTable
         * 
         * @param {String} selfTable
         * @returns {JoinConfigBuilder}
         */
        selfTable(selfTable){
                this._config.selfTable = selfTable;
                return this;
        }

        /**
         * Set property otherTable
         * 
         * @param {String} otherTable
         * @returns {JoinConfigBuilder}
         */
        otherTable(otherTable){
                this._config.otherTable = otherTable;
                return this;
        }

        /**
         * Set property otherField
         * 
         * @param {String} otherField
         * @returns {JoinConfigBuilder}
         */
        otherField(otherField){
                this._config.otherField = otherField;
                return this;
        }

        /**
         * Set property joinType
         * 
         * @param {String} joinType
         * @returns {JoinConfigBuilder}
         */
        joinType(joinType){
                this._config.joinType = joinType;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {JoinConfig}
         */
        build(){
                return this._config;
        }      
}

exports.JoinConfigBuilder = JoinConfigBuilder;
