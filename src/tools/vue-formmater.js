const { PrettierFormatter } = require("./../generator/common/formatter/prettierFormatter");

function main(folder,ignore){
        let formatter =new PrettierFormatter();
        formatter.formatVueFolder(folder,ignore);
 }
 
 /***********************************************main********************************************************/
 main("F:/业务开发项目_研发一/os-admin-web/infoFlowSupport",x=>x=='F:/业务开发项目_研发一/contract-sign-admin/src/components/layout/home/Aside.vue');