const { PrettierFormatter } = require("./../generator/common/formatter/prettierFormatter");

function main(folder){
       let formatter =new PrettierFormatter();
       formatter.formatJsFolder(folder);
}

/***********************************************main********************************************************/
main("F:/业务开发项目_研发一/contract-sign-admin/src");