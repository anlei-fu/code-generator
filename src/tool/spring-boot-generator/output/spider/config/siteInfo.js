const { siteInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.siteInfoConfig = {
        table: siteInfo,
        name: "SiteInfo",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // mainDomain : validate --- @Url
                        new builder()
                                .type("insert")
                                .id("addSiteInfo")
                                .includes(collection => {
                                        collection.includes(siteInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/siteInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("mainDomain","@Url")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteSiteInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/siteInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // mainDomain : validate --- @Url
                        new builder()
                                .type("update")
                                .id("updateSiteInfoById")
                                .includes(collection => {
                                        collection.includes(siteInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/siteInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("mainDomain","@Url")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getSiteInfoById")
                                .includes(collection=>{
                                        collection.includes(siteInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/siteInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
                                .build(),

                        // getList
                        // description : excluded 
                        // mainDomain : validates --- @Url
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(siteInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(siteInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["description"])
                                })
                                .id("getSiteInfoList")
                                .controller(controller => {
                                        controller.path("/siteInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("mainDomain","@Url")
                                })
                                .build()
                ]
}