                                // delete batch
                                new ConfigItemBuilder()
                                .type("delete")
                                .id("deleteBatch")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("@skey")
                                                  .require("@skey")
                                                  .list("@skey")
                                })
                                .request(request => {
                                        request.path("/@sname/deleteBatch");
                                })
                                .req(req => {
                                        req.name("@skeys")
                                           .type("@keyType")
                                           .list();
                                })
@deleteUserReq@@
                                .build(),