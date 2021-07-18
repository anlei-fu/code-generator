const { RestService } = require("../http/RestService");
const { RenderController } = require("./RenderController");
const { TemplateController } = require("./TemplateController");
const { CrudServiceContext, TableConfig } = require("./../sql");
const { MySqlParserController } = require("./../parser/mysql/MySqlParserController");
const { LoggerFactory } = require("../logging");
const { SpellCheckerController } = require("./../spell")


async function main() {
    let controllers = [
        new RenderController(),
        new TemplateController(),
        new MySqlParserController(),
        new SpellCheckerController()
    ]

    let context = new CrudServiceContext(
        {
            host: "localhost",
            port: 3306, user: "root", password: "2011801243", database: "render_service"
        },
        [
            new TableConfig("template_info", "id", "order by id desc", ["id"])
        ]
    )
    let rest = new RestService(10335, controllers);
    rest.init(context);
    LoggerFactory.allowInfos("./*");

    rest.start();
}
/*************************************main***********************************************/
main();