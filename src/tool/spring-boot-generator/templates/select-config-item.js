                        // getList
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(@sname.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(@sname.columnsArray)
                                         .excludes("@skey")
@conditions
                                })
                                .id("get@nameList")
                                .controller(controller => {
                                        controller.path("/@sname");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("@skey");
@reqs
                                })
                                .build()