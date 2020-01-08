const { siteInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.siteInfoConfig = {
        table: siteInfo,
        name: "SiteInfo",
                items: [

                        // add
                        // id excluded 
                        // mainDomain : validate --- @Url
                        new builder()
                                .type("insert")
                                .id("addSiteInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(siteInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/siteInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("mainDomain","@Url")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteSiteInfoById")
                                .alias("t")
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
                                .alias("t")
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
                                .alias("t")
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
                        // mainDomain : validates --- @Url  
                        // description : excluded
                        new builder()
                                .type("select")
                                .id("getSiteInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(siteInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(siteInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["description"])
                                })
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
