const { CrudController } = require("../sql")

class TemplateController extends CrudController {
        constructor() {
                super("templateInfo","/template")
        }
}

exports.TemplateController = TemplateController