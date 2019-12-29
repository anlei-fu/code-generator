const { STR } = require("./../../libs/str");
const { LoggerFactory } = require("./../logging/logger-factory");

const LOG = LoggerFactory.getLogger("csv-resolver");

class CellResolver {
        constructor() {

                /**
                 * Convert string to any
                 */
                this.doResolve = x => "";

                /**
                 * Name of property
                 */
                this.name = "";
        }
}

class CellConverter {
        constructor() {
                /**
                 * Convert any to string
                 */
                this.doConvert = x => "";

                /**
                 * Name of csv column
                 */
                this.header = "";
        }
}

/**
 * Resolve csv string to objects
 * 
 * @param {String} csv 
 * @param {[CellResolver]} cellResolvers 
 * @param {boolean} excludeFirstRow 
 * @returns {[Any]}
 */
function resolveFromCsvString(csv, cellResolvers, excludeFirstRow = true,throwError=true) {
        let outputs = [];
        STR.splitToLines(csv).forEach((row, rowNumber) => {
                if (rowNumber == 0 && excludeFirstRow)
                        return;

                let item = {};
                row.split(",").forEach((cell, cellNumber) => {
                        if (cellNumber > cellResolvers.length) {
                                LOG.warn(`cell count over resolvers count at row ${rowNumber}`);
                                return;
                        }

                        try {
                                item[cellResolvers[cellNumber].name] = cellResolvers[cellNumber].doResolve(cell);
                        } catch (ex) {
                                LOG.error(`resolve { ${row} } failed at row ${rowNumber} , cell ${cellNumber}`, ex);
                                
                                if (throwError)
                                        throw ex;
                        }
                })

                outputs.push(item);
        })

        return outputs;
}

/**
 * Convert to csv
 * 
 * @param {[Any]} array 
 * @param {[CellConverter]} cellConverters 
 * @returns {String}
 */
function toCsvString(array, cellConverters, makeHeaders = true) {
        let output = "";

        if (makeHeaders) {
                for (const key in cellConverters) 
                        output += `${cellConverters[key].header},`;

                output = STR.removeLastComa(output) + "\r\n";
        }

        array.forEach(item => {
                for (const key in cellConverters) 
                        output += `${cellConverters[key].doConvert(item[key])},`;

                output = STR.removeLastComa(output) + "\r\n";
        });

        return output;
}

module.exports = {
        toCsvString,
        resolveFromCsvString
}