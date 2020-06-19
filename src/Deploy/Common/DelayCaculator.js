/**
 * Simple delay caculartor
 */
exports.DelayCaculator = class {
        /**
         * 
         * @param {number} min 
         * @param {number} max 
         * @param {number} positiveRate
         * @param {number} negativeRate
         * @param {(currectDelay:number,min:number,max:number,positive:boolean) => number} caculator 
         */
        constructor (min, max, positiveRate = 1.5, negativeRate = 0.7, caculator) {
                this._currentDelay = 1000;
                this._min = min;
                this._max = max;
                this._poitiveRate = positiveRate;
                this._negativeRate = negativeRate;
                this._caculator = caculator;
        }

        /**
         * Get currect delay
         * 
         * @returns {number}
         */
        get currentDelay() {
                return this._currentDelay;
        }

        /**
         * Get and set current delay
         * 
         * @param {boolean} positive 
         * @returns {number}
         */
        nextDelay(positive=true) {
                let value = this._caculator
                        ? this._caculator(this._currentDelay, this._min, this.max, positive)
                        : this._defaultCaculator(positive);

                this._currentDelay = Math.max(this._min, Math.min(value, this._max));

                return this._currentDelay;
        }

        /**
         * Caculate next delay , if caculator absent
         * positive => current delay * positiveRate (default is 1.5)
         * negative => current delay * negativeRage (default is 0.7)
         * 
         * @param {boolean} positive 
         * @returns {number}
         */
        _defaultCaculator(positive) {
                return !positive ?
                        this._currentDelay * this._poitiveRate
                        : this._currentDelay * this._negativeRate;
        }
}