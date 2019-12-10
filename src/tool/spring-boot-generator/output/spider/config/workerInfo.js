/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-10 09:48:12
 */
const { workerInfo } = require("./../db/main")
const {builder}=require("./../../../builder")
const {columnBuilder}=require("./../../../columnBuilder")
const {joinBuilder}=require("./../../../joinBuilder")
const {fieldBuilder: FieldBuilder}=require("./../../../fieldBuilder")
const {reqBuilder}=require("./../../../reqBuilder")

exports.workerInfoConfig = {
        name: "workerInfo",
        items: [

                // insert
                builder(workerInfo, "insert", "add")
                        .includes( columns=>{
                                columns.includes
                        }
                               
                        ),

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
                                columnBuilder(workerInfo.columnsArray)
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