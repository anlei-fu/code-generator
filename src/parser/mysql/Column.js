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
                 * @type {boolean}
                 */
                this.isPk;

                /**
                 * @type {String}
                 */
                this.sqlType;

                /**
                 * @type {Number}
                 */
                this.length;
        }
}

exports.Column = Column