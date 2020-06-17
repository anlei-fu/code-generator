exports.DelayCaculator = class {
        constructor (min, max, caulator) {
                this._currentDelay = "";
                this._min = min;
                this._max = max;
                this._caculator = caulator;
        }

        get currentDelay() {
                return this._currentDelay;
        }

        nextDelay(positive) {
                let value = this._caculator
                        ? this._caculator(this._currentDelay, this._min, this.max, positive)
                        : this._defaultCaculator(positive);

                this._currentDelay = Math.max(this._min, Math.min(value, this._max));

                return this._currentDelay;
        }

        _defaultCaculator(positive) {
                return positive ?
                        this._currentDelay * 1.5 : this._currentDelay * 0.7;
        }
}