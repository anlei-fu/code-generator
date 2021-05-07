/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:47:22
 */

const { SpringBootProjectInitializer } = require("./SpringBootProjectInitializer");
const { InitConfigBuilder } = require("./builders/InitConfig");

async function main() {

        let builder =new InitConfigBuilder();
        builder.project("news")
               .company("jasmine")
               .targetFolder("D:/project/news")
               .generateDb()
               .generateStructure()
               .generateBuilder()
               .libPath("D:/project/code-generator/src/generator/spring-boot")
               .useDbConfig(db=>{
                       db.generateDb()
                         .generateRelation(true)
                         .configDataSource(dataSource=>{
                                dataSource.host("localhost")
                                .port(3306)
                                .user("root")
                                .password("2011801243")
                                .db("news")
                         })
               })
               .useAnalyzeConfig(analyze=>{

               });

        let config = builder.build();

        //  config = {
        //         generateDb: true,
        //         generaeStructure: true,
        //         generateBuilder: true,
        //         project: "deploy",
        //         company: "jasmine"
        // }
        // let dbConfig = {
        //         dataSourceConfig: {
        //                 host: "localhost",
        //                 port: "3306",
        //                 db: "deploy_system",
        //                 user: "root",
        //                 password: "2011801243"
        //         },
        //         generateDb: true,
        //         generateRelation: false

        // }
        let initializer = new SpringBootProjectInitializer();
        await initializer.init(config);
}

/*-------------------------------------------------main--------------------------------------------------*/
main();