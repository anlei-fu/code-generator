                                // updateBatch
                                @updateMsg@@
                                new ConfigItemBuilder()
                                .type("update")
                                .id("updateBatch")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.@sname.columnsArray)
                                .excludes("@skey")
@updateExcludes
                                 })
                                 .conditions(collection => {
                                        collection.includes("@skey")
                                        .require("@skey")
                                        .list("@skey");
                                })
                                .request(request => {
                                        request.path("/@sname/updateBatch");
                                 })
@updateUserReq@@                
                                .req(req => {
                                        req.doCreate()
@updateReq
                                .name("Update@tnameBatchReq")                                                
                                 })
                                .build(),