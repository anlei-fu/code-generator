const { Column, ColumnBuilder } = require("./Column");

class ColumnConfig extends Column {
        constructor () {

                // sql value or field alias
                this.property = "";

                // sql alias or 
                this.alias = "";

                // sql suffix
                this.suffix = "";

                // sql prefix
                this.prefix = "";

                // represent java type
                this.type = "";

                this.required = false;

                // represent a batch field
                this.isList = false;

                // sql like expression
                this.like = false;

                // range field
                this.range = false;

                // time range field
                this.timeRange = false;

                // sql starts with
                this.startsWith = false;

                // sql ends with
                this.endsWith = false;

                this.startsAndEndsWith = false;

                this.ifExpression = "";

                this.expression = "";

                this.label="";
        }
}

exports.ColumnConfig = ColumnConfig;

/**
 * Builder for ColumnConfig
 */
class ColumnConfigBuilder extends ColumnBuilder {
        constructor () {
                this._config = new ColumnConfig();
        }

        /**
         * Set property property
         * 
         * @param {String} property
         * @returns {ColumnConfigBuilder}
         */
        property(property) {
                this._config.property = property;
                return this;
        }

        /**
         * Set property alias
         * 
         * @param {String} alias
         * @returns {ColumnConfigBuilder}
         */
        alias(alias) {
                this._config.alias = alias;
                return this;
        }

        /**
         * Set property suffix
         * 
         * @param {String} suffix
         * @returns {ColumnConfigBuilder}
         */
        suffix(suffix) {
                this._config.suffix = suffix;
                return this;
        }

        /**
         * Set property prefix
         * 
         * @param {String} prefix
         * @returns {ColumnConfigBuilder}
         */
        prefix(prefix) {
                this._config.prefix = prefix;
                return this;
        }


        /**
         * Build 
         * 
         * @returns {ColumnConfig}
         */
        build() {
                return this._config;
        }
}

exports.ColumnConfigBuilder = ColumnConfigBuilder;
