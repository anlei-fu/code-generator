// getPage
@selectMsg@@
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
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
                                        request.path("/@sname/page")
                                               .description("get @sname page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("@skey")
@selectReq
                                           .name("Get@tnamePageReq")
                                })
@selectUserReq                   
                                .build(),

