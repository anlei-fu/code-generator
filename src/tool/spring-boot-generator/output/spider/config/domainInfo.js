const { domainInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.domainInfoConfig = {
        table: domainInfo,
        name: "DomainInfo",
                items: [

                        // add
                        // id excluded 
                        // domainId : validate --- @NotNull  
                        // domain : validate --- @Url  
                        // maxSpeed : validate --- @NotNull  
                        // needCookie : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addDomainInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(domainInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/domainInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("domainId","@NotNull")
                                           .validate("domain","@Url")
                                           .validate("maxSpeed","@NotNull")
                                           .validate("needCookie","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDomainInfoById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // domain : validate --- @Url
                        new builder()
                                .type("update")
                                .id("updateDomainInfoById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(domainInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("domain","@Url")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDomainInfoById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(domainInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainInfo/{id}");
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
                        // domain : validates --- @Url  
                        // remark : excluded
                        new builder()
                                .type("select")
                                .id("getDomainInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(domainInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(domainInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                })
                                .controller(controller => {
                                        controller.path("/domainInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("domain","@Url")
                                })
                                .build()
                ]
}
