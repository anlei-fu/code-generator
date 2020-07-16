class SpeedItem {
        constructor () {
                this.startTime = "";
                this.finishTime = "";
                this.isSuccess = false;
        }
}

exports.SpeedItem = SpeedItem;

/**
 * Builder for SpeedItem
 */
class SpeedItemBuilder {
        constructor () {
                this._config = new SpeedItem();
        }

        /**
         * Set property startTime
         * 
         * @param {String} startTime
         * @returns {SpeedItemBuilder}
         */
        startTime(startTime) {
                this._config.startTime = startTime;
                return this;
        }

        /**
         * Set property finishTime
         * 
         * @param {String} finishTime
         * @returns {SpeedItemBuilder}
         */
        finishTime(finishTime) {
                this._config.finishTime = finishTime;
                return this;
        }

        /**
         * Build 
         * 
         * @returns {SpeedItem}
         */
        build() {
                return this._config;
        }
}

exports.SpeedItemBuilder = SpeedItemBuilder;
