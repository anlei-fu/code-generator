// getPage
@selectMsg@@
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getAll")
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
                                        request.path("/@sname/all")
                                               .description("get all @sname");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("@skey")
@selectReq
                                           .name("Get@tnameListReq")
                                })
@selectUserReq                   
                                .resp(resp=>{
                                        resp.list
                                })
                                .build(),

