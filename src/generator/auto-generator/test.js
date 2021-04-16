const { Iniializer } = require("./Initializer");
const { all } = require("./../common/table-analyze/table-info-resolvers/mysql-table-info-resolver/output/work-report/all.js");
const { OBJECT } = require("./../../libs");

async function main() {
        let initializer = new Iniializer({
                host: "localhost",
                user: "root",
                password: "2011801243",
                port: 3306,
                database: "crud_project_generator"
        });

        await initializer.init("test", "jasmine", OBJECT.toArray(all));

        console.log("finished!");
}

/***************************************************************************************main************************************************************8*/
main();