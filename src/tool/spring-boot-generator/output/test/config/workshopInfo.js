const { workshopInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.workshopInfoConfig = {
        table: workshopInfo,
        name: "WorkshopInfo",
        items: [

                // add
                builder("insert", "addWorkshopInfo").controller(controller => {
                        controller.path("/workshopInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteWorkshopInfoById").controller(controller => {
                        controller.path("/workshopInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateWorkshopInfoById").controller(controller => {
                        controller.path("/workshopInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getWorkshopInfoById").controller(controller => {
                        controller.path("/workshopInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}