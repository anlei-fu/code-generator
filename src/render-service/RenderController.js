const { EjsRender, } = require("./../generator/common/renders")
const { Controller } = require("./../http")
const { CrudServiceContext } = require("./../sql")

class RenderController extends Controller {
        constructor() {
                super("ejs-render")
                this._render = new EjsRender("./template");
                this._templateAccess;
        }

        /**
         * 
         * @param {CrudServiceContext} context 
         */
        init(context) {
                this._templateAccess = context.accesses["template"];
        }


        render({ query }) {
                let template = this._templateAccess.getById(query.templateId);
                if (!template)
                        return this.fail("template not exists");

                let content = this._renderCore(template.template, template.model, query.model);
                return this.resposneObject(content);
        }

        customerRender({ query }) {

        }

        _renderCore(template, templateModel, model) {

        }

        mount(app){
             app.post("./render",(req,resp)=>this._process(req,resp,this.render))
        }
}

exports.RenderController = RenderController