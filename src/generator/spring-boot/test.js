/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:47:22
 */

const { SpringBootProjectInitializer } = require("./SpringBootProjectInitializer")

async function main(project, dbConfig) {
        let initializer =new SpringBootProjectInitializer();
        await initializer.init(project,"jasmine", dbConfig);
}

/*-------------------------------------------------main--------------------------------------------------*/
main("contractSign", { host: "localhost", port: "3306", db: "contract_sign", user: "root", password: "2011801243" });