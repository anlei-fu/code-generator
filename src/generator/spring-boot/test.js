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
        let dbConfig={
                dataSourceConfig:{
                        host: "localhost",
                        port: "3306",
                        db: "deploy_system",
                        user: "root",
                        password: "2011801243"
                },
                generateDb:true,
                generateRelation:false

        }
        let initializer = new SpringBootProjectInitializer();
        await initializer.init(project, "jasmine",dbConfig);
}

/*-------------------------------------------------main--------------------------------------------------*/
main(
        "deploy",
        {
               
        },
        true,
        false
);