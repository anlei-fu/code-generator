const { domainModel } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.domainModelConfig = {
        table: domainModel,
        name: "DomainModel",
                items: [

                        // add
                        // domainId : validate --- @NotNull  
                        // id : validate --- @NotNull  
                        // taskId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addDomainModel")
                                .includes(collection => {
                                        collection.includes(domainModel.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/domainModel");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("domainId","@NotNull")
                                           .validate("id","@NotNull")
                                           .validate("taskId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDomainModelById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainModel/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById

                        new builder()
                                .type("update")
                                .id("updateDomainModelById")
                                .includes(collection => {
                                        collection.includes(domainModel.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainModel/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDomainModelById")
                                .includes(collection=>{
                                        collection.includes(domainModel.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainModel/{id}");
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

                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(domainModel.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(domainModel.columnsArray)
                                                  .excludes("id")

                                })
                                .id("getDomainModelList")
                                .controller(controller => {
                                        controller.path("/domainModel");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}