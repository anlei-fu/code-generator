const { RenderBase } = require("./RenderBase");
const { Api } =require("./../builders/ApiBuilder");

/**
 * Api render
 */
class ApiRender extends RenderBase {
        constructor () {
            super();
        }

        /**
         * Render Api
         * 
         * @param {Api} model
         * @returns {String}
         */
        render(model){
                return this._render.renderContentFromFile(
                        `api.ejs`,
                        model
                )
        }
}

exports.ApiRender = ApiRender;