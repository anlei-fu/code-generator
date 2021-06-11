const { Column } = require("./mysql/Column");
const { Constraint } = require("./mysql/Constraint")
const { Index } = require("./Index");

class Table {
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
                 * @type {[Column]}
                 */
                this.columns;

                /**
                 * @type {[Index]}
                 */
                this.indexes;

                /**
                 * @type {[Constraint]}
                 */
                this.constraints;
        }
}

exports.Table = Table