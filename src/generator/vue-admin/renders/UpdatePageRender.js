const { RenderBase } = require("./RenderBase");
const { UpdatePage } =require("./../builders/UpdatePageBuilder");

/**
 * UpdatePage render
 */
class UpdatePageRender extends RenderBase {
        constructor () {
            super();
        }

        /**
         * Render UpdatePage
         * 
         * @param {UpdatePage} model
         * @returns {String}
         */
        render(model){
                return this._render.renderContentFromFile(
                        `update-page.ejs`,
                        model
                )
        }
}

exports.UpdatePageRender = UpdatePageRender;