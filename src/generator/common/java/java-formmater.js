const { STR } = require("./../../libs/str")
class FormatOption {
    constructor () {
        this.trimEmptyLine = true;
        this.generateJavaDoc = true;
        this.javaDocConfig = { field: "all", method: "all" };
        this.excludesMatcher = [];
    }
}


function format(folder, options) {

}

function formatCore() {

}

function googleFormat() {

}

class JavaDocGenerator {
    generate(text) {
        let lines = STR.splitToLines(text);
        let docs = [];
        let patterns = ["}", ";"]
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            let startLine = i;
            if (STR.startsWithAny(line.trim(), ["public", "private", "protected"])) {

                let docPosition = this.shouldGenerateDoc(lines, i);
                if (docPosition == -1)
                    continue;

                let pos = STR.firstIndexOfAny(line, patterns);
                while (pos = -1 && i < lines.length) {
                    line = lines[++i];
                    pos = STR.startsAndendsWithAny(line, patterns);
                }

                if (pos == -1)
                    break;

                let segment = STR.arrayToString1(lines.slice(startLine, i), x => x + "\r\n");
                let pattern = pos[i]
                if (pattern == "{") {
                    docs.push({ doc: this.parseAndRenderMethod(segment), position: docPosition });
                } else if (pattern == ";") {

                }
            }
        }
    }

    parseAndRenderMethodOrClass(text) {
        if (text.includes(" class")) {
            return this.parseAndRenderClass(text)
        } else {
            return this.parseAndRenderMethod(text);
        }
    }

    parseAndRenderMethod(text) {
        let params;
        let paramText = STR.select(text, "(", ")")[0];
        if (paramText) {
            params = this.parseParameters(paramText);
        }

        let exceptions;
        let exceptionText = STR.select(text, "throws", "}")[0];
        if (exceptionText) {
            exceptions = this.parseThrow(exceptionText);
        }


    }

    parseParameters(text) {
        let params = [];
        text.split(",").forEach(x => {
            let words = STR.splitToWords(x.trim());
            params.push(words[words.length - 1]);
        });

        return params;
    }

    parseThrow(text) {
        return text.split(",");
    }

    parseAndRenderField(text) {
        let pos = STR.firstIndexOfAny(text, [";", "="]);
        text = text.substr(0, pos);

    }

    parseAndRenderClass(text) {

    }

    shouldGenerateDoc(lines, currentLineNumber) {

    }
}