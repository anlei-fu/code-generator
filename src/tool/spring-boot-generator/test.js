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
        await init(project,"jasmine", dbConfig);
}

/*-------------------------------------------------main--------------------------------------------------*/
main("test", { host: "localhost", port: "3306", db: "test", user: "root", password: "2011801243" });