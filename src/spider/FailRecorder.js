class FailRecorder {
        constructor (maxFail) {
                this._maxFail = maxFail;
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
                this._currentFail++;
        }

        /**
         * To check is over max fail count
         * 
         * @returns {boolean}
         */
        get overMaxFailed() {
                return this._currentFail > this._maxFail;
        }
}

exports.FailRecorder = FailRecorder;