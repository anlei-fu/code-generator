class TimeRangeConfig {
        constructor () {
                /**
                 * @type {String}
                 */
                this.startTime;              
                /**
                 * @type {String}
                 */
                this.endTime;              
                /**
                 * @type {String}
                 */
                this.startTimeField;              
                /**
                 * @type {String}
                 */
                this.endTimeField;              
                /**
                 * @type {String}
                 */
                this.format;              
                /**
                 * @type {String}
                 */
                this.clearable;              
                /**
                 * @type {String}
                 */
                this.lable;              
                /**
                 * @type {Number}
                 */
                this.width;              
 
        }
}

exports.TimeRangeConfig = TimeRangeConfig;

/**
 * Builder for TimeRangeConfig
 */
class TimeRangeConfigBuilder{
        constructor(){
                this._config =new TimeRangeConfig();
        }

        /**
         * Set property startTime
         * 
         * @param {String} startTime
         * @returns {TimeRangeConfigBuilder}
         */
        startTime(startTime){
                this._config.startTime = startTime;
                return this;
        }

        /**
         * Set property endTime
         * 
         * @param {String} endTime
         * @returns {TimeRangeConfigBuilder}
         */
        endTime(endTime){
                this._config.endTime = endTime;
                return this;
        }

        /**
         * Set property startTimeField
         * 
         * @param {String} startTimeField
         * @returns {TimeRangeConfigBuilder}
         */
        startTimeField(startTimeField){
                this._config.startTimeField = startTimeField;
                return this;
        }

        /**
         * Set property endTimeField
         * 
         * @param {String} endTimeField
         * @returns {TimeRangeConfigBuilder}
         */
        endTimeField(endTimeField){
                this._config.endTimeField = endTimeField;
                return this;
        }

        /**
         * Set property format
         * 
         * @param {String} format
         * @returns {TimeRangeConfigBuilder}
         */
        format(format){
                this._config.format = format;
                return this;
        }

        /**
         * Set property clearable
         * 
         * @param {String} clearable
         * @returns {TimeRangeConfigBuilder}
         */
        clearable(clearable){
                this._config.clearable = clearable;
                return this;
        }

        /**
         * Set property lable
         * 
         * @param {String} lable
         * @returns {TimeRangeConfigBuilder}
         */
        lable(lable){
                this._config.lable = lable;
                return this;
        }

        /**
         * Set property width
         * 
         * @param {Number} width
         * @returns {TimeRangeConfigBuilder}
         */
        width(width){
                this._config.width = width;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {TimeRangeConfig}
         */
        build(){
                return this._config;
        }      
}

exports.TimeRangeConfigBuilder = TimeRangeConfigBuilder;
