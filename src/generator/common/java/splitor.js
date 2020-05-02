const { BaseSkipper } = require("./baseSkipper");
const { CharSequenceReader } = require("./../tokenization/char-sequence-reader")
const { Selector } = require("./selector")
class Splitor extends BaseSkipper {
        /**
         * 
         * @param {String} text 
         */
        constructor (text) {
                this._text = text;
                super(new CharSequenceReader(text));
        }

        /**
         * @returns {[String]}
         */
        split() {
                let startPos = 0;
                let segments = [];
                while (this._reader.hasNext()) {
                        let c = this._reader.next();
                        switch (c) {
                                case "\"":
                                        this.skipString("\"");
                                        break;
                                case "'":
                                        this.skipString("'");
                                        break;
                                case "(":
                                        new Selector(this._reader).select("(", ")");
                                        break;
                                case "[":
                                        new Selector(this._reader).select("[", "]");
                                        break;
                                case "{":
                                        new Selector(this._reader).select("{", "}");
                                        break;
                                case ",":
                                        this.segments.push(this._text.substr(startPos, this._reader.current() - startPos));
                                        startPos = this._reader.current();
                                        break;
                                default:
                                        break;
                        }

                }

                if (startPos != this._text.length - 1)
                        segments.push(startPos, this._text.length - startPos);

                return segments;
        }
}