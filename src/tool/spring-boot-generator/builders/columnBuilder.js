/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 10:45:55
 */
const { TYPE, OBJECT } = require("../../../libs/utils")
exports.ColumnBuilder = class ColumnBuilder {
        constructor () {
                this._includes = {};
        }

        /**
         * Set excel header name
         * 
         * @param {String} column 
         * @param {String} label 
         */
        label(column, label) {
                this._setProperty(column, "label", label);
                return this;
        }

        /**
         * Set excel column width
         * 
         * @param {String|[String]} column 
         * @param {Number} width 
         */
        width(column,width){
                this._setProperty(column, "width", width);
                return this;
        }

        /**
         * Mark column is a list
         * 
         * @param {String|[String]} column 
         */
        batch(column) {
                return this._setBoolProperty(column, "isBatch");
        }

        /**
         * Add items into includes
         * 
         * @param {String|[String]|{name:String}|[{name:String}]} item 
         * @returns {ColumnBuilder}
         */
        includes(item) {
                if (TYPE.isArray(item)) {
                        item.forEach(x => {
                                this._addIfAbsent.call(this, x);
                        });
                } else {
                        this._addIfAbsent.call(this, item);
                }

                return this;
        }

        /**
         * Remove items from includes
         * 
         * @param {String|[String]|{name:String}|[{name:String}]} item  
         * @returns {ColumnBuilder}
         */
        excludes(item) {
                if (TYPE.isArray(item)) {
                        item.forEach(x => {
                                this._excludeCore.call(this, x);
                        });
                } else {
                        this._excludeCore.call(this, item);
                }

                return this;
        }

        /**
         * Set expression
         * 
         * @param {String|[String]|{name:String}|[{name:String}]} item 
         * @param {String} exp 
         * @returns {ColumnBuilder}
         */
        exp(item, exp) {
                return this._setProperty(item, "exp", exp);
        }

        /**
         * Set property "alias"
         * 
         * @param {String|[String]|{name:String}|[{name:String}]} item 
         * @param {String} alias
         * @returns {ColumnBuilder}
         */
        alias(item, alias) {
                return this._setProperty(item, "alias", alias);
        }

        /**
         * Set property "bigger" of every column
         * 
         * @param {String|[String]|{name:String}|[{name:String}]} item 
         * @returns {ColumnBuilder}
         */
        bigger(item) {
                return this._setBoolProperty(item, "bigger");
        }

        /**
         * Set property "biggerEqual" of every column
         * 
         * @param {String|[String]|{name:String}|[{name:String}]} item 
         * @returns {ColumnBuilder}
         */
        biggerEqual(item) {
                return this._setBoolProperty(item, "biggerEqual");
        }

        /**
         * Set property "samller" of every column
         * 
         * @param {String|[String]|{name:String}|[{name:String}]} item 
         * @returns {ColumnBuilder}
         */
        smaller(item) {
                return this._setBoolProperty(item, "smaller");
        }

        /**
         * Set property "smallerEqual" of every column
         * 
         * @param {String|[String]|{name:String}|[{name:String}]} item 
         * @returns {ColumnBuilder}
         */
        smallerEqual(item) {
                return this._setBoolProperty(item, "amsllerEqual");

        }

        /**
         * Set property "range" of every column
         * 
         * @param {String|[String]|{name:String}|[{name:String}]} item 
         * @returns {ColumnBuilder}
         */
        range(item) {
                return this._setBoolProperty(item, "range");
        }

        /**
         * Set property "startWith" of every column
         * 
         * @param {String|[String]|{name:String}|[{name:String}]} item 
         * @returns {ColumnBuilder}
         */
        startsWith(item) {
                return this._setBoolProperty(item, "startsWith");
        }

        /**
         * Set property "endWith" of every column
         * 
         * @param {String|[String]|{name:String}|[{name:String}]} item 
         * @returns {ColumnBuilder}
         */
        endsWith(item) {
                return this._setBoolProperty(item, "endsWith");
        }

        /**
         * Set property "startAndEndWith" of every column
         * 
         * @param {String|[String]|{name:String}|[{name:String}]} item 
         * @returns {ColumnBuilder}
         */
        startsAndEndsWith(item) {
                return this._setBoolProperty(item, "startsAndEndsWith");
        }

        /**
         * Set property "like" of every column
         * 
         * @param {String|[String]|{name:String}|[{name:String}]} item 
         * @returns {ColumnBuilder}
         */
        like(item) {
                return this._setBoolProperty(item, "like");
        }

        /**
         * Set property "prefix" of every item
         * 
         * @param {String} prefix
         * @returns {ColumnBuilder}
         */
        prefixAll(prefix) {
                return this._setProperty(this._includes, prefix);
        }

        /**
         * Set property "prefix"
         * 
         * @param {String|[String]|{name:String}|[{name:String}]} item 
         * @param {String} prefix
         * @returns {ColumnBuilder}
         */
        prefix(item, prefix) {
                return this._setProperty(item, "prefix", prefix);
        }

        /**
         * Set property "required" to true every item
         * 
         * @returns {ColumnBuilder}
         */
        requireAll() {
                return this.require(this.includes);
        }

        /**
         * Set property "required" true
         * 
         * @param {String|[String]|{name:String}|[{name:String}]} item  
         * @returns {ColumnBuilder}
         */
        require(item) {
                return this._setBoolProperty(item, "required");
        }

        /**
         * Set property "required" to false every item
         * 
         * @returns {ColumnBuilder}
         */
        unrequireAll() {
                return this.unrequire(this._includes);
        }

        /**
         * Set property "required" to false
         * 
         * @param {String|[String]|{name:String}|[{name:String}]} item  
         * @returns {ColumnBuilder}
         */
        unrequire(item) {
                return this._setProperty(item, "required", false);
        }

        /**
         * Remove item from includes
         * 
         * @private
         * @param {String|{name:String}} item 
         */
        _excludeCore(item) {
                if (!(TYPE.isString(item) || TYPE.isObject(item)))
                        throw new TypeError(`required type is 'String' or 'Object', but input is ${typeof item}`);

                if (TYPE.isObject(item) && !item.name)
                        throw new TypeError(`name property is required ,if input is 'Object',but input is ${item}`);

                let key = TYPE.isString(item) ? item : item.name;
                delete this._includes[key];
        }

        /**
         * Set boolean property
         * 
         * @private
         * @param {String|[String]|{name:String}|[{name:String}]} item  
         * @param {String} property ,name of property
         * @returns {ColumnBuilder}
         */
        _setBoolProperty(item, property) {
                return this._setProperty(item, property, true);
        }

        /**
         * Set property
         * 
         * @private
         * @param {String|[String]|{name:String}|[{name:String}]} item  
         * @param {String} property ,name of property
         * @param {Any} value ,value of property
         * @returns {ColumnBuilder}
         */
        _setProperty(item, property, value) {
                if (TYPE.isArray(item)) {
                        item.forEach(x => {
                                this._setPropertyCore(x, property, value);
                        });
                } else if (TYPE.isObject(item)) {
                        OBJECT.forEach(item, (key, value) => {
                                this._setPropertyCore(value, property, value);
                        });
                }
                else {
                        this._setPropertyCore(item, property, value);
                }

                return this;
        }

        /**
         * Set property of item
         * 
         * @private
         * @param {Object} item 
         * @param {String} key 
         * @param {Any} value 
         */
        _setPropertyCore(item, key, value) {
                item = this._addIfAbsent(item);
                item[key] = value;
        }

        /**
        * Add into includes if absent
        * 
        * @private
        * @param {String|{name:String}} item
        * @returns {ColumnBuilder}
        */
        _addIfAbsent(item) {

                if (!(TYPE.isString(item) || TYPE.isObject(item)))
                        throw new TypeError(`required type is 'String' or 'Object', but input is ${typeof item}`);

                if (TYPE.isObject(item) && !item.name)
                        throw new TypeError(`name property is required ,if input is 'Object',but input is ${item}`);

                if (TYPE.isString(item))
                        item = { name: item };

                if (!this._includes[item.name])
                        this._includes[item.name] = item;

                return this._includes[item.name];
        }

        /**
         * Internal call, normalize includes
         * 
         */
        build() {
                return OBJECT.toArray(this._includes);
        }
}