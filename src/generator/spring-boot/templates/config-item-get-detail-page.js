
                        // get detail page
@selectMsg@@
                         new ConfigItemBuilder()
                         .type("select")
                         .id("getDetailPage")
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
                                         request.path("/@sname/detail/page")
                                                .description("get @sname page with additional details");;
                        })
                         .req(req => {
                                  req.doCreate()
                                 .excludes("@skey")
@selectReq
                                 .name("Get@tnamePageReq")
                         })
@selectUserReq                   
                         .resp(resp=>{
                                 resp.doCreate()
                                     .name("@tnameDetailResp")
                                     .build()
                         })
                         .build(),

