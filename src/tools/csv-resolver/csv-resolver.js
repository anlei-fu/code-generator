const { STR } = require("./../../libs");
const { LoggerFactory } = require("./../../logging");
const { CharSequenceReader } = require("./../tokenization/char-sequence-reader");

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
 * @param {Object} config 
 * @returns {[Any]}
 */
function resolveFromCsvString(csv, config = { cellResolvers, excludeFirstRow: true, quotation: true, cellSplitor: ",", lineSplitor: "\n" }) {
        let outputs = [];
        let rows = config.quotation ?
                split(csv, config.lineSplitor, config.cellSplitor)
                : defaultSplit(csv, config.lineSplitor, config.cellSplitor);

        rows.forEach((row, rowNo) => {
                if (config.excludeFirstRow && rowNo == 0)
                        return;

                let item = {};
                row.forEach((cell, cellNo) => {
                        if (cellNo >= config.cellResolvers.length) {
                                LOG.warn(`cell count > resolver count at ${rowNo},${cellNo}`);
                        } else {
                                item[config.cellResolvers[cellNo].name] = config.cellResolvers[cellNo].doResolve(cell);
                        }
                });

                outputs.push(item);
        })

        LOG.info("finish resolve!");
        return outputs;
}

/**
 * Split to cells
 * 
 * @param {String} content 
 * @param {String} lineSplitor 
 * @param {String} cellSplitor
 * @returns {[[]]} 
 */
function defaultSplit(content, lineSplitor = "\n", cellSplitor = ",") {
        let rows = [];
        STR.splitToLines(STR.removeEmptyLine(content, lineSplitor), lineSplitor).forEach(line => {
                let cells = line.trim().split(cellSplitor);
                rows.push(cells);
        });

        return rows;
}

/**
 * Split csv string to cells with quotation disposion 
 * 
 * @param {String} content
 * @returns {[[String]]} 
 */
function split(content, lineSplitor = "\n", cellSplitor = ",") {
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
                                if (reader.hasNext() && reader.next() == "\"") {
                                        cell += "\"";
                                } else {
                                        reader.back();
                                        parseQuotation = false;
                                }
                        }

                } else if (c == cellSplitor) {
                        if (parseQuotation) {
                                cell += c;
                        } else {
                                row.push(cell);
                                cell = "";
                        }
                } else if (c == lineSplitor) {
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
function toCsvString(array, config = { cellConverters, makeHeaders: true, lineSpllitor: "\n", cellSplitor: "," }) {
        let output = "";

        if (config.makeHeaders) {
                for (const key in config.cellConverters)
                        output += `${normalizeString(config.cellConverters[key].header)}${cellSplitor}`;

                output = STR.removeLast(output, config.cellSplitor) + config.lineSpllitor;
        }

        array.forEach(item => {
                for (const key in config.cellConverters)
                        output += `${normalizeString(config.cellConverters[key].doConvert(item[key]))}${config.cellSplitor}`;

                output = STR.removeLast(output, config.cellSplitor) + config.lineSpllitor;
        });

        return output;
}

/**
 * Escape '"' char
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
        resolveFromCsvString,
        split,
        defaultSplit,
        resolvers: {
                STR: name => {
                        return {
                                doResolve: value => value,
                                name
                        }
                },
                NUMBER: name => {
                        return {
                                doResolve: value => parseFloat(value),
                                name
                        }
                },
                DATE: name => {
                        return {
                                doResolve: value => new Date(value),
                                name
                        }
                },
        }
}