const { RenderBase } = require("./RenderBase");
const { CheckBox } =require("./../builders/CheckBoxBuilder");

/**
 * CheckBox render
 */
class CheckBoxRender extends RenderBase {
        constructor () {
            super();
        }

        /**
         * Render CheckBox
         * 
         * @param {CheckBox} model
         * @returns {String}
         */
        render(model){
                return this._render.renderContentFromFile(
                        `check-box.ejs`,
                        model
                )
        }
}

exports.CheckBoxRender = CheckBoxRender;