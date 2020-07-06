class TimeRange {
        constructor () {
                this.startTime = "";              
                this.endTime = "";              
                this.model = "";              
 
        }
}

exports.TimeRange = TimeRange;

/**
 * Builder for TimeRange
 */
class TimeRangeBuilder{
        constructor(){
                this._config =new TimeRange();
        }

        /**
         * Set property startTime
         * 
         * @param {String} startTime
         * @returns {TimeRangeBuilder}
         */
        startTime(startTime){
                this._config.startTime = startTime;
                return this;
        }

        /**
         * Set property endTime
         * 
         * @param {String} endTime
         * @returns {TimeRangeBuilder}
         */
        endTime(endTime){
                this._config.endTime = endTime;
                return this;
        }

        /**
         * Set property model
         * 
         * @param {String} model
         * @returns {TimeRangeBuilder}
         */
        model(model){
                this._config.model = model;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {TimeRange}
         */
        build(){
                return this._config;
        }      
}

exports.TimeRangeBuilder = TimeRangeBuilder;
