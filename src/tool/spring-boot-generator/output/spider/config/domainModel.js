const { domainModel } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.domainModelConfig = {
        table: domainModel,
        name: "DomainModel",
        items: [

                // add
                builder("insert", "addDomainModel").controller(controller => {
                        controller.path("/domainModel/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDomainModelById").controller(controller => {
                        controller.path("/domainModel/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDomainModelById").controller(controller => {
                        controller.path("/domainModel/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDomainModelById").controller(controller => {
                        controller.path("/domainModel/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}