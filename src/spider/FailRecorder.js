class FailRecorder {

        /**
         * Constructor of FailRecorder
         * 
         * @constructor
         * @param {Number} maxFail 
         * @param {Number} maxContinuouslyFailedCount 
         */
        constructor (maxFail, maxContinuouslyFailedCount) {
                this._maxFail = maxFail || 10 * 10000;
                this._maxConticuouslyFail = maxContinuouslyFailedCount || 30;
                this._totalFail = 0;
                this._continuouslyFailedCount = 0;
        }

        /**
         * Set current fail count to 0
         */
        success() {
                this._continuouslyFailedCount = 0;
        }

        /**
         * Increase continuously failed count and total failed count
         */
        failed() {
                this._totalFail++;
                this._continuouslyFailedCount++;
        }

        /**
         * To check is over max fail count or continuously failed count
         * 
         * @returns {boolean}
         */
        get overMaxFailed() {
                return this._continuouslyFailedCount > this._maxConticuouslyFail || this._totalFail > this._maxFail;
        }
}

exports.FailRecorder = FailRecorder;