const { STR } = require("./../../libs/str");
const { LoggerFactory } = require("./../logging/logger-factory");
const { CharSequenceReader } = require("./../tokenization/char-sequence-reader")

const LOG = LoggerFactory.getLogger("csv-resolver");

class CellResolver {
        constructor () {

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
        constructor () {
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
function resolveFromCsvString(csv, cellResolvers, excludeFirstRow = true, throwError = true) {
        let outputs = [];
        split(csv).forEach((row, rowNo) => {
                if (excludeFirstRow && rowNo == 0)
                        return;

                let item = {};
                row.forEach((cell, cellNo) => {
                        if (cellNo > cellResolvers.length) {
                                LOG.warn(`cell count > resolver count at ${rowNo},${cellNo}`);
                        } else {
                                item[cellResolvers[cellNo].name] = cellResolvers[cellNo].doResolve(cell);
                        }
                });

                outputs.push(item);
        })

        return outputs;
}

/**
 * split
 * 
 * @param {String} content
 * @returns {[[String]]} 
 */
function split(content) {
        let reader = new CharSequenceReader(content);
        let cell = "";
        let parseQuotation = false;
        let result = [];
        let row = [];
        while (reader.hasNext()) {
                let c = reader.next();
                if (c == "\"") {
                        if (!parseQuotation) {
                                if (reader.hasPrevious()) {
                                        if (reader.previous != "\\") {
                                                if (cell != "")
                                                        throw new Error(`unexcepted syntax at row ${result.length}`);

                                                parseQuotation = true;
                                        } else {
                                                cell += c;
                                        }

                                } else {
                                        if (cell != "")
                                                throw new Error(`unexcepted syntax at row ${result.length}`);

                                        parseQuotation = true;
                                }
                        } else {
                                if (reader.previous != "\\") {
                                        parseQuotation = false;
                                } else {
                                        cell += c;
                                }
                        }

                } else if (c == ",") {

                        if (parseQuotation) {
                                cell += c;
                        } else {
                                row.push(cell);
                                cell = "";
                        }
                } else if (c == "\n") {
                        if (parseQuotation) {
                                cell += c;
                        } else {
                                row.push(cell.trimRight());
                                cell = "";
                                result.push(row);
                                row = [];
                        }

                } else {
                        cell += c;
                }
        }

        if (cell != "")
                row.push(cell.trimRight());

        if (row.length != 0)
                result.push(row);

        return result;
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
                        output += `${normalizeString(cellConverters[key].header)},`;

                output = STR.removeLastComa(output) + "\r\n";
        }

        array.forEach(item => {
                for (const key in cellConverters)
                        output += `${normalizeString(cellConverters[key].doConvert(item[key]))},`;

                output = STR.removeLastComa(output) + "\r\n";
        });

        return output;
}

/**
 * 
 * @param {String} str 
 * @returns {String}
 */
function normalizeString(str) {
        let output = "";
        for (const c of str) {
                if (c == "\"") {
                        output.push("\\" + c);
                } else {
                        output.push(c);
                }
        }

        return output;
}

module.exports = {
        toCsvString,
        resolveFromCsvString
}