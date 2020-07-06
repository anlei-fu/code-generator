/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 16:26:50
 */
class RespBuilder {

        /**
         * Determine is create new entity
         * 
         * @returns  {RespBuilder}
         */
        doCreate() {
                this._doCreate = true;
                return this;
        }

        /**
         * Determine is return single data
         * 
         * @returns {RespBuilder}
         */
        single() {
                this._single = true;
                return this;
        }

        /**
         * Set list result
         */
        list(){
                this._list=true;
                return this;
        }

        /**
         * Set name of entity 
         * 
         * @param {String} name 
         * @returns {RespBuilder}
         */
        name(name) {
                this._name = name;
                return this;
        }

        /**
         * Set description of entity
         * 
         * @param {String} description 
         * @returns {RespBuilder}
         */
        description(description) {
                this._description = description;
                return this;
        }

        /**
         *  Internal call
         */
        build() {
                return {
                        single: this._single,
                        description: this._description || "",
                        name: this._name,
                        doCreate: this._doCreate,
                        list:this._list
                };
        }
}

exports.RespBuilder = RespBuilder;