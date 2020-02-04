const { CharSequenceReader } = require("./../tokenization/char-sequence-reader");
const { Token, TOKEN_TYPE } = require("./../tokenization/token");
const { REGEX } = require("./../../libs/regex");
const { OPERATORS } = require("./../tokenization/constants");

class JavaTokenizer {
        /**
         * @returns {[Token]}
         */
        tokenize(text) {

                this._reader = new CharSequenceReader(text);
                this._output = [];
                while (this._reader.hasNext()) {
                        let c = this._reader.next();

                        switch (c) {
                                case "\r":
                                case "\n":
                                case "\t":
                                case " ":
                                case "\f":
                                        this.skipWhiteSpace(c);
                                        break;
                                case "\"":
                                        this.parseString(c, "\"");
                                        break;
                                case "'":
                                        this.parseString(c, "'");
                                        break;
                                case "0":
                                case "1":
                                case "2":
                                case "3":
                                case "4":
                                case "5":
                                case "6":
                                case "7":
                                case "8":
                                case "9":
                                        this.parseNumber(c);
                                        break;
                                case "/":
                                        this.parseComment(c);
                                        break;
                                case ".":
                                        this.parseParamsOperator(c);
                                        break;
                                case "*":
                                        this.parseOperator(c, ["="]);
                                        break;
                                case "%":
                                        this.parseOperator(c, ["="]);
                                        break;
                                case "(":
                                case ")":
                                case "+":
                                        this.parseOperator(c, ["+", "="]);
                                        break;
                                case "-":
                                        this.parseOperator(c, ["-", "="]);
                                        break;
                                case "=":
                                        this.parseOperator(c, ["="]);
                                        break;
                                case ">":
                                        this.parseLogic(c);
                                        break;
                                case "<":
                                        this.parseLogic(c);
                                        break;
                                case "&":
                                        this.parseOperator(c, ["&", "="]);
                                        break;
                                case ":":
                                case "^":
                                case "`":
                                case ",":
                                case "?":
                                case ";":
                                        this._output.push(new Token(c, TOKEN_TYPE.operator));
                                        break;
                                case "!":
                                        this.parseOperator(c, ["="]);
                                        break;
                                case "|":
                                        this.parseOperator(c, ["|", "="]);
                                        break;
                                default:
                                        this.parseSymbol(c);
                                        break;
                        }
                }
                return this._output;
        }




        /**
         * 
         * @param {String} current 
         * @param {String} match 
         */
        parseComment(current) {
                if (this._reader.hasNext()) {
                        let d = this._reader.next();


                        if (d == "*") {
                                this.parseMutipleLineComment();
                        }
                        else if (d == "/") {
                                this.parseSingleLineComment();

                        } else if (d == "=") {
                                this._output.push(new Token(current + d, TOKEN_TYPE.operator));
                        }
                        else {
                                this._reader.back();
                                this._output.push(new Token(current, TOKEN_TYPE.operator));
                        }

                } else {
                        this._output.push(new Token(current, TOKEN_TYPE.operator));
                }
        }

        parseSingleLineComment() {
                let temp = "//";
                while (this._reader.hasNext()) {
                        let c = this._reader.next();
                        temp += c;
                        if (c == "\n") {
                                break;
                        }
                }

                this._output.push(new Token(temp, TOKEN_TYPE.comment));
        }


        parseMutipleLineComment() {
                let temp = "/*";
                while (this._reader.hasNext()) {
                        let c = this._reader.next();
                        temp += c;

                        let t = "";

                        if (c == "/") {
                                t = this._reader.previous();
                        }

                        if (c == "/" && this._reader.previous() == "*") {
                                break;
                        }
                }

                this._output.push(new Token(temp, TOKEN_TYPE.comment));
        }

        /**
         * 
         * @param {String} current 
         * @param {String} match 
         */
        parseOperator(current, matches) {
                if (this._reader.hasNext()) {
                        let d = this._reader.next();
                        for (const c of matches) {
                                if (c == d) {
                                        this._output.push(new Token(current + d, TOKEN_TYPE.operator));
                                        return;
                                }
                        }
                        this._reader.back();
                        this._output.push(new Token(current, TOKEN_TYPE.operator));
                } else {
                        this._output.push(new Token(current, TOKEN_TYPE.operator));
                }
        }

        /**
         * 
         * @param {String} current 
         * @param {String} end 
         */
        parseString(current, end) {
                let temp = current;
                while (this._reader.hasNext()) {
                        let c = this._reader.next();
                        temp += c;

                        if (c == end && this._reader.previous() != "\\") {
                                break;
                        }
                }

                this._output.push(new Token(temp, TOKEN_TYPE.string));
        }

        /**
         * 
         * @param {String} current 
         */
        parseNumber(current) {
                let dotFound = false;
                let temp = current;
                while (this._reader.hasNext()) {
                        let c = this._reader.next();
                        if (c == ".") {
                                if (!dotFound) {
                                        dotFound = true;
                                        temp += ".";
                                }
                                else
                                        break;
                        } else if (REGEX.isNumber.test(c)) {
                                temp += c;
                        } else {
                                break;
                        }
                }

                //should check again
                this._output.push(new Token(temp, TOKEN_TYPE.number));
        }

        /**
         * 
         * @param {String} current 
         */
        skipWhiteSpace(current) {
                let temp = current;
                let end = false;
                while (this._reader.hasNext()) {
                        let c = this._reader.next();
                        switch (c) {
                                case "\r":
                                case "\n":
                                case "\t":
                                case " ":
                                case "\f":
                                        temp += c;
                                        break;
                                default:
                                        this._reader.back();
                                        end = true;
                                        break;
                        }

                        if (end)
                                break;
                }

                this._output.push(new Token(temp, TOKEN_TYPE.blank));
        }

        parseParamsOperator(current) {
                if (this._reader.hasNext()) {
                        let d = this._reader.next();
                        if (d == ".") {
                                if (this._reader.hasNext()) {
                                        let e = this._reader.next();
                                        if (e == ".") {
                                                this._output.push(new Token(current + d + e, TOKEN_TYPE.operator));
                                        } else {
                                                this._reader.back(2);
                                                this._output.push(new Token(current, TOKEN_TYPE.operator));
                                        }
                                } else {
                                        this._reader.back();
                                        this._output.push(new Token(current, TOKEN_TYPE.operator));
                                }
                        } else {
                                this._reader.back();
                                this._output.push(new Token(current, TOKEN_TYPE.operator));
                        }
                } else {
                        this._output.push(new Token(current, TOKEN_TYPE.operator));
                }
        }

        parseLogic(current) {
                if (this._reader.hasNext()) {
                        let d = this._reader.next();
                        if (d == current) {
                                if (this._reader.hasNext()) {
                                        let e = this._reader.next();
                                        if (e == "=") {
                                                this._output.push(new Token(current + d + e, TOKEN_TYPE.operator));
                                        } else {
                                                this._reader.back();
                                                this._output.push(new Token(current + d, TOKEN_TYPE.operator));
                                        }

                                } else {
                                        this._output.push(new Token(current + d, TOKEN_TYPE.operator));
                                }

                        } else if (d == "=") {
                                this._output.push(new Token(current + d, TOKEN_TYPE.operator));

                        } else {
                                this._reader.back();
                                this._output.push(new Token(current, TOKEN_TYPE.operator));
                        }

                } else {
                        this._output.push(new Token(current, TOKEN_TYPE.operator));
                }
        }

        /**
         * 
         * @param {String} current 
         */
        parseSymbol(current) {
                let temp = current;
                while (this._reader.hasNext()) {

                        let end = false;
                        let c = this._reader.next();
                        switch (c) {
                                case " ":
                                case "\t":
                                case "\f":
                                case "\n":
                                case "\f":
                                        end = true;
                                        break;
                                default:
                                        if (!OPERATORS.has(c)) {
                                                temp += c;
                                        } else {
                                                this._reader.back();
                                                end = true;
                                        }
                                        break;
                        }

                        if (end)
                                break;
                }
                this._output.push(new Token(temp, TOKEN_TYPE.symbol));
        }
}

exports.JavaTokenizer=JavaTokenizer;