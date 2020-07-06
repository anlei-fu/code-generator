const { SqlType } = require("./SqlType")
class Column {
        constructor () {
                this.name = "";
                this.description = "";
                this.isPk = false;
                this.autoIncrement = false;
                this.rawName = "";
                this.nullable = true;
                this.type = new SqlType();

        }
}

exports.Column = Column;

/**
 * Builder for Column
 */
class ColumnBuilder {
        constructor () {
                this._config = new Column();
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {ColumnBuilder}
         */
        name(name) {
                this._config.name = name;
                return this;
        }

        /**
         * Set property description
         * 
         * @param {String} description
         * @returns {ColumnBuilder}
         */
        description(description) {
                this._config.description = description;
                return this;
        }

        /**
         * Set property isPk
         * 
         * @param {boolean} isPk
         * @returns {ColumnBuilder}
         */
        isPk(isPk = true) {
                this._config.isPk = isPk;
                return this;
        }

        /**
         * Set property autoIncrement
         * 
         * @param {boolean} autoIncrement
         * @returns {ColumnBuilder}
         */
        autoIncrement(autoIncrement = true) {
                this._config.autoIncrement = autoIncrement;
                return this;
        }

        /**
         * Set property rawName
         * 
         * @param {String} rawName
         * @returns {ColumnBuilder}
         */
        rawName(rawName) {
                this._config.rawName = rawName;
                return this;
        }

        /**
         * Set property nullable
         * 
         * @param {boolean} nullable
         * @returns {ColumnBuilder}
         */
        nullable(nullable = true) {
                this._config.nullable = nullable;
                return this;
        }

        /**
         * Set property type
         * 
         * @param {SqlType} type
         * @returns {ColumnBuilder}
         */
        type(type) {
                this._config.type = type;
                return this;
        }

        /**
         * Build 
         * 
         * @returns {Column}
         */
        build() {
                return this._config;
        }
}

exports.ColumnBuilder = ColumnBuilder;
