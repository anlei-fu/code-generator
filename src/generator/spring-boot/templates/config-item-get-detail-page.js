
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