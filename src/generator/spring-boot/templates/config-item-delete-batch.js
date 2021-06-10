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
                                        request.path("delete-batch")
                                               .description("bacth delete @sname");;
                                })
                                .req(req => {
                                        req.name("@skeys")
                                           .type("@keyType")
                                           .list();
                                           .from("@RequestBody")
                                })
@deleteUserReq@@
                                .build(),

