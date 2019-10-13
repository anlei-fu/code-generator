const { FILE } = require("./../../libs/file");
const { STR } = require("./../../libs/str");
class Notice {
        constructor(name, tbale) {
                this.name = name;
                this.tbale = tbale;
        }
}

/**
 * 
 */
function getFunctions() {
        let lines = FILE.readLines("func.sql");
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
        return segs.length == 0 ?
                "unknow" : segs[0];
}

function getNotice(text) {
        let notices = [];
        let words = STR.splitToWords(text);
        console.log(words.length);
        words.forEach((w, i) => {
                if (w.toLowerCase() == "from" && i < words.length - 1) {
                        if (!words[i + 1].startsWith("("))
                                notices.push(new Notice("from", words[i + 1]));
                }
                console.log(w);

                if (w.toLowerCase() == "update") {

                        if (!words[i - 1].startsWith("for"))
                                notices.push(new Notice("update", words[i + 1]));
                }
                
                if (w.toLowerCase() == "into") {
                        if (words[i - 1].toLowerCase().startsWith("insert"))
                                notices.push(new Notice("insert", words[i + 1]));
                }
        });

        return notices;
}

// run 
main();