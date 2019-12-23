const { domainInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.domainInfoConfig = {
        table: domainInfo,
        name: "DomainInfo",
                items: [

                        // add
                        // domainId : validate --- @NotNull  
                        // id : validate --- @NotNull  
                        // maxSpeed : validate --- @NotNull  
                        // needCookie : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addDomainInfo")
                                .includes(collection => {
                                        collection.includes(domainInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/domainInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("domainId","@NotNull")
                                           .validate("id","@NotNull")
                                           .validate("maxSpeed","@NotNull")
                                           .validate("needCookie","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDomainInfoById")
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
                                .includes(collection=>{
                                        collection.includes(domainInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(domainInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                })
                                .id("getDomainInfoList")
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