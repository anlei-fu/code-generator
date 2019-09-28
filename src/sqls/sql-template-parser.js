
var { SqlTemplate, SqlSegment, TemplateParameter, SubTemplate } = require("./sql-template")
var { CharSequnecReader } = require("./char-sequence-reader")
class SqlTemplateParser {
        constructor(name, source) {
                this.name = name;
                this.parsingTemplate = false;
                this.reader = new CharSequnecReader(source);
                this.template = new SqlTemplate();
        }

        parse() {
                while (this.reader.hasNext()) {
                        var c = this.reader.next();
                        switch (c) {
                                case "{":
                                        break;
                                case "}":
                                        break;
                                case "$":
                                        break;
                                case "@":
                                        break;
                                case ":":
                                        break;
                                case "&":
                                        break;
                                default:
                                        break;
                        }
                }
        }
        parseNormal() {
                while (this.reader.hasNext()) {
                        let normal = "";
                        let c = this.reader.next();
                        if (c = "{") {
                                this.parsingTemplate = false;
                                this.reader.previous();
                                return;
                        } else {
                                normal += c;
                        }
                }
        }
        parseWhiteSpace() {

        }
        parseWord() {

        }
}
exports.SqlTemplateParser = SqlTemplateParser;