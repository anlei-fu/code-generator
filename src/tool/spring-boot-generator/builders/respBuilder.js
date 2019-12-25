/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 16:26:50
 */
exports.respBuilder = function respBuilder() {

        /**
         * Determine is create new entity
         * 
         * @returns  {respBuilder}
         */
        this.doCreate = () => {
                this._doCreate = true;
                return this;
        }

        /**
         * Determine is return single data
         * 
         * @returns {respBuilder}
         */
        this.single = () => {
                this._single = true;
                return this;
        }

        /**
         * Set name of entity 
         * 
         * @param {String} name 
         * @returns {respBuilder}
         */
        this.name = (name) => {
                this._name = name;
                return this;
        }

        /**
         * Set description of entity
         * 
         * @param {String} description 
         * @returns {respBuilder}
         */
        this.description = (description) => {
                this._description = description;
                return this;
        }

        /**
         * 
         */
        this.build = function build() {
                return {
                        single: this._single,
                        description: this._description,
                        name: this._name,
                        doCreate: this._doCreate
                };
        }
}