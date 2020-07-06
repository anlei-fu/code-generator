const { ConfigItem } = require("./ConfigItem");
const { Table } = require("./Table");
const { SpringBootGeneratorContext } = require("./../builders/SpringBootGeneratorContext");

class ConfigGroup {
        constructor () {
                this.items = [new ConfigItem()];

                // table name upper case
                this.name = "";
                this.table = new Table();
                this.context = new SpringBootGeneratorContext();
        }
}

exports.ConfigGroup = ConfigGroup;

/**
 * Builder for ConfigGroup
 */
class ConfigGroupBuilder {
        constructor () {
                this._config = new ConfigGroup();
        }

        /**
         * Set property items
         * 
         * @param {[ConfigItem]} items
         * @returns {ConfigGroupBuilder}
         */
        items(items) {
                this._config.items = items;
                return this;
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {ConfigGroupBuilder}
         */
        name(name) {
                this._config.name = name;
                return this;
        }

        /**
         * Set property table
         * 
         * @param {Table} table
         * @returns {ConfigGroupBuilder}
         */
        table(table) {
                this._config.table = table;
                return this;
        }

        /**
         * Set property context
         * 
         * @param {String} context
         * @returns {ConfigGroupBuilder}
         */
        context(context) {
                this._config.context = context;
                return this;
        }


        /**
         * Build 
         * 
         * @returns {ConfigGroup}
         */
        build() {
                return this._config;
        }
}

exports.ConfigGroupBuilder = ConfigGroupBuilder;
