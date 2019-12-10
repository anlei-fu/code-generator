/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-10 11:21:46
 */
const { TYPE } = require("./../../libs/utils")
exports.columnBuilder = (items) => {
        this.items = items;

        /**
         * Add items
         * 
         * @param {String|[String]} item 
         * @returns {columBuilder}
         */
        function include(item) {
                _dispatch(item, _includeCore);
                return this;
        }

        /**
         * Remove items
         * 
         * @param {String|[String]} item 
         * @returns {columBuilder}
         */
        function exclude(item) {
                _dispatch(item, _excludeCore);
                return this;
        }

        /**
         * Set alias
         * 
         * @param {String} alias 
         * @param {String|[String]} item 
         * @returns {columBuilder}
         */
        function alias(alias, item) {
                _dispatch(item, _aliasCore);
                return this;
        }

        /**
         * Set required false
         * 
         * @param {String|[String]} item 
         * @returns {columBuilder}
         */
        function unrequire(item) {
                _dispatch(item, _unrequireCore);
                return this;
        }

        /**
         * Set required true
         * 
         * @param {String|[String]} item 
         * @returns {columBuilder}
         */
        function require(item) {
                _dispatch(item, _requireCore);
                return this;
        }

        /**
         * Dispatch func , accetp item {string|[string]} and 
         * a consumer<string> func
         * 
         * @private
         * @param {String|[String]} item  
         * @param {(String)=>void} cosumer 
         */
        function _dispatch(item, cosumer) {
                if (TYPE.isArray(item)) {
                        item.forEach(x => {
                                cosumer(x);
                        });
                } else {
                        cosumer(item);
                }
        }

        /**
         * Set items[item].alias alias
         * 
         * @private
         * @param {String} alias 
         * @param {String|[String]} item  
         */
        function _aliasCore(alias, item) {

        }

        /**
         * Add item into items
         * 
         * @private
         * @param {String} item  
         */
        function _includeCore(item) {

        }

        /**
         * Remove item from items
         * 
         * @private
         * @param {String|[String]} item 
         */
        function _excludeCore(item) {

        }

        /**
         * Set items[item].required true
         * 
         * @private
         * @param {String|[String]} item  
         */
        function _requireCore(item) {

        }

        /**
         * @private
         * @param {String|[String]} item 
         */
        function _unrequireCore(item) {

        }
}