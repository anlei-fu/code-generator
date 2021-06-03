const { CrudController } = require("./../sql")


class TemplateController extends CrudController {
    constructor() {
        super("TemplateInfo", id, "/template")
    }


}

exports.TemplateController = TemplateController