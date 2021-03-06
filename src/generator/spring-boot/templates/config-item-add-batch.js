                        // add batch
@insertMsg@@
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("addBatch")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.@sname.columnsArray)
                                                  .excludes("@skey")
@insertExcludes
                                })
                                .request(request => {
                                        request.path("/@spname/batch")
                                                .description("bacth add @sname");
                                })
@insertUserReq@@
                                .req(req => {
                                        req.doCreate()
                                           .excludes("@skey")
                                           .name("add@nameReq")
                                           .from("@RequestBody")
                                           .list()
@insertReq
                                })
                                .params(params=>{
                                        params.name("add@nameSqlParam")
                                })
                                .build(),

