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
                this._output = `\`\`\`mermaid\r\n graph ${type};\r\n`;
        }

        /**
         * 
         * @param {[String]} items 
         */
        line(items) {
                let result = "";
                items.forEach((x, i, array) => {
                        if (i == array.length - 1) {
                               result+=x.name;
                        } else {
                                result += `${x.name}--${x.text}-->`;
                        }
                })

                this._output += result+";\r\n";
        }

        build() {
                return this._output + "```\r\n";
        }
}

exports.GraphBuilder=GraphBuilder