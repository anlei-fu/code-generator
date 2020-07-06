const { RenderBase } = require("./RenderBase");
const { TextArea } =require("./../builders/TextAreaBuilder");

/**
 * TextArea render
 */
class TextAreaRender extends RenderBase {
        constructor () {
            super();
        }

        /**
         * Render TextArea
         * 
         * @param {TextArea} model
         * @returns {String}
         */
        render(model){
                return this._render.renderContentFromFile(
                        `text-area.ejs`,
                        model
                )
        }
}

exports.TextAreaRender = TextAreaRender;