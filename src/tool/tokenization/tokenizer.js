/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-15 11:02:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-15 15:14:19
 */
const { CharSequenceReader } = require("./char-sequence-reader");
const { Token, TOKEN_TYPE } = require("./token");
const { REGEX } = require("./../../libs/regex");
const { OPERATORS } = require("./constants");


class Tokenizer {
        /**
         * 
         * @param {CharSequenceReader} reader 
         */
        constructor(reader) {
                this._reader = reader;
                this._keywords = keywords;
                this._output = [];
        }
        /**
         * @returns {[Token]}
         */
        parse() {
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
                                case "`":
                                        this.parseString(c, "`");
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
                                case "-":
                                        this.parseComment(c, "-");
                                        break;
                                case "/":
                                        this.parseComment(c, "*");
                                        break;
                                case ".":
                                case "*":
                                case "(":
                                case ")":
                                case "+":
                                case "=":
                                case ",":
                                case ";":
                                        this._output.push(new Token(c, TOKEN_TYPE.operator));
                                        break;
                                case "!":
                                        this.parseOperator(c, "=");
                                        break;
                                case "|":
                                        this.parseOperator(c, "|");
                                        break;
                                case ":":
                                        this.parseOperator(c, "=");
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
        parseComment(current, match) {
                if (this._reader.hasNext()) {
                        let d = this._reader.next();

                        if (d == match) {
                                if (match == "*")
                                        this.parseMutipleLineComment();
                                else
                                        this.parseSingleLineComment();
                        } else {
                                this._reader.back();
                                this._output.push(new Token(current, TOKEN_TYPE.operator));
                        }

                } else {
                        this._output.push(new Token(current, TOKEN_TYPE.operator));
                }
        }
        parseSingleLineComment() {
                let temp = "--";
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
        parseOperator(current, match) {
                if (this._reader.hasNext()) {
                        let d = this._reader.next();
                        if (d == match) {
                                this._output.push(new Token(current + match, TOKEN_TYPE.operator));
                        } else {
                                this.parseSymbol(current + match);
                        }
                } else {
                        this._output.push(new Token(current, TOKEN_TYPE.symbol));
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
                        let c = this._reader.current();
                        if (c = ".") {
                                if (dotFound)
                                        dotFound = true;
                                else
                                        break;
                        } else if (REGEX.isNumber.test(c)) {
                                temp += c;
                        } else {
                                break;
                        }
                }
                //should check again
                this._output.push(temp, TOKEN_TYPE.number);
        }
        /**
         * 
         * @param {String} current 
         */
        skipWhiteSpace(current) {
                let temp = current;
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
                                        return;
                        }
                }

                this._output.push(new Token(temp, TOKEN_TYPE.blank));
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
                        }

                        if (end || OPERATORS.has(c))
                                break;
                }
                this._output.push(new Token(temp, TOKEN_TYPE.symbol));
        }
}

exports.tokenize = text => {
        return new Tokenizer(new CharSequenceReader(text)).parse();
}