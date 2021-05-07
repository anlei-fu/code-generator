class StringBuilder {
        constructor (lineSplitor = "\r\n") {
                this._content = "";
                this._lineSplitor = lineSplitor;
        }

        append(str) {
                this._content += str;
                return this;
        }

        appendLine(str) {
                this._content += str + this._lineSplitor;
                return this;
        }

        build() {
                return this._content;
        }
}

exports.StringBuilder = StringBuilder;