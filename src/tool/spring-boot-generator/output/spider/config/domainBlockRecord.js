const { domainBlockRecord } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.domainBlockRecordConfig = {
        table: domainBlockRecord,
        name: "DomainBlockRecord",
        items: [

                // add
                builder("insert", "addDomainBlockRecord").controller(controller => {
                        controller.path("/domainBlockRecord/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDomainBlockRecordById").controller(controller => {
                        controller.path("/domainBlockRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDomainBlockRecordById").controller(controller => {
                        controller.path("/domainBlockRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDomainBlockRecordById").controller(controller => {
                        controller.path("/domainBlockRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}