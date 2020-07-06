const {ColumnConfig} =require("./ColumnConfig");
class Req {
        constructor () {
                this.name = "";
                this.description = "";
                this.excludes = new Set();
                this.type = "";
                this.doCreate = false;
                this.fields = [new ColumnConfig()];
                this.validates = new Set();

        }
}

exports.Req = Req;

/**
 * Builder for Req
 */
class ReqBuilder {
        constructor () {
                this._config = new Req();
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {ReqBuilder}
         */
        name(name) {
                this._config.name = name;
                return this;
        }

        /**
         * Set property description
         * 
         * @param {String} description
         * @returns {ReqBuilder}
         */
        description(description) {
                this._config.description = description;
                return this;
        }

        /**
         * Set property excludes
         * 
         * @param {String} excludes
         * @returns {ReqBuilder}
         */
        excludes(excludes) {
                this._config.excludes = excludes;
                return this;
        }

        /**
         * Set property type
         * 
         * @param {String} type
         * @returns {ReqBuilder}
         */
        type(type) {
                this._config.type = type;
                return this;
        }

        /**
         * Set property doCreate
         * 
         * @param {boolean} doCreate
         * @returns {ReqBuilder}
         */
        doCreate(doCreate = false) {
                this._config.doCreate = doCreate;
                return this;
        }

        /**
         * Set property fields
         * 
         * @param {String} fields
         * @returns {ReqBuilder}
         */
        fields(fields) {
                this._config.fields = fields;
                return this;
        }

        /**
         * Set property validates
         * 
         * @param {String} validates
         * @returns {ReqBuilder}
         */
        validates(validates) {
                this._config.validates = validates;
                return this;
        }


        /**
         * Build 
         * 
         * @returns {Req}
         */
        build() {
                return this._config;
        }
}

exports.ReqBuilder = ReqBuilder;
