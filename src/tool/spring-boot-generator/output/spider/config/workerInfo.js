/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-10 09:48:12
 */
const { @name } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.workerInfoConfig = {
        name: "@Name",
        items: [

                // insert
                builder(workerInfo, "insert", "add")
                        .includes(columnBuilder => {
                                columnBuilder.includes(@name.columnsArray)
                                        .exclude("id");
                        })
                        .req(reqBuilder=>{
                                reqBuilder.from("@PathVariable");
                        })
                        .resp(respBuilder=>{
                                respBuilder.type("boolean");
                        })
                        .build(),

                // deleteById
                builder(workerInfo, "delete", "deleteById")
                        .conditions(conditionBuilder => {
                                conditionBuilder.includes("id");
                        })
                        .req(reqBuilder=>{
                                reqBuilder.from("@PathVariable");
                        })
                        .resp(respBuilder=>{
                                respBuilder.type("boolean");
                        })
                        .build(),

                // updateById
                builder(workerInfo, "update", "updateById")
                        .includes(columnBuilder => {
                                columnBuilder.includes(@name.columnsArray)
                                        .exclude("id");
                        })
                        .conditions(columnBuilder => {
                                columnBuilder.includes("id");
                        })
                        .req(reqBuilder=>{
                                reqBuilder.from("@PathVariable");
                        })
                        .resp(respBuilder=>{
                                respBuilder.type("boolean");
                        })
                        .build(),

                // findById
                builder(workerInfo, "select", "findById")
                        .includes(columnBuilder => {
                                columnBuilder.includes(@name.columnsArray);
                        })
                        .conditions(columnBuilder => {
                                columnBuilder.includes("id");
                        })
                        .req(reqBuilder=>{
                                reqBuilder.from("@PathVariable");
                        })
                        .resp(respBuilder => {
                                respBuilder.name("@Name")
                                        .type("single");
                        })
                        .build(),
        ]
};