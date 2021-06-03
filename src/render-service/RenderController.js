const { EjsRender } = require("./../generator/common/renders")
const { Controller } = require("./../http")

class EjsController extends Controller {
        constructor() {
                this._render = new EjsRender("./template");
                super("ejs-render")
                this._templateAccess;
        }


        init(context) {

        }


        render({ query }) {
                let template = this._templateAccess.getById(query.templateId);
                if (!template)
                        return this.fail("template not exists");

                let content = this._renderCore(template.template,template.model,query.model);
                return this.resposneObject(content);
        }

        customerRender({ query }) {

        }

        _renderCore(template,templateModel,model) {

        }
}

exports.EjsController = EjsController