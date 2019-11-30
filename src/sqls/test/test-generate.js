/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-15 11:37:37
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-15 11:49:03
 */
const { generate } = require("./../model/model-generator")

async function test() {
        generate({
                user: "root",
                password: "2011801243",
                host: "127.0.0.1",
                database: "spider"
        },
                "spider",
                "./output/spider");
}

test();