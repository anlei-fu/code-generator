
const { STR } = require("./../../../libs/str")

class FormatConfig {
        constructor () {
                this.maxWidth = 20;
                this.padding = 2;
        }
}

class TableFormmatter {

        /**
         * 
         * @param {FormatConfig} config 
         */
        constructor (config = new FormatConfig()) {
                this.config = config;
        }

        /**
         * Format array of object to table style
         * 
         * @param {Any} rows 
         */
        format(rows = []) {

                // init every row ,convert it's properties to json-string 
                rows.forEach(row => {
                        Object.keys(row).forEach(propertyName => {
                                row[propertyName] = JSON.stringify(row[propertyName]);
                        });
                })

                let table = this.convertToTable(rows, this.analyzeColumns(rows));

                let totalWidth = 0;
                table.forEach((value) => {
                        let maxWidth = this.analyzeMaxWidth(value);
                        totalWidth += maxWidth + 2 + 2 * this.config.padding;
                        this.nomrolizeItem(value, maxWidth);
                });

                let output = "";
                let columns = [...table.values()];
                let baseLine = STR.repeat("-", totalWidth - 1) + "\r\n";;
                for (let i = 0; i < rows.length + 1; i++) {
                        let line = baseLine + "|";
                        for (let j = 0; j < columns.length; j++) {
                                line += columns[j][i];
                        }
                        output += line + "\r\n";
                }

                return output+baseLine;
        }

        /**
         * Find all columns
         * 
         * @param {[Any]} rows 
         * @returns {String}
         */
        analyzeColumns(rows = []) {
                let columns = new Set();
                rows.forEach(row => {
                        Object.keys(row).forEach(key => {
                                columns.add(key);
                        });
                });

                let array = [];
                columns.forEach(value => array.push(value));

                return array;
        }

        /**
         * Convert to 
         * 
         * @param {[Any]} rows 
         * @param {[String]} columns 
         * @returns {Map}
         */
        convertToTable(rows = [], columns) {

                let table = new Map();

                // push index column
                let indexColumn = ["index"];
                rows.forEach((_, i) => {
                        indexColumn.push((i + 1).toString());
                });

                // set index column first
                table.set("index", indexColumn);

                columns.forEach(column => {
                        let tableRow = [column];
                        table.set(column, tableRow);
                        rows.forEach(row => {
                                tableRow.push(row[column] ? row[column].toString() : "");
                        });
                });

                return table;
        }

        /**
         * Determine column MaxWith
         * 
         * @param {[String]} array 
         * @returns {Number}
         */
        analyzeMaxWidth(array = []) {
                let maxLen = 0;
                array.forEach(item => {
                        maxLen = maxLen > item.length
                                ? maxLen
                                : item.length > this.config.maxWidth ? this.config.maxWidth : item.length;
                });

                return maxLen;
        }

        /**
         * 
         * @param {[String]} array 
         * @param {Number} width 
         */
        nomrolizeItem(array = [], width) {
                let maxWidth = width + 2 * this.config.padding;
                for (let i = 0; i < array.length; i++) {
                        if (array[i].length % 2 == 0)
                                array[i] = array[i] + " ";

                        let overMaxWidth = false;
                        if (array[i].length > maxWidth) {
                                array[i] = array[i].substr(0, maxWidth - 2) + ".";
                                overMaxWidth = true;
                        }

                        let space = STR.repeat(" ", (maxWidth - this.config.padding * 2 - array[i].length) / 2);
                        let padding = STR.repeat(" ", this.config.padding);
                        if (overMaxWidth)
                                padding = padding.substr(0, padding.length - 1);

                        let final = `${padding}${space}${array[i]}${space}${padding}|`;
                        let more = final.length - maxWidth;
                        if (more != 0)
                                final = final.substr(0, final.length - 2) + "|";

                        array[i] = `${padding}${space}${array[i]}${space}${padding}|`;
                }
        }
}

exports.TableFormmatter = TableFormmatter