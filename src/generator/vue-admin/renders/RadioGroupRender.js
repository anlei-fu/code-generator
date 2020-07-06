const { RenderBase } = require("./RenderBase");
const { RadioGroup } =require("./../builders/RadioGroupBuilder");

/**
 * RadioGroup render
 */
class RadioGroupRender extends RenderBase {
        constructor () {
            super();
        }

        /**
         * Render RadioGroup
         * 
         * @param {RadioGroup} model
         * @returns {String}
         */
        render(model){
                return this._render.renderContentFromFile(
                        `radio-group.ejs`,
                        model
                )
        }
}

exports.RadioGroupRender = RadioGroupRender;