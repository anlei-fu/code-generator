class Constraint {
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
                 * @type {[String]}
                 */
                this.selfColumns;

                /**
                 * @type {String}
                 */
                this.targetTable;

                /**
                 * @type {[String]}
                 */
                this.targetColumn;

                /**
                 * @type {Boolean}
                 */
                this.update;

                /**
                 * @type {Boolean}
                 */
                this.delete;
        }
}

exports.Constraint = Constraint