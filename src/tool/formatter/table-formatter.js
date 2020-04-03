
const { STR } = require("./../../libs/str")

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

        format(rows = []) {

                rows.forEach(item=>{
                        Object.keys(item).forEach(propertyName=>{
                                 item[propertyName]=JSON.stringify(item[propertyName]);
                        });
                })

                let table = this.convertToTable(rows, this.analyzeColumns(rows));

              let totalWidth = 0;
               table.forEach((value, key) => {
                        let maxWidth = this.analyzeMaxWidth(value);
                        totalWidth += maxWidth+2+2*this.config.padding;
                        this.nomrolizeItem(value, maxWidth);
                });

                console.log(totalWidth);
                let output = "";
                let columns = [...table.values()];
                let baseLine= STR.repeat("-", totalWidth-1) + "\r\n";;
                for (let i = 0; i < rows.length+1; i++) {
                        let line =baseLine+"|";
                        for (let j = 0; j < columns.length; j++) {
                                line += columns[j][i];
                        }
                        output += line + "\r\n";
                }

                output+=baseLine;

                return output;
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
                let indexColumn=["index"];
                rows.forEach((x,i)=>{
                       indexColumn.push((i+1).toString());
                });
                table.set("index",indexColumn);

                columns.forEach(column => {
                        let tableRaw = [column];
                        table.set(column, tableRaw);
                        rows.forEach(row => {
                                tableRaw.push(row[column] ? row[column].toString() : "");
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
                        maxLen = maxLen > item.length ? maxLen : item.length>this.config.maxWidth?this.config.maxWidth:item.length;
                });
                return maxLen;
        }

        /**
         * 
         * @param {[String]} array 
         * @param {Number} width 
         */
        nomrolizeItem(array = [], width) {
                let maxWidth = width +2 * this.config.padding;
                for (let i = 0; i < array.length; i++) {
                        if(array[i].length%2==0)
                          array[i]=array[i]+" ";

                        let overMaxWidth=false;
                        if (array[i].length > maxWidth) {
                                array[i] = array[i].substr(0, maxWidth - 2) + ".";
                                overMaxWidth=true;
                        }

                        let space = STR.repeat(" ", (maxWidth - this.config.padding * 2 - array[i].length) / 2);
                        let padding=STR.repeat(" ",this.config.padding);
                        if(overMaxWidth)
                          padding=padding.substr(0,padding.length-1);

                        let final=`${padding}${space}${array[i]}${space}${padding}|`;
                        let more=final.length-maxWidth;
                        if(more!=0)
                             final=final.substr(0,final.length-2)+"|";

                        array[i] = `${padding}${space}${array[i]}${space}${padding}|`;
                }
        }
}

exports.TableFormmatter = TableFormmatter