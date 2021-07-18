class Column {
        constructor () {
                /**
                 * @type {String}
                 */
                this.name;

                /**
                 * @type {String}
                 */
                this.description;

                /**
                 * @type {String}
                 */
                this.sqlType;

                /**
                 * @type {Number}
                 */
                this.length;

                /**
                 * @type {Boolean}
                 */
                this.isAutoIncrement;

                
                /**
                 * @type {Boolean}
                 */
                this.isPrimaryKey;
        }
}

exports.Column = Column