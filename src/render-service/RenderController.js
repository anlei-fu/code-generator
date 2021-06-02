const { EjsRender } = require("./../generator/common/renders")
const { Controller } = require("./../http")

class EjsController extends Controller {
        constructor(){
                this._render = new EjsRender("./template");
                super("ejs-render")
        }

        getTemplate(){

        }

        updateTemplate(){
                
        }

        render({ query }) {
                return this.resposneObject(this._render.render(query.template,query.model));
        }

        customerRender({ query }) {

        }

        _renderCore(){

        }
}

exports.EjsController = EjsController