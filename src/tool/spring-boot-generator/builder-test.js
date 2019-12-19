/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:34:45
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 16:24:30
 */
const { builder } = require("./builders/builder");
const { columnBuilder } = require("./builders/columnBuilder");

function testBuilder() {
        let c = new builder("select", "1")
                .req(req => {
                        req.type("Integer")
                                .name("id")
                                .from("@PathVarible")
                })
                .req(req => {
                        req.doCreate()
                                .excludes("id");
                })
                .conditions(conditions => {
                        conditions.includes(["id"]);
                })
                .resp(resp => {
                        resp.doCreate()
                            .description("sdasa")
                            .single();
                })
                .alias("t1")
                .controller(c => {
                        c.path("12")
                                .description("1212");
                }).includes(c => {
                        c.includes(["id", "ip", "name"])
                                .alias("id", "jk");
                }).build();

        console.log(c);

}

function testColumnBuilder() {
        let builder = new columnBuilder();
        builder.includes(["id", "ip"])
                .alias("id", "name")
                .prefix("id", "t1")
                .excludes("id");

        console.log(builder);

}

/***************************************************************************************** */
//let b=new test();
//console.log(b);

testBuilder();

// testColumnBuilder();