const { RenderBase } = require("./RenderBase");
const { ListPage } =require("./../builders/ListPageBuilder");

/**
 * ListPage render
 */
class ListPageRender extends RenderBase {
        constructor () {
            super();
        }

        /**
         * Render ListPage
         * 
         * @param {ListPage} model
         * @returns {String}
         */
        render(model){
                return this._render.renderContentFromFile(
                        `list-page.ejs`,
                        model
                )
        }
}

exports.ListPageRender = ListPageRender;