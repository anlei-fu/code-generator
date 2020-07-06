const {ColumnConfig} =require("./ColumnConfig");

class Resp {
        constructor () {
                this.name = "";
                this.description = "";
                this.doCreate = false;
                this.single = false;
                this.list = false;
                this.fields= [new ColumnConfig()];

        }
}

exports.Resp = Resp;

/**
 * Builder for Resp
 */
class RespBuilder {
        constructor () {
                this._config = new Resp();
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {RespBuilder}
         */
        name(name) {
                this._config.name = name;
                return this;
        }

        /**
         * Set property description
         * 
         * @param {String} description
         * @returns {RespBuilder}
         */
        description(description) {
                this._config.description = description;
                return this;
        }

        /**
         * Set property doCreate
         * 
         * @param {boolean} doCreate
         * @returns {RespBuilder}
         */
        doCreate(doCreate = true) {
                this._config.doCreate = doCreate;
                return this;
        }

        /**
         * Set property single
         * 
         * @param {boolean} single
         * @returns {RespBuilder}
         */
        single(single = true) {
                this._config.single = single;
                return this;
        }

        /**
         * Set property list
         * 
         * @param {boolean} list
         * @returns {RespBuilder}
         */
        list(list = true) {
                this._config.list = list;
                return this;
        }


        /**
         * Build 
         * 
         * @returns {Resp}
         */
        build() {
                return this._config;
        }
}

exports.RespBuilder = RespBuilder;
