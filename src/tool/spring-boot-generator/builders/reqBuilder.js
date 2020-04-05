/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 11:49:04
 */
const { TYPE } = require("../../../libs/utils");

/**
 * Build req config
 */
class ReqBuilder {
        constructor () {
                this._excludes = [];
                this._noValidated = true;
                this._validates = new Map();
        }

        /**
         * Determine  is create new entity
         * 
         * @returns {ReqBuilder}
         */
        doCreate() {
                this._doCreate = true;
                return this;
        }

        /**
         * Mark it a batch req
         * 
         * @returns {ReqBuilder}
         */
        batch() {
                this._isBatch = true;
                return this;
        }

        /**
         * Add columns into excludes
         * 
         * @param {String|Object | [String|Object]} items 
         * @returns {ReqBuilder}
         */
        excludes(items) {
                this._excludes = TYPE.isString(items) ? [items] : items;
                return this;
        }

        /**
         * Add '@NotNull' validate
         * 
         * @param {String|[String]} item 
         * @returns {ReqBuilder}
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

        /**
         * Add validate
         * 
         * @param {String|[String]} item 
         * @param {String} validate  name
         * @returns {ReqBuilder}
         */
        validate(item, validate) {
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
         * @param {String|[String]} item 
         * @returns {ReqBuilder}
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
         * @param {String|[String]} item 
         * @param {Number} max 
         * @param {Number} min 
         * @returns {ReqBuilder}
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
         * Set req entity name 
         * 
         * @param {String} type
         * @returns {ReqBuilder}
         */
        type(type) {
                this._type = type;
                return this;
        }

        /**
         * Set req name
         * 
         * @param {String} name 
         * @returns {ReqBuilder}
         */
        name(name) {
                this._name = name;
                return this;
        }

        /**
         * Set req description
         * 
         * @param {String} description 
         * @returns {ReqBuilder}
         */
        description(description) {
                this._description = description;
                return this;

        }

        /**
         * Mark as no need validate-operation
         * 
         * @returns {ReqBuilder}
         */
        noValidated() {
                this._novalidated = false;
                return this;
        }

        /**
         * Set from property in request handler parameter binds
         * 
         * @param {String} from 
         * @returns {ReqBuilder}
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
                        isBatch: this._isBatch
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

exports.ReqBuilder = ReqBuilder;
