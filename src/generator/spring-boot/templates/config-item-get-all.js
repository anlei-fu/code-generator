// getPage
@selectMsg@@
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getAll")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.@sname.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes([])
                                })
                                .request(request => {
                                        request.path("/@sname/all")
                                               .description("get all @sname");;
                                })
                                .resp(resp=>{
                                        resp.list()
                                })
                                .build(),

