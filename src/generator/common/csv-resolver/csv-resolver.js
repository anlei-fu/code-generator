const { STR } = require("./../../../libs/str");
const { LoggerFactory } = require("./../logging/logger-factory");
const { CharSequenceReader } = require("./../../../tools/tokenization/char-sequence-reader");

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
function resolveFromCsvString(csv, cellResolvers, excludeFirstRow = true, quotation = true) {
        let outputs = [];
        let rows = quotation ? split(csv) : defaultSplit(csv);
        rows.forEach((row, rowNo) => {
                if (excludeFirstRow && rowNo == 0)
                        return;

                let item = {};
                row.forEach((cell, cellNo) => {
                        if (cellNo >= cellResolvers.length) {
                                LOG.warn(`cell count > resolver count at ${rowNo},${cellNo}`);
                        } else {
                                item[cellResolvers[cellNo].name] = cellResolvers[cellNo].doResolve(cell);
                        }
                });

                outputs.push(item);
        })

        LOG.info("finish resolve!");
        return outputs;
}

function defaultSplit(content) {
        let rows = [];
        STR.splitToLines(STR.removeEmptyLine(content)).forEach(line => {
                let cells = line.split(",");
                rows.push(cells);
        });

        return rows;
}

/**
 * Split csv string to cells, quotation required
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
                                if (reader.hasNext()&&reader.next() == "\"") {
                                        cell+="\"";
                                } else {
                                        reader.back();
                                        parseQuotation = false;
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

// let data =`"TO_PLAN_LANDING_TYPE","PARAMS_TYPE","VARCHAR2","","Y","","落地页链接类型，当dpa_adtype为""DPA_LINK""时必填 允许值: ""DPA"", ""CUSTOM""","推广目的分类参数"`;

//  let result = split(data);
//  let t =0;

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
                for (const convertor in cellConverters)
                        output += `${normalizeString(cellConverters[convertor].doConvert(item[convertor]))},`;

                output = STR.removeLastComa(output) + "\r\n";
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
        resolvers: {
                STR: value => value,
                NUMBER: value => parseFloat(value),
                DATE: value => new Date(value)
        }
}