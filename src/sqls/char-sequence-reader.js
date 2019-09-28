/**
 *  Use to read a char sequence
 */
class CharSequenceReader {
        /**
         * 
         * @param {String} source 
         */
        constructor(source) {
                this.current = -1;
                this.source = source;
        }
        /**
         * @description has next 'step' char
         * @param {Number} step 
         * @returns {boolean}
         */
        hasNext(step) {
                step = step || 1;
                return this.current + step > this.source.length;
        }
        /**
         * @description move @param setp and return curent char
         * @param {Number} step 
         * @throws over @member sourece's max length will throw an error
         * @returns {String}
         */
        next(step) {
                step = step || 1;
                this.current += step;
                return getCurrent();
        }
        /**
         * @description has previous @param step char
         * @param {Number} step 
         * @returns {boolean}
         */
        hasPrevious(step) {
                step = step || 1;
                return this.current - step > this.source.length;
        }
        /**
         * @description back @param step char and retun curent char
         * @param {Number} step 
         * @throws when current position <0
         * @returns {String}
         */
        previous(step) {
                step = step || 1;
                this.current -= step;
                return getCurrent();

        }
        /**
         * @returns current char
         * @private
         */
        static getCurrent() {
                return this.source.charAt(this.current);
        }
}
exports.CharSequenceReader = CharSequenceReader;