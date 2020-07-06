const { RenderBase } = require("./RenderBase");
const { Select } =require("./../builders/SelectBuilder");

/**
 * Select render
 */
class SelectRender extends RenderBase {
        constructor () {
            super();
        }

        /**
         * Render Select
         * 
         * @param {Select} model
         * @returns {String}
         */
        render(model){
                return this._render.renderContentFromFile(
                        `select.ejs`,
                        model
                )
        }
}

exports.SelectRender = SelectRender;