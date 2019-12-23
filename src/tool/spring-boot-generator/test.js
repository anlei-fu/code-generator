/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:47:22
 */
const { init } = require("./init")

// exports.workerInfo = {
//         table: workerInfo,
//         name: "WorkerInfo",
//         items: [{
//                 includes: workerInfo.columnsArray,
//                 type: "select",
//                 id: "getWorkerInfoById",
//                 conditions: ["id"],
//                 controller: {
//                         path: "/workerInfo/{id}"
//                 },
//                 reqs: [{
//                         name: "id",
//                         type: "Integer",
//                         from: "@PathVarible"
//                 }, 
//                 ],
//                 resp: {
//                         doCreate: true,
//                         single: true
//                 }
//         },
//         {
//                 type: "delete",
//                 id: "deleteWorkerInfoById",
//                 conditions: ["id"],
//                 controller: {
//                         path: "/workerInfo/{id}"
//                 },
//                 reqs: [{
//                         name: "id",
//                         type: "Integer",
//                         from: "@PathVarible"
//                 }
//                 ],
//         },
//         {
//                 type: "select",
//                 id: "getWorkerInfoByIp",
//                 includes: workerInfo.columnsArray,
//                 conditions: ["id"],
//                 controller: {
//                 },
//                 reqs: [{
//                         name: "ip",
//                         type: "String",
//                 },
//                 ],
//                 resp: {
//                         single: false
//                 }
//         }
//         ]

// }

async function main(project, dbConfig) {
        await       init(project, dbConfig);

        // let root = `./output/${project}/src/main/java/com/${project}`;
        // config.controlerFolder = `${root}/controller`;
        // config.mapperFolder = `${root}/mapper`;
        // config.mapperConfigFolder = `./output/${project}/src/main/resource/mapper`;
        // config.reqFolder = `${root}/pojo/req`;
        // config.respFolder = `${root}/pojo/resp`;
        // config.serviceFolder = `${root}/service`;
        // config.serviceImplFolder = `${root}/service/impl`;
        // config.entityFolder = `${root}/pojo/entity`;
        // config.project = project;

        // let generator = new Generator(config);
        // generator.writeAll();

}








/*-------------------------------------------------main--------------------------------------------------*/
main("spider", { host: "localhost", port: "3306", db: "spider", user: "root", password: "2011801243" });