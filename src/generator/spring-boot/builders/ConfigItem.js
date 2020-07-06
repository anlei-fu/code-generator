const { Req } = require("./Req");
const { Resp } = require("./Resp");
const { Params } = require("./Params");
const { Controller } = require("./Controller");
const { Table } = require("./Table");
const { Join } = require("./Join");
const { ColumnConfig } = require("./ColumnConfig");
const { SpringBootGeneratorContext } = require("./../builders/SpringBootGeneratorContext");

class ConfigItem {
        constructor () {
                // method name
                this.id = "";

                // sql type
                this.type = "";

                this.table = new Table();

                // table name
                this.name = "";

                // sql table alias
                this.alias = "";

                this.includes = [new ColumnConfig()];

                this.conditions = [new ColumnConfig()];

                this.joins = [new Join()];

                this.noController = false;

                this.noService = false;

                this.controller = new Controller();

                this.reqs = [new Req()];

                this.resp = new Resp();

                this.params = new Params();

                this.context = new SpringBootGeneratorContext();
        }
}

exports.ConfigItem = ConfigItem;

/**
 * Builder for ConfigItem
 */
class ConfigItemBuilder {
        constructor () {
                this._config = new ConfigItem();
        }

        /**
         * Set property id
         * 
         * @param {String} id
         * @returns {ConfigItemBuilder}
         */
        id(id) {
                this._config.id = id;
                return this;
        }

        /**
         * Set property type
         * 
         * @param {String} type
         * @returns {ConfigItemBuilder}
         */
        type(type) {
                this._config.type = type;
                return this;
        }

        /**
         * Set property alias
         * 
         * @param {String} alias
         * @returns {ConfigItemBuilder}
         */
        alias(alias) {
                this._config.type = alias;
                return this;
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {ConfigItemBuilder}
         */
        name(name) {
                this._config.type = name;
                return this;
        }

        /**
         * Set property table
         * 
         * @param {String} table
         * @returns {ConfigItemBuilder}
         */
        table(table) {
                this._config.table = table;
                return this;
        }

        /**
         * Set property includes
         * 
         * @param {[Column]} includes
         * @returns {ConfigItemBuilder}
         */
        includes(includes) {
                this._config.includes = includes;
                return this;
        }

        /**
         * Set property conditions
         * 
         * @param {[Column]} conditions
         * @returns {ConfigItemBuilder}
         */
        conditions(conditions) {
                this._config.conditions = conditions;
                return this;
        }

        /**
         * Set property joins
         * 
         * @param {[Join]} joins
         * @returns {ConfigItemBuilder}
         */
        joins(joins) {
                this._config.joins = joins;
                return this;
        }

        /**
         * Set property noController
         * 
         * @param {boolean} noController
         * @returns {ConfigItemBuilder}
         */
        noController(noController = true) {
                this._config.noController = noController;
                return this;
        }

        /**
         * Set property noService
         * 
         * @param {boolean} noService
         * @returns {ConfigItemBuilder}
         */
        noService(noService = true) {
                this._config.noService = noService;
                return this;
        }

        /**
         * Set property controller
         * 
         * @param {Controller} controller
         * @returns {ConfigItemBuilder}
         */
        controller(controller) {
                this._config.controller = controller;
                return this;
        }

        /**
         * Set property reqs
         * 
         * @param {[Req]} reqs
         * @returns {ConfigItemBuilder}
         */
        reqs(reqs) {
                this._config.reqs = reqs;
                return this;
        }

        /**
         * Set property resp
         * 
         * @param {Resp} resp
         * @returns {ConfigItemBuilder}
         */
        resp(resp) {
                this._config.resp = resp;
                return this;
        }

        /**
         * Set property params
         * 
         * @param {Params} params
         * @returns {ConfigItemBuilder}
         */
        params(params) {
                this._config.params = params;
                return this;
        }

        /**
         * Set property context
         * 
         * @param {SpringGeneratorContext} context
         * @returns {ConfigItemBuilder}
         */
        context(context) {
                this._config.context = context;
                return this;
        }


        /**
         * Build 
         * 
         * @returns {ConfigItem}
         */
        build() {
                return this._config;
        }
}

exports.ConfigItemBuilder = ConfigItemBuilder;
