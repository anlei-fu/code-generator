                        // deleteById
                        new ConfigItemBuilder()
                                .type("delete")
                                .id("deleteBy@deleteMethodName")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("@skey")
                                                  .require("@skey")
                                })
                                .request(request => {
                                        request.path("/@sname/{@skey}");
                                })
                                .req(req => {
                                        req.name("@skey")
                                           .type("@keyType")
                                           .from("@PathVariable");
                                })
@deleteUserReq@@
                                .build(),