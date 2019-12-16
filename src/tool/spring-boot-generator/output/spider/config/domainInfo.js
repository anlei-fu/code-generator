const { domainInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.domainInfoConfig = {
        table: domainInfo,
        name: "DomainInfo",
        items: [

                // add
                builder("insert", "addDomainInfo").controller(controller => {
                        controller.path("/domainInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDomainInfoById").controller(controller => {
                        controller.path("/domainInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDomainInfoById").controller(controller => {
                        controller.path("/domainInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDomainInfoById").controller(controller => {
                        controller.path("/domainInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}