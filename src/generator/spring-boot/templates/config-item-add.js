                        // add
                        @insertMsg@@
                        new ConfigItemBuilder()
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