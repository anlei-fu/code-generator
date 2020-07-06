const { RenderBase } = require("./RenderBase");
const { TimeRange } =require("./../builders/TimeRangeBuilder");

/**
 * TimeRange render
 */
class TimeRangeRender extends RenderBase {
        constructor () {
            super();
        }

        /**
         * Render TimeRange
         * 
         * @param {TimeRange} model
         * @returns {String}
         */
        render(model){
                return this._render.renderContentFromFile(
                        `time-range.ejs`,
                        model
                )
        }
}

exports.TimeRangeRender = TimeRangeRender;