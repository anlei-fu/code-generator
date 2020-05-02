const { BaseSkipper } = require("./baseSkipper");

class Selector extends BaseSkipper {
        constructor (reader) {
                super(reader);
                this._stack = [];
        }

        /**
         * 
         * @param {String} left 
         * @param {String} right 
         * @returns {Number?}
         */
        select(left, right) {
                while (this._reader.hasNext()) {
                        let c = this._reader.next();
                        switch (c) {
                                case "\"":
                                        this.skipString("\"");
                                        break;
                                case "'":
                                        this.skipString("'");
                                        break;
                                case "/":
                                        if (this._reader.previous() == "/")
                                                this.skipSingleComment();
                                        break;
                                case "*":
                                        if (this.previous() == "/")
                                                this.skipMutipleComment();
                                        break;
                                case left:
                                        this._stack.push(left);
                                        break;
                                case right:
                                        if (this._stack.length == 0)
                                                return this._reader.current();
                                        this._stack.pop();
                                        break;
                                default:
                                        break;
                        }
                }
        }
}

exports.Selector = Selector;