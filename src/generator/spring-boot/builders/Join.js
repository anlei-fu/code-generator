const {Table} =require("./Table");
class Join {
        constructor () {
                this.table =  new Table();  
                this.type="";            
                this.includes = "";              
                this.conditions = "";              
                this.alias = "";              
                this.joinCondition = "";              
 
        }
}

exports.Join = Join;

/**
 * Builder for Join
 */
class JoinBuilder{
        constructor(){
                this._config =new Join();
        }

        /**
         * Set property table
         * 
         * @param {Table} table
         * @returns {JoinBuilder}
         */
        table(table){
                this._config.table = table;
                return this;
        }

        /**
         * Set property type
         * 
         * @param {String} type
         * @returns {JoinBuilder}
         */
        type(type){
                this._config.includes = type;
                return this;
        }

        /**
         * Set property includes
         * 
         * @param {String} includes
         * @returns {JoinBuilder}
         */
        includes(includes){
                this._config.includes = includes;
                return this;
        }

        /**
         * Set property conditions
         * 
         * @param {String} conditions
         * @returns {JoinBuilder}
         */
        conditions(conditions){
                this._config.conditions = conditions;
                return this;
        }

        /**
         * Set property alias
         * 
         * @param {String} alias
         * @returns {JoinBuilder}
         */
        alias(alias){
                this._config.alias = alias;
                return this;
        }

        /**
         * Set property joinCondition
         * 
         * @param {String} joinCondition
         * @returns {JoinBuilder}
         */
        joinCondition(joinCondition){
                this._config.joinCondition = joinCondition;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {Join}
         */
        build(){
                return this._config;
        }      
}

exports.JoinBuilder = JoinBuilder;
