/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-18 09:10:03
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-01 15:55:29
 */
class GraphBuilder {

        /**
         * 
         * @param {String} type  TB or LR
         */
        constructor(type) {
                this._output = `\`\`\`mermaid\r\n Graph ${type}\r\n`;
        }

        /**
         * 
         * @param {[String]} items 
         */
        items(items) {
                let result = "";
                items.forEach((x, i, array) => {
                        if (i == 0) {
                                result += x + "-->|";
                        } else if (i == array.length - 1) {
                                result += x + "|";
                        } else {
                                result += x + ";\r\n";
                        }
                })

                this._output += result;
        }

        build() {
                return this._output + "```\r\n";
        }
}