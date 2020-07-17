class FailRecorder {
        constructor (maxFail, maxConticuouslyFail) {
                this._maxFail = maxFail || 10 * 10000;
                this._maxConticuouslyFail = maxConticuouslyFail || 30;
                this._totalFail = 0;
                this._currentFail = 0;
        }

        /**
         * Set current fail count to 0
         */
        success() {
                this._currentFail = 0;
        }

        /**
         * Increase current fail count
         */
        failed() {
                this._totalFail++;
                this._currentFail++;
        }

        /**
         * To check is over max fail count
         * 
         * @returns {boolean}
         */
        get overMaxFailed() {
                return this._currentFail > this._maxConticuouslyFail || this._totalFail > this._maxFail;
        }
}

exports.FailRecorder = FailRecorder;