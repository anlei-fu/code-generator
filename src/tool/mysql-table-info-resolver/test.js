const {generate}=require("../sqls/model/model-generator");

 function main(){
        generate({
                user: "root",
                password: "rTo0CesHi2018Qx",
                host: "192.168.0.36",
                database: "work_report"
        },
                "work_report",
                "./output/work-report");
}

/**********************************main************************************** */

main();