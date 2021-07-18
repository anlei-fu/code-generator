const { EjsRender, checkModel, PackageRender } = require("./../renders")
const { Controller } = require("./../http")
const { CrudServiceContext } = require("./../sql");
const { FILE } = require("../libs");

class RenderController extends Controller {
        constructor() {
                super("ejs-render")
                this._render = new EjsRender("./template");
                this._templateAccess;
                this._packageRender = new PackageRender();
                this._copyrightNormal = FILE.read(`${__dirname}/copyright/copyright.js`);
                this._copyrightXml = FILE.read(`${__dirname}/copyright/copyright.xml`)
        }

        /**
         * 
         * @param {CrudServiceContext} context 
         */
        init(context) {
                this._templateAccess = context.accesses["templateInfo"];
        }


        async render({ body }) {
                let template = await this._templateAccess.getById(body.templateId);
                if (!template)
                        return this.fail("template not exists");

                let model = JSON.parse(template.model);

                let content = "";
                if (body.batch) {
                        body.models.forEach(x => {
                                content += this.renderCore(template.template, model, x);
                        });
                } else {
                        content = this.renderCore(template.template, model, body.model);
                }

                if (body.xml) {
                        content = this._copyrightXml + content;
                } else {
                        content = this._copyrightNormal + content;
                }


                return this.resposneObject(content);
        }

        renderCore(template, model, targetModel) {
                checkModel(model, targetModel);
                let content = this._render.renderContent(template, targetModel);
                content = this._packageRender.renderPackage(content);
                return content;
        }

        mount(app) {
                app.post("/render", (req, resp) => this._process(req, resp, this.render))
        }
}

exports.RenderController = RenderController