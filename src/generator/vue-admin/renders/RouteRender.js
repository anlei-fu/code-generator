const { RenderBase } = require("./RenderBase");
const { Route } =require("./../builders/RouteBuilder");

/**
 * Route render
 */
class RouteRender extends RenderBase {
        constructor () {
            super();
        }

        /**
         * Render Route
         * 
         * @param {Route} model
         * @returns {String}
         */
        render(model){
                return this._render.renderContentFromFile(
                        `route.ejs`,
                        model
                )
        }
}

exports.RouteRender = RouteRender;