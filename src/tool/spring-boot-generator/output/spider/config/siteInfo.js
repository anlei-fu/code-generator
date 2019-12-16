const { siteInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.siteInfoConfig = {
        table: siteInfo,
        name: "SiteInfo",
        items: [

                // add
                builder("insert", "addSiteInfo").controller(controller => {
                        controller.path("/siteInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteSiteInfoById").controller(controller => {
                        controller.path("/siteInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateSiteInfoById").controller(controller => {
                        controller.path("/siteInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getSiteInfoById").controller(controller => {
                        controller.path("/siteInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}