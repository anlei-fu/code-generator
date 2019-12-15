/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-10 11:21:46
 */
const { TYPE,OBJECT } = require("./../../libs/utils")
exports.columnBuilder = () => {
        this.items = {};

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

        function build() {
                this.includes = OBJECT.toArray(this.includes);
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
                _setProperty(item, "alias", alias);
        }

        /**
         * Add item into items
         * 
         * @private
         * @param {String} item  
         */
        function _includeCore(item) {
                _checkType(item);

                if (TYPE.isString(item)) {
                        if (this.includes[item])
                                return;
                        this.include[item] = { name: item };
                } else {
                        if (!item.name)
                                throw new TypeError(`unexcepted type ${item}`);

                        if (this.includes[item.name])
                                return;

                        this.includes[item.name] = item;
                }
        }

        /**
         * Remove item from items
         * 
         * @private
         * @param {String|object} item 
         */
        function _excludeCore(item) {
                _checkType(item);

                if (TYPE.isString(item)) {
                        if (!this.includes[item])
                                return;
                        delete this.include[item];
                } else {

                        if (!this.includes[item.name])
                                return;

                        delete this.includes[item.name];
                }
        }

        /**
         * Set items[item].required true
         * 
         * @private
         * @param {String|[String]} item  
         */
        function _requireCore(item) {
                _setProperty(item, "required", true);
        }

        /**
         * 
         * @private
         * @param {String|[String]} item 
         */
        function _unrequireCore(item) {
                _setProperty(item, "required", false)

        }

        /**
         * 
         * @private
         * @param {*} item 
         * @param {*} key 
         * @param {*} value 
         */
        function _setProperty(item, key, value) {
                if (!TYPE.isObject(item))
                        item = { name: item, key: value };

                item[key] = value
        }

        /**
         * Check type is correct
         * 
         * @private
         * @param {any} obj 
         */
        function _checkType(obj) {
                if (!TYPE.isString(item) || !TYPE.isObject(item))
                        throw new TypeError(`unexcepted type ${item}`);
        }
}