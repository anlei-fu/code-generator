/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:47:22
 */

const { init } = require("./init")

async function main(project, dbConfig) {
        await init(project, dbConfig);
}

/*-------------------------------------------------main--------------------------------------------------*/
main("delivery", { host: "192.168.0.36", port: "3306", db: "ds_delivery", user: "root", password: "rTo0CesHi2018Qx" });