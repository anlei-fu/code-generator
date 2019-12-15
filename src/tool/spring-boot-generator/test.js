const { Generator } = require("./code-generator");
const { FILE } = require("./../../libs/file")
const { init } = require("./init")
const { workerInfo, workerRunRecord } = require("./../../sqls/test/output/spider/main")

let config = {
        table: workerInfo,
        name: "WorkerInfo",
        items: [{
                includes: workerInfo.columnsArray,
                type: "select",
                id: "GetById",
                conditions: ["id"],
                controller: {},
                reqs: [{
                        name: "id",
                        type: "Integer",
                        from: "@PathVarible"
                }],
                resp: {
                        doCreate: true,
                        single: true
                }
        }]

}

async function main(project,dbConfig) {
        await init(project, dbConfig);

        let root=`./output/${project}/src/main/java/com/${project}`;
        config.controlerFolder = `${root}/controller`;
        config.mapperFolder = `${root}/mapper`;
        config.mapperConfigFolder =`./output/${project}/src/main/resource/mapper`;
        config.reqFolder =`${root}/pojo/req`;
        config.respFolder = `${root}/pojo/resp`;
        config.serviceFolder = `${root}/service`;
        config.serviceImplFolder =`${root}/service/impl`;
        config.entityFolder=`${root}/pojo/entity`;

        let generator = new Generator(config);
        generator.writeAll();
    
}








/*-------------------------------------------------main--------------------------------------------------*/
main("spider",{host:"localhost",port:"3306",db:"spider",user:"root",password:"2011801243"});