/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-24 11:27:13
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-26 15:00:40
 */
var { FILE } = require("../libs/file");
var { STR } = require("../libs/str");
/**
 * @description Class of function parameter meta data
 */
class Para {
        constructor(name, type, out) {
                this.name = name;
                this.type = type;
                this.out = out;
        }
        toString() {
                return typeof this.out == "undefined"
                        ? ` *@param {${this.type}} ${this.name}\r\n`
                        : ` *@param  ${this.out} {${this.type}} ${this.name}\r\n`;
        }
}

/**
 * @description Generate  comment of a function
 * Read function section from file "input" and seletct first segment between "(" and ")" to extract parameters
 * Then write comment result into "output"
 * @param {String}
 */
function generateComment({ input, output }) {
        input = input || "input";
        output = output || "output";
        let text = FILE.read(input);
        let ls = [];
        let contents = STR.select(text, "(", ")", 1);

        if (contents.length != 0) {
                let params = contents[0].split(",");
                for (let param of params) {
                        let words = STR.splitToWords(param);
                        if (words.length == 2) {
                                ls.push(new Para(words[0], words[1]));
                        } else {
                                ls.push(new Para(words[0], words[2], words[1]));
                        }
                }
        }

        let prefix =
                `/**
 *@Description\r\n`;
        var suffix =
                ` *@Author
 *@Date ${Date.now()}
 */`;
        let data = prefix;

        for (let para of ls) {
                data += para.toString();
        }

        data += suffix;
        FILE.write(output, data);
}
// do generate
generateComment();