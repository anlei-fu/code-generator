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
                password: "rTo0CesHi2018Qx",
                host: "192.168.0.36",
                database: "contract_sign"
        },
                "contract_sign");
}

test();