/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-14 09:05:18
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-21 12:34:15
 */
const { FILE } = require("./../../libs/file");
const { STR } = require("./../../libs/str");
const { tokenize } = require("./../tokenization/tokenizer");
const { TOKEN_TYPE } = require("./../tokenization/token");
class Notice {
        constructor(name, table) {
                this.name = name;
                this.table = table;
        }
}

/**
 * 
 */
function getFunctions() {
        let lines = FILE.readLines("fc/proc.sql");
        let temp = "";
        console.log(lines.length);
        let ls = [];
        lines.forEach(line => {
                if (!line.trim().startsWith("prompt")) {
                        temp += line + "\r\n";
                }

                if (line.trim() == "/") {
                        ls.push(temp);
                        temp = "";
                }
        })
        console.log("total functions:" + ls.length);
        return ls;
}

function main() {
        let funcs = getFunctions();
        let result = {};
        funcs.forEach(f => {
                let name = getFuncName(f);
                console.log(name);
                result[name] = getNotice(f);
        });

        FILE.write("func-analyze.json", JSON.stringify(result, null, "  "));

}

function getFuncName(text) {
        let segs = STR.select(text, ".", "(");

        if (segs.length != 0)
                return segs[0];

        let raw_name = STR.splitToWords(text)[4];

        return raw_name.split(".")[1];
}

function getNotice(text) {

        let notices = [];

        tokenize(text).forEach((x, i, tokens) => {

                if (x.type == TOKEN_TYPE.symbol) {
                        let v = x.value.toLowerCase()
                        if (v == "from") {
                                if (tokens[i + 1].value != "("){
                                        notices.push(new Notice("from", tokens[i + 1].value));
                                        console.log(tokens[i + 1]);
                                }
                        } else if (v == "into") {
                                if (tokens[i - 1].value.toLowerCase() == "insert") {
                                        notices.push(new Notice("insert into", tokens[i + 1].value));
                                } else {
                                        notices.push(new Notice("assign", ""));
                                }
                        } else if (v == "update") {
                                if (tokens[i - 1].value.toLowerCase() == "for") {
                                        notices.push(new Notice("lock table", ""));
                                } else {
                                        notices.push(new Notice("update", tokens[i + 1].value));
                                }

                        } else if (v == "join") {
                                notices.push(new Notice("join", tokens[i + 1].value));
                        } else {
                                if (tokens[i + 2].value == "(" 
                                   && v.indexOf("_") != -1
                                   &&!v.startsWith("l")
                                   &&!v.startsWith("v")) {
                                        notices.push(new Notice("call", v));
                                }
                        }
                }


        });

        return notices;
}

// run 
main();