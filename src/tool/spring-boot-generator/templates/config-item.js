const { all } = require("./../db/all")
const { Builder } = require("./../../../builders/builder")

@tableInfo
exports.@snameConfig = {
        table: all.@sname,
        name: "@name",
                items: [

                        // add
@insertMsg@@
                        new Builder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.@sname.columnsArray)
                                                  .excludes("@skey")
@insertExcludes
                                })
                                .request(request => {
                                        request.path("/@sname");
                                })
@insertUserReq@@
                                .req(req => {
                                        req.doCreate()
                                           .excludes("@skey")
@insertReq
                                })
                                .build(),

                        // deleteById
                        new Builder()
                                .type("delete")
                                .id("deleteBy@deleteMethodName")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("@skey")
                                                  .require("@skey")
                                })
                                .request(request => {
                                        request.path("/@sname/{@skey}");
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
                        new Builder()
                                .type("update")
                                .id("updateBy@updateMethodName")
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
                                .request(request => {
                                        request.path("/@sname/{@skey}");
                                })
                                .req(req => {
                                        req.name("@skey")
                                           .type("@keyType")
                                           .from("@PathVariable");
                                })
@updateUserReq@@                
                                .req(req => {
                                        req.doCreate()
                                           .excludes("@skey")
@updateReq
                                           .name("Update@tnameReq")                                                
                                })
                                .build(),

                        // getById
                        new Builder()
                                .type("select")
                                .id("getBy@selectMethodName")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.@sname.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("@skey")
                                                  .require("@skey")
                                })
                                .request(request => {
                                        request.path("/@sname/{@skey}");
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
                        new Builder()
                                .type("select")
                                .id("getList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.@sname.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.@sname.columnsArray)
                                                  .excludes("@skey")
@selectExcludes
                                })
                                .request(request => {
                                        request.path("/@sname/list");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("@skey")
@selectReq
                                           .name("Get@tnameListReq")
                                })
@selectUserReq                   
                                .build(),

                        // get detail item
                        new Builder()
                                .type("select")
                                .id("getDetailBy@selectMethodName")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.@sname.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("@skey")
                                                  .require("@skey")
                                })
@joins
                                .request(request => {
                                        request.path("/@sname/detail/{@skey}");
                                })
                                .req(req => {
                                        req.name("@skey")
                                           .type("@keyType")
                                           .from("@PathVariable");
                                 })
                                .resp(resp => {
                                        resp.doCreate()
                                        .name("@tnameDetailResp")
                                        .single()
                                        .build()
                                })
@selectUserReq@@         
                                           
                                .build(),

                         // get detail list
                        new Builder()
                                .type("select")
                                .id("getDetailList")
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
                                .request(request => {
                                                request.path("/@sname/detail/list");
                               })
                                .req(req => {
                                         req.doCreate()
                                        .excludes("@skey")
@selectReq
                                        .name("Get@tnameListReq")
                                })
@selectUserReq                   
                                .resp(resp=>{
                                        resp.doCreate()
                                            .name("@tnameDetailResp")
                                            .build()
                                })
                                .build(),
                ]
}