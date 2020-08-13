const { GoogleJavaFormatter } = require("./../generator/common/formatter/GoogleJavaFormatter");

function main(folder){
       let formatter =new GoogleJavaFormatter();
       formatter.formatFolder(folder);
}

/***********************************************main********************************************************/
main("D:/test/crawler/crawler/jasmine-crawler/admin-web");