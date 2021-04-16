// getPage
@selectMsg@@
                        new ConfigItemBuilder()
                                .type("count")
                                .id("count")
                                .alias("t")
                                .conditions(collection=>{
                                        collection.includes(all.@sname.columnsArray)
                                                  .excludes("@skey")
@selectExcludes
                                })
                                .request(request => {
                                        request.path("count");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("@skey")
@selectReq
                                           .name("Get@tnameListReq")
                                })
@selectUserReq                   
                                .build(),

