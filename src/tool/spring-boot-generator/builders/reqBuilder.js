/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 11:49:04
 */
const { TYPE } = require("../../../libs/utils")
class ReqBuilder {
        constructor() {

                this._excludes = [];
                this._noValidated = true;
                this._validates = new Map();
        }

        /**
         * Determine  is create new entity
         * 
         * @returns {reqBuilder}
         */
        doCreate() {
                this._doCreate = true;
                return this;
        }

        /**
         * Remove columns
         * 
         * @param {String|Object | [String|Object]} items 
         * @returns {reqBuilder}
         */
        excludes(items) {
                this._excludes = TYPE.isString(items) ? [items] : items;
                return this;
        }

        /**
         * Add '@NotNull' validate
         * 
         * @param {string|[String]} item 
         */
        requireItem(item) {
                if (TYPE.isString(item)) {
                        this._addValidateCore(item, "@NotNull");

                } else {
                        item.forEach(x => {
                                this._addValidateCore(item, "@NotNull");
                        });
                }

                return this;
        }

        validate(item,validate){
                if (TYPE.isString(item)) {
                        this._addValidateCore(item, validate);

                } else {
                        item.forEach(x => {
                                this._addValidateCore(item, validate);
                        });
                }

                return this;

        }


        /**
         * Add 'NotBlank' validate
         * 
         * @param {string|[String]} item 
         */
        notBlank(item) {
                if (TYPE.isString(item)) {
                        this._addValidateCore(item, "@NotBlank");

                } else {
                        item.forEach(x => {
                                this._addValidateCore(item, "@NotBlank");
                        });
                }

                return this;
        }

        /**
         * Add range validates
         * 
         * 
         * @param {String|[String]} item 
         * @param {Number} max 
         * @param {Number} min 
         */
        range(item, max, min) {
                if (TYPE.isString(item)) {
                        this._addValidateCore(item, `@NotBlank(max=${max},min=${min})`);

                } else {
                        item.forEach(x => {
                                this._addValidateCore(item, `@NotBlank(max=${max},min=${min})`);
                        });
                }

        }

        /**
         * Set type of fields
         * 
         * @param {String} type
         * @returns {reqBuilder}
         */
        type(type) {
                this._type = type;
                return this;
        }

        /**
         * Set name
         * 
         * @param {String} name 
         * @returns {reqBuilder}
         */
        name(name) {
                this._name = name;
                return this;
        }

        /**
         * Set description
         * 
         * @param {String} description 
         * @returns {reqBuilder}
         */
        description(description) {
                this._description = description;
                return this;

        }

        /**
         * Mark as no need validate-operation
         * 
         * @returns {readonly}
         */
        noValidated() {
                this._novalidated = false;
                return this;
        }

        /**
         * Set from property
         * 
         * @param {String} from 
         * @returns {reqBuilder}
         */
        from(from) {
                this._from = from;
                return this;
        }

        /**
         * 
         */
        build() {
                return {
                        doCreate: this._doCreate,
                        from: this._from,
                        noValidated: this._novalidated,
                        description: this._description,
                        name: this._name,
                        type: this._type,
                        excludes: new Set(this._excludes),
                        validates: this._validates,
                }
        }

        /**
         * 
         * @param {String} item 
         * @param {String} validate 
         */
        _addValidateCore(item, validate) {
                if (!this._validates.has(item))
                        this._validates.set(item, new Set());

                if (!this._validates.get(item).has(validate))
                        this._validates.get(item).add(validate);
        }
}

exports.ReqBuilder=ReqBuilder;
