const { divisionUser } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.divisionUserConfig = {
        table: divisionUser,
        name: "DivisionUser",
                items: [

                        // add
                        // id validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDivisionUser")
                                .includes(collection => {
                                        collection.includes(divisionUser.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/divisionUser");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDivisionUserById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/divisionUser/{id}");
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
                                .id("updateDivisionUserById")
                                .includes(collection => {
                                        collection.includes(divisionUser.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/divisionUser/{id}");
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
                                .id("getDivisionUserById")
                                .includes(collection=>{
                                        collection.includes(divisionUser.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/divisionUser/{id}");
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
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(divisionUser.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(divisionUser.columnsArray)
                                                  .excludes("id")
                                                  .expression("createTime","timeRange")

                                })
                                .id("getDivisionUserList")
                                .controller(controller => {
                                        controller.path("/divisionUser");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}