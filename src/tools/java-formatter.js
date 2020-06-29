const { GoogleJavaFormatter } = require("./../generator/common/formatter/GoogleJavaFormatter");

function main(folder){
       let formatter =new GoogleJavaFormatter();
       formatter.formatFolder(folder);
}

/***********************************************main********************************************************/
main("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/output/deploy/deploy/");