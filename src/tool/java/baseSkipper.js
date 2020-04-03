class BaseSkipper {
        constructor (reader) {
                this._reader = reader;
        }

        /**
         * Skip string segment , return segment end index
         * 
         * @param {String} match 
         * @returns {Number?}
         */
        skipString(match) {
                while (this._reader.hasNext()) {
                        let c = this._reader.next();
                        if (c == match && this._reader.previous() != "\\")
                                return this._reader.current();
                }
        }

        /**
         * Skip single comment
         * 
         * @returns {Number}
         */
        skipSingleComment() {
                while (this._reader.hasNext()) {
                        let c = this._reader.next();
                        if (c == "\n")
                                return this._reader.current();
                }
        }

        /**
         * Skip mutiple comment
         * 
         * @return {Number}
         */
        skipMutipleComment() {
                while (this._reader.hasNext()) {
                        let c = this._reader.next();
                        if (c == "/" && this._reader.previous() == "*")
                                return this._reader.current();
                }
        }

        /**
         * Skip blank segment
         * 
         * @returns {Number}
         */
        skipBlank() {
                while (this._reader.hasNext()) {
                        let c = this._reader.next();
                        switch (c) {
                                case "\r":
                                case "\n":
                                case "\b":
                                case "\t":
                                case "\f":
                                        break;
                                default:
                                        return this._reader.current();
                        }
                }
        }
}

exports.BaseSkipper = BaseSkipper;