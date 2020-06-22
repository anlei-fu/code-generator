/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:47:22
 */

const { SpringBootProjectInitializer } = require("./SpringBootProjectInitializer")

async function main(project, dbConfig,generateDb,generateRelation) {
        let initializer = new SpringBootProjectInitializer();
        await initializer.init(project, "jasmine", dbConfig, generateDb,generateRelation);
}

/*-------------------------------------------------main--------------------------------------------------*/
main(
        "deploy",
        {
                host: "localhost",
                port: "3306",
                db: "deploy_system",
                user: "root",
                password: "2011801243"
        },
        true,
        false
);