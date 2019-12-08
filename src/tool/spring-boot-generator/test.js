const { SqlGenerator } = require("./code-generator");
const { FILE } = require("./../../libs/file")
const { workerInfo, workerRunRecord } = require("./../../sqls/test/output/spider/main")

let config = {
        type: "update",
        includes: workerInfo.columnsArray,
        id: "doUpdate",
        conditions: [{ name: "id", required: false }, { name: "joinTime", required: true }],
        table: workerInfo,
        joins: [{
                table1: workerRunRecord,
                type: "inner",
                includes: ["startTime"],
                joinCondition: "worker_info.id = worker_run_record.worker_id",
                alias: "t",
                conditions: ["startTime"]
        }]

}

function main() {
        let generator = new SqlGenerator(config);
        FILE.write("1.xml", generator.render());
}

let configs = {
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
                        .conditions([{ name: "id", required: true }])
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







/*-------------------------------------------------main--------------------------------------------------*/
main();