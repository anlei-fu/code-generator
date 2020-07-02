// updateById
@updateMsg@@
                        new ConfigItemBuilder()
                                .type("update")
                                .id("updateBy@updateMethodName")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.@sname.columnsArray)
                                                  .excludes("@skey")
                                                  .list("@skey")
@updateExcludes
                                })
                                .conditions(collection => {
                                        collection.includes("@skey")
                                                  .require("@skey")
                                })
                                .request(request => {
                                        request.path("/@sname/{@skey}")
                                               .description("update single @sname");;
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

