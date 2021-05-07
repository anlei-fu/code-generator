                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getBy@selectMethodName")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.@sname.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("@skey")
                                                  .require("@skey")
                                })
                                .request(request => {
                                        request.path("{@skey}")
                                                .description("get single @sname");;
                                })
                                .req(req => {
                                        req.name("@skey")
                                           .type("@keyType")
                                           .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
@selectUserReq@@
                                .build(),

