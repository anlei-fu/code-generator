class FailRecorder {

        /**
         * Constructor of FailRecorder
         * 
         * @constructor
         * @param {Number} maxFail 
         * @param {Number} maxContinuouslyFailedCount 
         */
        constructor (maxFail, maxContinuouslyFailedCount) {
                this._maxFail = maxFail || 1000;
                this._maxConticuouslyFail = maxContinuouslyFailedCount || 30;
                this.totalFail = 0;
                this.continuouslyFailedCount = 0;
        }

        /**
         * Set current fail count to 0
         */
        success() {
                this.continuouslyFailedCount = 0;
        }

        /**
         * Increase continuously failed count and total failed count
         */
        failed() {
                this.totalFail++;
                this.continuouslyFailedCount++;
        }

        /**
         * To check is over max fail count or continuously failed count
         * 
         * @returns {boolean}
         */
        get overMaxFailed() {
                return this.continuouslyFailedCount > this._maxConticuouslyFail || this.totalFail > this._maxFail;
        }
}

exports.FailRecorder = FailRecorder;