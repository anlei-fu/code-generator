const { all } = require("./../db/all")
const { builder } = require("./../../../builders/builder")

@tableInfo
exports.@snameConfig = {
        table: all.@sname,
        name: "@name",
                items: [

                        // add
@insertMsg@@
                        new builder()
                                .type("insert")
                                .id("add@name")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.@sname.columnsArray)
                                                  .excludes("@skey")
@insertExcludes
                                })
                                .controller(controller => {
                                        controller.path("/@sname");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("@skey")
@insertReq
                                })
@insertUserReq@@
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("delete@nameBy@deleteMethodName")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("@skey")
                                                  .require("@skey")
                                })
                                .controller(controller => {
                                        controller.path("/@sname/{@skey}");
                                })
                                .req(req => {
                                        req.name("@skey")
                                           .type("@keyType")
                                           .from("@PathVariable");
                                })
@deleteUserReq@@
                                .build(),
                                
                        // updateById
@updateMsg@@
                        new builder()
                                .type("update")
                                .id("update@nameBy@updateMethodName")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.@sname.columnsArray)
                                                  .excludes("@skey")
@updateExcludes
                                })
                                .conditions(collection => {
                                        collection.includes("@skey")
                                                  .require("@skey")
                                })
                                .controller(controller => {
                                        controller.path("/@sname/{@skey}");
                                })
                                .req(req => {
                                        req.name("@skey")
                                           .type("@keyType")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("@skey")
@updateReq
                                })
@updateUserReq@@
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("get@nameBy@selectMethodName")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.@sname.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("@skey")
                                                  .require("@skey")
                                })
                                .controller(controller => {
                                        controller.path("/@sname/{@skey}");
                                })
                                .req(req => {
                                        req.name("@skey")
                                           .type("@keyType")
                                           .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
@selectUserReq@@
                                .build(),

                        // getList
@selectMsg@@
                        new builder()
                                .type("select")
                                .id("get@nameList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.@sname.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.@sname.columnsArray)
                                                  .excludes("@skey")
@selectExcludes
                                })
                                .controller(controller => {
                                        controller.path("/@sname/list");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("@skey")
@selectReq
                                })
@selectUserReq
                                .build(),

                        // get detail item
                        new builder()
                                .type("select")
                                .id("get@nameDetailBy@selectMethodName")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.@sname.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("@skey")
                                                  .require("@skey")
                                })
@joins
                                .controller(controller => {
                                        controller.path("/@sname/detail/{@skey}");
                                })
                                .req(req => {
                                        req.name("@skey")
                                           .type("@keyType")
                                           .from("@PathVariable");
                                 })
                                .resp(resp => {
                                        resp.single();
                                })
@selectUserReq@@                        
                        .build(),

                         // get detail list
                        new builder()
                                .type("select")
                                .id("get@nameDetailList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.@sname.columnsArray)
                                })
                                .conditions(collection=>{
                                         collection.includes(all.@sname.columnsArray)
                                                   .excludes("@skey")
@selectExcludes
                                 })
@joins                                
                                .controller(controller => {
                                                controller.path("/@sname/detail/list");
                               })
                                .req(req => {
                                         req.doCreate()
                                        .excludes("@skey")
@selectReq
                                })
@selectUserReq
                                .build(),
                ]
}