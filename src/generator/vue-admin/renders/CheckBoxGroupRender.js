const { RenderBase } = require("./RenderBase");
const { CheckBoxGroup } =require("./../builders/CheckBoxGroupBuilder");

/**
 * CheckBoxGroup render
 */
class CheckBoxGroupRender extends RenderBase {
        constructor () {
            super();
        }

        /**
         * Render CheckBoxGroup
         * 
         * @param {CheckBoxGroup} model
         * @returns {String}
         */
        render(model){
                return this._render.renderContentFromFile(
                        `check-box-group.ejs`,
                        model
                )
        }
}

exports.CheckBoxGroupRender = CheckBoxGroupRender;