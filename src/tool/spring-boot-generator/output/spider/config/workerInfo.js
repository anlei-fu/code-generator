const { workerInfo } = require("./../db/main")


exports.workerInfoConfig = {
        name: "workerInfo",
        items: [

                // insert
                builder(workerInfo, "insert", "add")
                        .includes(
                                columnsBuilder(workerInfo.columnsArray)
                                        .exclude(["id"])
                                        .build()
                        )
                        .build(),

                // deleteById
                builder(workerInfo, "delete", "deleteById")
                        .conditions(conditions => {

                        })
                        .controller(controller => {
                                controller.path("/workerInfo/{id}")
                                        .description()
                                        .req(req => {
                                                req.exclude()
                                                        .page()
                                                        .item(field => {j
                                                                field.name()
                                                                        .type()
                                                                        .validates()
                                                                        .description();
                                                        });
                                        });
                        })
                        .param(param => {
                                param.defaultValue();

                        })
                        .response(resp => {
                                resp.mapper("int")
                                        .response("bool")
                                        .type("int")
                        })
                        .build(),

                // updateById
                builder(workerInfo, "update", "updateById")
                        .conditions([{ name: "id", required: true }])
                        .includes(
                                columnsBuilder(workerInfo.columnsArray)
                                        .exclude(["id"])
                                        .build()
                        )
                        .build(),

                // findById
                builder(workerInfo, "select", "findById")
                        .conditions([{ name: "id", required: true }])
                        .includes(workerInfo.columnsArray)
                        .build(),

        ]
};