// updateById
@updateMsg@@
                        new ConfigItemBuilder()
                                .type("update")
                                .id("update")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.@sname.columnsArray)
@updateExcludes
                                })
                                .conditions(collection => {
                                        collection.require("@skey")
                                })
                                .request(request => {
                                        request.path("")
                                               .description("update single @sname");;
                                })
@updateUserReq@@                
                                .req(req => {
                                        req.doCreate()
                                           .from("@RequestBody")
@updateReq
                                           .name("Update@tnameReq")                                                
                                })
                                .build(),

