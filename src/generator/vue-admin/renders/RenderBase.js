const { EjsRender } = require("./../../common/renders/EjsRender");
class RenderBase {
        constructor () {
                this._render = new EjsRender(`${__dirname}/templates`);
        }

        /**
         * @abstract
         */
        render(model) {
                return this._render.renderContentFromFile(
                        `${__dirname}/templates/<%=file%>`,
                        model
                )
        }
}

exports.RenderBase = RenderBase