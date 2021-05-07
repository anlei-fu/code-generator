const { DIR,FILE } = require("./../../libs");
const { STR ,NamingStrategy} = require("../../libs");
const { all } = require("../common/table-analyze/table-info-resolvers/oracle-table-info-resolver/outputs/os/all");

const TAREGT_DAO = "F:/业务开发项目_研发一/os-admin/os-dao/src/main/java/com/qxnw/os/dao/mapper";
const SOURCE_DAO = "C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/os-admin-generator/output/dao";
const TARGET_CONTROLLER = "F:/业务开发项目_研发一/os-admin/admin-api/src/main/java/com/qxnw/os/admin/api/conntroller";
const SOURCE_CONTROLLER = "C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/os-admin-generator/output/controller";
const TARGET_ENTITY = "F:/业务开发项目_研发一/os-admin/os-model/src/main/java/com/qxnw/os/model/database";
const SOURCE_ENTITY = "C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/os-admin-generator/output/entity";
const TARGET_REQUEST = "F:/业务开发项目_研发一/os-admin/os-model/src/main/java/com/qxnw/os/model/request";
const SOURCE_REQUEST = "C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/os-admin-generator/output/dto";
const TARGET_SERVICE = "F:/业务开发项目_研发一/os-admin/admin-api/src/main/java/com/qxnw/os/admin/api/service/impl";
const SOURCE_SERVICE = "C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/os-admin-generator/output/service";

const COPY_TYPE={
        ENTITY:1,
        REQUEST:2,
        DAO:3,
        SERVICE:4,
        CONTROLLER:5,
}

/**
 * 
 * @param {[]} tables 
 */
function main(tables){
  tables.forEach(x=>{
           let name =STR.removeRange(x.name,0,2);
           FILE.copy(`${SOURCE_DAO}/${name}DAO.Java`,`${TAREGT_DAO}/${name}DAO.Java`);
           FILE.copy(`${SOURCE_ENTITY}/${name}DO.Java`,`${TARGET_ENTITY}/${name}DO.Java`);
           FILE.copy(`${SOURCE_ENTITY}/${name}PageDTO.Java`,`${TARGET_ENTITY}/${name}DTO.Java`);
           FILE.copy(`${SOURCE_ENTITY}/${name}CreateDTO.Java`,`${TARGET_ENTITY}/${name}CreateDTO.Java`);
           FILE.copy(`${SOURCE_ENTITY}/${name}UpdateDTO.Java`,`${TARGET_ENTITY}/${name}UpdateDTO.Java`);
  });
}
/******************************************************main*********************************************8**/
main([
    all.osPlatAccount,
    all.osPlatAccountApp
]);
