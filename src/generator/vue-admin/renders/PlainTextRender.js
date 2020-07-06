const { RenderBase } = require("./RenderBase");
const { PlainText } =require("./../builders/PlainTextBuilder");

/**
 * PlainText render
 */
class PlainTextRender extends RenderBase {
        constructor () {
            super();
        }

        /**
         * Render PlainText
         * 
         * @param {PlainText} model
         * @returns {String}
         */
        render(model){
                return this._render.renderContentFromFile(
                        `plain-text.ejs`,
                        model
                )
        }
}

exports.PlainTextRender = PlainTextRender;