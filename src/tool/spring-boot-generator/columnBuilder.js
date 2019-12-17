/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 17:50:05
 */
const { TYPE, OBJECT } = require("./../../libs/utils")
exports.columnBuilder = function columBuilder() {

        this._includes = {};

        /**
         * Add items
         * 
         * @param {String|[String]} item 
         * @returns {columBuilder}
         */
        this.includes = (item) => {
                this._dispatch(item, this._includeCore);
                return this;
        }

        /**
         * Remove items
         * 
         * @param {String|[String]} item 
         * @returns {columBuilder}
         */
        this.excludes = (item) => {
                this._dispatch(item, this._excludeCore);
                return this;
        }

        /**
         * Set item expression
         * 
         */
        this.expression = function (item, expression) {

        }

        /**
         * Set alias
         * 
         * @param {String} alias 
         * @param {String} item 
         * @returns {columBuilder}
         */
        this.alias = (item, alias) => {
                this._aliasCore(this._addIfAbsent(item), alias);
                return this;
        }

        /**
         * Set prefix in every field
         * 
         * @returns {columnBuilder}
         */
        this.prefixAll = function prefixAll() {
                return this.prefix(this._includes);
        }

        /**
         * Set prefix
         * 
         * @param {String|[String]} item
         * @param {String} prefix
         * @returns {columnBuilder}
         */
        this.prefix = function prefix(item, prefix) {
                if (TYPE.isArray(item)) {
                        item.forEach(x => {
                                this._prefixCore(this._addIfAbsent(x), prefix);
                        });
                } else {
                        this._prefixCore(this._addIfAbsent(item), prefix);
                }

                return this;
        }

        /**
         * Set required to true in every field
         * 
         * @returns {columBuilder}
         */
        this.requireAll = function requireAll() {
                return this.require(this._includes);
        }

        /**
         * Set required true
         * 
         * @param {String|[String]} item 
         * @returns {columBuilder}
         */
        this.require = (item) => {
                this._dispatch(item, this._requireCore);
                return this;
        }

        /**
         * Set required to false in every field
         * 
         * @returns {columBuilder}
         */
        this.unrequireAll = function unrequireAll() {
                return this.unrequire(this._includes);
        }

        /**
         * Set required false
         * 
         * @param {String|[String]} item 
         * @returns {columBuilder}
         */
        this.unrequire = (item) => {
                this._dispatch(item, this._unrequireCore);
                return this;
        }

        /**
         * Add into includes if absent
         * 
         * @param {String|{name:String}} item
         * @returns {columnBuilder}
         */
        this._addIfAbsent = function addIfAbsent(item) {
                let key = TYPE.isString(item) ? item : item.name;

                if (!key)
                        throw new TypeError(`unexcepted type of item (${item})`);

                if (!this._includes[key])
                        this.includes(item);

                return this._includes[key];
        }

        /**
         * Dispatch func , accetp item {string|[string]} and 
         * a consumer<string> func
         * 
         * @private
         * @param {String|[String]} item  
         * @param {(String)=>void} cosumer 
         */
        this._dispatch = function dispatch(item, cosumer) {
                if (TYPE.isArray(item)) {
                        item.forEach(x => {
                                cosumer.call(this, x);
                        });
                } else {
                        cosumer.call(this, item);
                }
        }

        /**
         * Add item into items
         * 
         * @private
         * @param {String} item  
         */
        this._includeCore = (item) => {
                this._checkType(item);

                if (TYPE.isString(item)) {
                        if (this._includes[item])
                                return;
                        
                        // change type to object 
                        this._includes[item] = { name: item };
                } else {
                        
                        if (this._includes[item.name])
                                return;

                        this._includes[item.name] = item;
                }
        }

        /**
         * Set items[item].alias alias
         * 
         * @private
         * @param {Object} item  
         * @param {String} alias 
         */
        this._aliasCore = (item, alias) => {
                this._setProperty(item, "alias", alias);
        }

        /**
         * 
         * @param {String|[Object]} item  
         * @param {String} prefix 
         */
        this._prefixCore = (item, prefix) => {
                this._setProperty(item, "prefix", prefix);
        }

        /**
         * Remove item from includes
         * 
         * @private
         * @param {String|object} item 
         */
        this._excludeCore = (item) => {
                this._checkType(item);

                let key = TYPE.isString(item) ? item : item.name;
                if (!key)
                        throw new Error(`unexcepted type (${item})`);

                if (this._includes[key])
                        delete this._includes[key];
        }

        /**
         * Set required to true
         * 
         * @private
         * @param {String|[String]} item  
         */
        this._requireCore = (item) => {
                this._setProperty(item, "required", true);
        }

        /**
         * Set required to false
         * 
         * @private
         * @param {String|[String]} item 
         */
        this._unrequireCore = (item) => {
                this._setProperty(item, "required", false)

        }

        /**
         * Set property in item
         * 
         * @private
         * @param {Object} item 
         * @param {String} key 
         * @param {String} value 
         */
        this._setProperty = (item, key, value) => {
                if (TYPE.isObject(item)) {
                        item[key] = value;
                        return;
                }

                throw new TypeError(`unexcepted type (${item})`);
        }

        /**
         * Check  is type correct
         * 
         * @private
         * @param {any} item 
         */
        this._checkType = (item) => {

                if (!TYPE.isString(item) && !TYPE.isObject(item))
                        throw new TypeError(`unexcepted type ${item},require 'String' or 'Object'`);

                if (TYPE.isObject(item) && !item.name)
                        throw new TypeError("name property is required!");
        }

        /**
         * Internal call
         */
        this.build = () => {
                return OBJECT.toArray(this._includes);
        }
}