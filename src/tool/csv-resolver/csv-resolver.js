const { STR } = require("./../../libs/str")
class CsvItemResolveConfig {
        constructor() {
                this.resolver = x => "";
                this.name = "";
        }
}

class CsvItemConverterConfig {
        constructor() {
                this.converter = x => "";
                this.header = "";
        }
}

/**
 * 
 * @param {String} csv 
 * @param {[CsvItemResolveConfig]} reolveConfigs 
 * @param {boolean} excludeFirstRow 
 */
function resolveCsv(csv, reolveConfigs, excludeFirstRow = true) {
        let output = [];
        STR.splitToLines(csv).forEach((row, i) => {
                if (i == 0 && excludeFirstRow)
                        return;

                let item = {};
                row.split(",").forEach((cell, i) => {
                        item[reolveConfigs[i]].name = reolveConfigs[i].resolver(cell);
                })

                output.push(item);
        })

        return output;
}

/**
 * Convert to csv
 * 
 * @param {[Any]} array 
 * @param {{CsvItemConverterConfig}} convertConfigs 
 * @returns {String}
 */
function toCsv(array, convertConfigs, makeHeaders = true) {
        let output = "";

        if (makeHeaders) {
                for (const key in convertConfigs) {
                        output += `${convertConfigs[key].header},`;
                }

                output = STR.removeLastComa(output) + "\r\n";
        }

        array.forEach(item => {
                for (const key in convertConfigs) {
                        output += `${convertConfigs[key].converter(item[key])},`;
                }
                output = STR.removeLastComa(output) + "\r\n";
        });

        return output;
}

module.exports = {
        toCsv,
        resolveCsv
}