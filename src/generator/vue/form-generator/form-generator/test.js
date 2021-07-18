const { DIR } = require("../../../../libs/dir");
const { FILE } = require("../../../../libs/file");

// function main(){
//     let content ="";
//     DIR.getFiles("D:/project/vue-admin - Copy/spider/src/components/control/common").forEach(x=>{
//        content+=`import ${x.replace(".vue","")} from "./${x.replace(".vue","")}"/r/n`
//     });
//     FILE.write("1.txt",content);
// }

// main();

function main1() {
    let content = "";
    DIR.getFiles("D:/project/vue-admin - Copy/spider/src/components/control/button").forEach(x => {
        content += `vue.component( "${x.replace(".vue", "")}",${x.replace(".vue", "")});\r\n`
    });
    FILE.write("1.txt", content);
}

main1();