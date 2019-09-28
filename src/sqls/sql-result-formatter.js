
const { Cell } = require("./cell");
const colors = [];

/**
 * @description format sql query output
 * @param {Maxtrix<String>} values 
 */
function format(values) {
        let maxes = [];
        for (let i = 0; i < values.length; i++) {
                maxes.push(0);
                for (let j = 0; j < values[i].length; j++) {
                        maxes[i] = maxes[i] < values[i][j] ? values[i][j] : maxes[i];
                }
        }

        for (let i = 0; i < values.length; i++) {
                for (let j = 0; j < values[i].length; j++) {
                        var cell = new Cell(values[i][j], colors[i], maxes[i]);
                        cell.output();
                }
        }
}

exports.format=format;