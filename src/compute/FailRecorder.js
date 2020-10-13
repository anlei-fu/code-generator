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
                this.totalFailed = 0;
                this.continuouslyFailedCount = 0;
        }

        /**
         * To check is over max fail count or continuously failed count
         * 
         * @returns {boolean}
         */
        get isOverMaxFailed() {
                return this.continuouslyFailedCount > this._maxConticuouslyFail || this.totalFailed > this._maxFail;
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
                this.totalFailed++;
                this.continuouslyFailedCount++;
        }
}

exports.FailRecorder = FailRecorder;