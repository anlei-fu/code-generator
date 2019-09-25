/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-24 11:27:13
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-24 13:49:44
 */
var { file } = require("../libs/file");
var { str } = require("../libs/str");
/**
 * @description class of parameter meta data
 */
class Para {
        constructor(name, type, out) {
                this.name = name;
                this.type = type;
                this.out = out;
        }
        toString() {
                return typeof this.out == "undefined"
                        ? ` *@Param {${this.type}} ${this.name}\r\n`
                        : ` *@Param  ${this.out} {${this.type}} ${this.name}\r\n`;
        }
}

/**
 * @description generate function comment of a function
 * read function segment file "input.txt" and seletct first segment between "(" and ")" to extract parameter
 * then write to "output.txt"
 */
function generateComment() {
        var text = file.read("input");
        var ls = [];
        var contents = str.select(text, "(", ")", 1);
        if (contents.length != 0) {
                var params = contents[0].split(",");

                for (let param of params) {
                        let words = str.splitToWords(param);
                        if (words.length == 2) {
                                ls.push(new Para(words[0], words[1]));
                        } else {
                                ls.push(new Para(words[0], words[2], words[1]));
                        }
                }
        }
        var prefix =
                `/**
 *@Description\r\n`;
        var suffix =
                ` *@Author
 *@Date ${Date.now()}
 */`;

        var data = prefix;

        for (let para of ls) {
                data += para.toString();
        }

        data += suffix;

        file.write("output", data);
}

generateComment();