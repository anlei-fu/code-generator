const { DIR } = require("./../../libs");

const TAREGT_DAO = "F:/业务开发项目_研发一/os-admin/os-dao/src/main/java/com/qxnw/os/dao/mapper";
const SOURCE_DAO = "C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/os-admin-generator/output/dao";
const TARGET_CONTROLLER = "F:/业务开发项目_研发一/os-admin/admin-api/src/main/java/com/qxnw/os/admin/api/conntroller";
const SOURCE_CONTROLLER = "C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/os-admin-generator/output/controller";
const TARGET_ENTITY = "F:/业务开发项目_研发一/os-admin/os-model/src/main/java/com/qxnw/os/model/database";
const SOURCE_ENTITY = "C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/os-admin-generator/entity";
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

function main(copyType){
   switch(copyType){
           case COPY_TYPE.ENTITY: 
           DIR.copy(SOURCE_ENTITY,TARGET_ENTITY);
           break;
           case COPY_TYPE.DAO: 
           DIR.copy(SOURCE_DAO,TAREGT_DAO);
           break;
           case COPY_TYPE.REQUEST: 
           DIR.copy(SOURCE_REQUEST,TARGET_REQUEST);
           break;
           case COPY_TYPE.CONTROLLER: 
           DIR.copy(SOURCE_CONTROLLER,TARGET_CONTROLLER);
           break;
           case COPY_TYPE.SERVICE: 
           DIR.copy(SOURCE_SERVICE,TARGET_SERVICE);
           break;
   }      
}
/******************************************************main*********************************************8**/
main(COPY_TYPE.REQUEST);
