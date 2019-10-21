/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-15 09:26:36
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-21 09:16:44
 */

exports.CharSequenceReader = class CharSequenceReader {
        /**
         * 
         * @param {String} text 
         */
        constructor(text) {

                this._current = 0;
                this._text = text;
        }
        /**
         * Current Char
         */
        current() { return this._text[this._current] };
        /**
         * 
         */
        remain  () { return this._text.length - this._current}
        /**
         * 
         */
        readed  () { return this._current;}
        /**
         * 
         */
        previous (step){return this._text[this._current - (step || 1)];}
        /**
         * 
         */
        forward (step) {return this._text[this._current + (step || 1)];}
        /**
         * 
         */
        hasPrevious (step){return this._current - (step || 1) > -1;}
        /**
         * 
         */
        hasNext (step) {return this._current + (step || 1) < this._text.length;}
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
