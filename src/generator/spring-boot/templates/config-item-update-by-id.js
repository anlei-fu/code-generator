// updateById
@updateMsg@@
                        new ConfigItemBuilder()
                                .type("update")
                                .id("update")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.@sname.columnsArray)
                                                  .list("@skey")
@updateExcludes
                                })
                                .conditions(collection => {
                                        collection.includes("@skey")
                                                  .require("@skey")
                                })
                                .request(request => {
                                        request.path("")
                                               .description("update single @sname");;
                                })
@updateUserReq@@                
                                .req(req => {
                                        req.doCreate()
                                           .excludes("@skey")
@updateReq
                                           .name("Update@tnameReq")                                                
                                })
                                .build(),

