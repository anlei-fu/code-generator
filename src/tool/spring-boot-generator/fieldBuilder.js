/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:28:05
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-10 11:25:18
 */


/**
 * 
 * @param {String} name 
 * @param {String} type 
 */
function fieldBuilder(name, type) {
        this.name = name;
        this.type = type;
        this.validates = [];

        /**
         * Set type of field
         * 
         * @param {String} type 
         * @returns {fieldBuilder}
         */
        function type(type) {
                this.type = type;
                return this;
        }

        /**
         * Set name of field
         * 
         * @param {String} name 
         * @returns {fieldBuilder}
         */
        function name(name) {
                this.name = name;
                return this;
        }

        /**
         * Set description of field
         * 
         * @param {String} description 
         * @returns {fieldBuilder}
         */
        function description(description) {
                this.description = description;
                return this;
        }

        /**
         * Add validation
         * 
         * @param {String|[String]} validate 
         * @returns {fieldBuilder}
         */
        function validate(validate) {
                this.validates.push(dalidate);
                return this;
        }
}

exports.fieldBuilder = fieldBuilder;