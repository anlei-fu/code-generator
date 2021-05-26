class SequenceReader {

        /**
         * 
         * @param {[]} sequence
         */
        constructor(sequence) {

                this._current = -1;
                this._sequence = sequence;
        }

        /**
         * Current Char
         */
        current() {
                return this._sequence[this._current];
        }

        /**
         * 
         */
        remain() {
                return this._sequence.length - this._current;
        }

        /**
         * 
         */
        readed() {
                return this._current;
        }

        /**
         * 
         */
        previous(step) {
                return this._sequence[this._current - (step || 1)];
        }

        /**
         * 
         */
        forward(step) {
                return this._sequence[this._current + (step || 1)];
        }

        /**
         * 
         */
        hasPrevious(step) {
                return this._current - (step || 1) > -1;
        }

        /**
         * 
         */
        hasNext(step) {
                return this._current + (step || 1) < this._sequence.length;
        }

        /**
         * 
         * @param {Number} step 
         */
        next(step) {
                this._current += step || 1;
                return this.current();
        }

        /**
         * 
         * @param {Number} step 
         */
        back(step) {
                this._current -= step || 1;
                return this.current();
        }
}

exports.SequenceReader = SequenceReader;
